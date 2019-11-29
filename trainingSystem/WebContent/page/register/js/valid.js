

var isSubmit = false;//是否提交(全部合法才能提交)

var isUsername = false;//账号是否合法

var isName = false;//姓名是否合法

var isPassword = false;//密码是否合法

var isPassword1 = false;//密码是否一致


function myblur(obj) {


    switch (obj.id) {
        //账号
        case "username":
            var reg = /^[a-zA-Z0-9_-]{4,12}$/
            if (!reg.test(obj.value)) {
                document.getElementById("username_tip").innerHTML = "<font color='red'>*请输入4至12位账号</font>";
            } else {

                document.getElementById("username_tip").innerHTML = "请输入您的账号";
                isUsername = true;
            }
            break;
            //姓名
        case "name":
            var reg = /^[\u2E80-\u9FFF]+$/;
            if (!reg.test(obj.value)) {
                document.getElementById("name_tip").innerHTML = "<font color='red'>*请输入合法中文名</font>";
            } else {
                document.getElementById("name_tip").innerHTML = "请输入您的姓名";
                isName = true;
            }
            break;
            //密码
        case "password":
            var reg = /^[a-zA-Z0-9_-]{6,20}$/
            if (!reg.test(obj.value)) {
                document.getElementById("password_tip").innerHTML = "<font color='red'>*请输入6至20位密码</font>";
            } else {
                document.getElementById("password_tip").innerHTML = "请使用6~20个英文字母（区分大小写）、符号或数字";
                isPassword = true;
            }
            break;
            //确认密码
        case "password1":
            var p1 = document.getElementById("password").value;
            var p2 = obj.value;
            if (!(p1==p2)) {
                document.getElementById("password1_tip").innerHTML = "<font color='red'>*两次密码不一致</font>";
            }else{
                document.getElementById("password1_tip").innerHTML = "请保证两次密码输入一致";
                isPassword1 = true;
            }

            break;
    }
    if (isUsername&&isName&&isPassword1&&isPassword) {
        isSubmit = true;
    }


}

//判断提交
function onSubmit() {
    if (!isSubmit){
        alert("请正确填写信息");
    }
    return isSubmit;
}
//回车提交
function toSubmit(e) {
    //回车登录
    var keyNum = null;
    keyNum = window.event?e.keyCode:e.which;
    if (keyNum == 13){
        document.getElementById("form").submit();
    }
}