var signUp = {
    init : function () {
        this.clickReturn();
        this.clickSignUpBtn();
    },
    clickReturn : function () {
        $("#return").on("click",function () {
            window.location.href = "/login"
        })
    },
    clickSignUpBtn: function () {
        $("#submit").on("click",function () {
            // console.log($("#user").val() + " " + $("#password").val())
            if($("#user").val() != "" && $("#password").val() != ""){
                // console.log($("#user").val() + " " + $("#password").val());
                var math = Math.floor(Math.random()*10000 + Math.random() * 25867 + 18);
                var str = "email=" + $("#email").val() + "&user=" + $("#user").val() + "&password=" + $("#password").val() + "&idCard=" + math;
                $.post("/login/signUp/user",str,function () {
                })
                $("#success").css({"opacity":"1"});
                setTimeout(function () {
                    window.location.href = "/login"
                },1000);
            }
        })
    }
}
signUp.init();