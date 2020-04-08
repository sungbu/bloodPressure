var login = {
    init: function () {
        if($.cookie("idCard") != undefined){
            window.location.href = "/"
        }else{
            this.findUser();
            this.clickSiginUp();
        }
        
        // this.findCard(this.setIdCard());
    },
    data: {},
    findUser: function () {
        var self = this;
        $("#user").on("blur",function () {
            var val = "user="+$(this).val();
            var that = this;
            if(val != ""){
                $.post("/login/siginIn",val,function (data) {
                    if(data[0] != undefined){
                        $("#headPic").html("<img src='"+data[0].headPic+"'/>")
                    }else{
                        if($(that).val() != ''){
                            $("#wraing").html("用户名不存在");
                        }
                    }
                })
            }
        })
        $("#submit").on("click",function () {
            var val = "user="+$("#user").val() + "&password=" + $("#password").val();
            $.post("/login/siginIn",val,function (data) {
                if(data.code == 1){
                    $("#wraing").html("登录成功");
                    console.log(data.idCard);
                    self.setIdCard(data.idCard);
                    window.location.href = "/";
                }else if(data.code == 2){
                    $("#wraing").html("密码错误")
                }
            },"json")
        })
    },
    setIdCard: function(idCard) {
        $.cookie('idCard', idCard, { expires: 365 });
        // console.log(idCard)
        return idCard
    },
    clickSiginUp: function () {
        $("#signUp").on("click",function () {
            window.location.href = "/login/signUp"
        })
    }
}
login.init();