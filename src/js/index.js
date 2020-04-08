var pressure = {
    init : function () {
        if($.cookie("idCard") == undefined){
            window.location.href = "/login"
        }else{
            this.findCard();
            this.getData();
            this.clickPressureSubmit();
            this.cancellation();
        }
    },
    chartList : {
        color: "transparent",
        startValue: '0' ,
        tooltip: {
            trigger: 'axis',//竖线选中事件
            // showContent: false,
            formatter: function (params,ticket,callback) {
                var obj = {
                    month : params[0].axisValue,
                    lowPressure: params[0].data,
                    heightPressure: params[1].data
                }
                pressure.addBloodPressure(obj);
                pressure.addTime(obj.month);
            }
        },
        xAxis: {
            splitLine:{show: false},
            type: 'category',
            data: [],
            axisLabel:{    //文字
                textStyle:{
                    // color:'#a3aab0',
                    color:'transparent'
                },
                interval:0
            },
            axisLine:{   //线条
                lineStyle:{
                    color:'#a3aab0',
                }
            }
        },
        yAxis: {
            minInterval: 60,
            splitLine:{show: false},
            type: 'value',
            axisLabel:{    //文字
                textStyle:{
                    color:'#a3aab0',
                }
            },
            axisLine:{   //线条
                lineStyle:{
                    color:'#a3aab0',
                }
            }
        },
        series: [
        {
            name: "低压",
            color: "#49a0cd",
            data: [],
            type: 'line',
            smooth: true,
            symbolSize: 4
            // symbol: 'none'
        },
        {
            name: "高压",
            color: "#cd182b",
            data: [],
            type: 'line',
            smooth: true,
            symbolSize: 4
            // symbol: 'none'
        },
        
    ]
    },
    bloodPressure : [],
    findCard: function () {
        var cookie = $.cookie("idCard");
        // console.log(date);
        $.post("/user/idCard","idCard="+cookie,function () {
        },"json")
    },
    getData : function () {
        var self = this;
        var date = new Date().getFullYear();
        $.post("/api/bloodPressure","year="+date,function (data) {
            // console.log(data);
            self.bloodPressure = data;
            data.forEach(function (ele,index) {
                self.chartList.series[0].data.push(ele.lowPressure);
                self.chartList.series[1].data.push(ele.heightPressure);
                self.chartList.xAxis.data.push(ele.ctime);
                // console.log(self.chartList.series[0].data);
            })
            self.showMonth();
            var pressure = self.getAMonthData(new Date().getMonth() + 1,self.bloodPressure);
            self.chartList.xAxis.data = pressure.month;
            self.chartList.series[0].data = pressure.lowPressure;
            self.chartList.series[1].data = pressure.heightPressure;
            self.addEventListenner();
            self.addDom();
            self.addTime();
            // self.addCalendar();
        })
        // console.log(self.chartList.series[0].data)
    },
    // addCalendar : function () {
    //     this.bloodPressure.forEach(function (ele,index) {
    //         console.log(ele.year);
    //     })
    // },
    addDom : function () {
        var self = this;
        // console.log(chartList);
        var myChart = echarts.init($("#chart")[0]);
        // setTimeout(function () {
        myChart.setOption(self.chartList);
        // this.myChartClick(myChart);
            // console.log(self.chartList.series.data)
        // } ,1000)
    },
    showMonth : function () {
        var self = this;
        var month = [];
        var str = '';
        var date = new Date().getMonth()+1;
        self.bloodPressure.forEach(function (ele,index) {
            month.push(ele.month)
        })
        month =  Array.from(new Set(month));
        month.forEach(function (ele,index) {
            str += `<li data-month="${ele}">${self.transformationMonth(ele)}</li>`;
        })
        $("#month").html(str)
        $("#month li[data-month = "+ date +"]").addClass("active");
        // console.log(date);
    },
    transformationMonth (month) {
        switch(month) {
            case "1" : return("一月");break;
            case "2" : return("二月");break;
            case "3" : return("三月");break;
            case "4" : return("四月");break;
            case "5" : return("五月");break;
            case "6" : return("六月");break;
            case "7" : return("七月");break;
            case "8" : return("八月");break;
            case "9" : return("九月");break;
            case "10" : return("十月");break;
            case "11" : return("十一月");break;
            case "12" : return("十二月");break;
        }
    },
    getAMonthData (date,data) {
        var obj = {
            lowPressure : [],
            heightPressure: [],
            month: []
        };
        data.forEach(function (ele,index) {
            
            if(ele.month == date){
                obj.lowPressure.push(ele.lowPressure);
                obj.heightPressure.push(ele.heightPressure);
                obj.month.push(ele.ctime);
            }else{
                if(ele.ctime == date){
                    obj.lowPressure.push(ele.lowPressure);
                    obj.heightPressure.push(ele.heightPressure);
                    obj.month.push(ele.ctime);
                }
            }
        })
        return obj
    },
    addEventListenner : function() {
        var self = this;
        var pressure = undefined;
        $("#month li").on("click",function () {
            $("#month li[class = 'active']").removeClass();
            // console.log($(this).attr("data-month"));
            var clickMonth = $(this).attr("data-month");
            pressure = (self.getAMonthData(clickMonth,self.bloodPressure));
            // console.log(pressure)
            // console.log(pressure.month[pressure.month.length-1]);
            self.chartList.xAxis.data = pressure.month;
            self.chartList.series[0].data = pressure.lowPressure;
            self.chartList.series[1].data = pressure.heightPressure;
            self.addDom();
            $(this).addClass("active");
            // console.log(pressure)
            self.addTime(pressure.month[pressure.month.length-1]);
        });
        $("#addBtn").on("click",function () {
            $("#addBloodpressure").animate({"left":"0"},300,"swing",function() {
                // console.log(111)
            })
        })
        $("#return").on("click",function () {
            $("#addBloodpressure").animate({"left":"100%"},300,"swing",function() {
                // console.log(111)
            })
        })
    },
    addTime : function (date) {
        var len = this.bloodPressure.length;
        if(date){
            this.addBloodPressure(date);
            this.timeConversion(date)
            $("#timeAxis").html(`<span>${this.timeConversion(date)}</span>`)
        }else{
            this.timeConversion(this.bloodPressure[len-1].ctime)
            $("#timeAxis").html(`<span>${this.timeConversion(this.bloodPressure[len-1].ctime)}</span>`)
            this.addBloodPressure(this.bloodPressure[len-1].ctime);
        }
    },
    timeConversion : function (cDate) {
        var date = new Date(cDate)
        // console.log(date.toDateString(),new Date().toDateString())
        if(date.toDateString() == new Date().toDateString()){
            return ("今天");
        }else{
            return (date.getMonth() + 1 + "月" + date.getDate() + "日");
        }
    },
    addBloodPressure: function (date) {
        var self = this;
        if((typeof date) == 'string'){
            this.bloodPressure.forEach(function (ele,index) {
                if(ele.ctime == date){
                    $("#lowPressure").html(`<span>${ele.lowPressure}</span>`);
                    $("#heightPressure").html(`<span>${ele.heightPressure}</span>`);
                    var score = self.bloodPressureScore(ele).score;
                    // console.log(score);
                    $("#score").html(`<span>${score + '分'}</span>`);
                }
            })
        }else{
            $("#lowPressure").html(`<span>${date.lowPressure}</span>`);
            $("#heightPressure").html(`<span>${date.heightPressure}</span>`);
            var score = self.bloodPressureScore(date).score;
        }
        
    },
    // myChartClick: function (myChart) {
    //     var self = this;
    //     // myChart.on("click",function (params) {
    //     //     // console.log(params);
    //     //     console.log(self.getAMonthData(params.name,self.bloodPressure))
    //     //     // self.addBloodPressure(self.getAMonthData(params.name,self.bloodPressure))
    //     //     // self.addTime(params.name)
    //     // })
    //     // myChart.on("click",function (event) {
    //     //     console.log("111")
    //     //     // var xAxisInfo = event.axesInfo[0];
    //     //     // console.log(xAxisInfo)
    //     //     // self.addBloodPressure(self.getAMonthData(params.name,self.bloodPressure))
    //     //     // self.addTime(params.name)
    //     // })
    // },
    clickPressureSubmit: function () {
        var self = this;
        var obj = {
            lowPressure: "",
            heightPressure: ""
        }
        $("#pressureSubmit").on("click",function (e) {
            e.preventDefault();
            obj.lowPressure = $("#postLowPressure").val();
            obj.heightPressure = $("#postHeightPressure").val();
            self.poseBloodPressure(obj)
        })
    },
    poseBloodPressure: function (date) {
        var self = this;
        if(date.lowPressure == "" || date.heightPressure == ""){
            console.log("输入为空")
        }else{
            var month = new Date().getMonth()+1;
            var req = "lowPressure="+date.lowPressure+"&heightPressure="+date.heightPressure+"&month="+month;
            $.post("/api/postBloodPressure",req,function (date) {
            },"json")
            setTimeout(function () {
                $("#addBloodpressure").animate({"left":"100%"},300,"swing")
                self.getData();
                self.addDom();
            },1000)
        }
    },
    cancellation: function () {
        $("#Cancellation").on("click",function () {
            $.removeCookie('idCard',{ path: '/'});
            window.location.href = "/login"
        })
    },
    bloodPressureScore: function (data) {
        if(data.heightPressure < 90 && data.lowPressure < 60){
            //低血压
            data.score = 50;
            // console.log("低血压")
        }else if(data.heightPressure < 120 && data.lowPressure < 80){
            //理想血压
            data.score = 90;
            // console.log("理想血压")
        }else if(data.heightPressure < 130 && data.lowPressure < 85){
            //正常血压
            data.score = 80;
            // console.log("正常血压")
        }else if(data.heightPressure < 139 && data.lowPressure < 89){
            //正常高值
            data.score = 60;
            // console.log("正常高值")
        }else if(data.heightPressure < 159 && data.lowPressure < 99){
            //轻度高血压（1级）
            data.score = 50;
            // console.log("轻度高血压（1级）")
        }else if(data.heightPressure < 179 && data.lowPressure < 109){
            //中度高血压（2级）
            data.score = 40;
            // console.log("中度高血压（2级）")
        }else if(data.heightPressure >= 180 && data.lowPressure >= 110){
            //重度高血压（3级）
            data.score = 30;
            // console.log("重度高血压（3级）")
        }else if(data.heightPressure >= 140 && data.lowPressure < 90){
            //单纯性收缩性高血压
            data.score = 40;
            // console.log("单纯性收缩性高血压")
        }else{
            data.score = 0;
        }
        return data;
    }
}
pressure.init();