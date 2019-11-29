<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录</title>
    <link rel="stylesheet" href="./css/login.css">

</head>
<body>
<div class="login">
    <div class="login_title">
        <p><img src="./resources/layui/images/login/junhui.png" style="width:80px;height:80px;margin-right:30px;"/>军事训练管理系统</p>
    </div>
    <div class="login_main">
        <div class="main_left"></div>
        <div class="main_right">
            <div class="right_title">用户登录</div>
            <form action="./login.do" id="formID" method="post">
                <div class="username">
                    <img src="./resources/layui/images/login/username.png" alt="">
                    <input name="username" type="text" placeholder="请输入用户名" >
                </div>
                <div class="password">
                    <img src="./resources/layui/images/login/password.png" alt="">
                    <input name="password" type="password" placeholder="请输入密码">
                </div>
                <div class="yes_login"><a onclick="document:formID.submit()">登&nbsp;&nbsp;&nbsp;&nbsp;录</a>

                    <a href="page/register/index.jsp" style="margin-top: 10px">注&nbsp;&nbsp;&nbsp;&nbsp;册</a></div>

                <center><p id="Error_prompt" style="margin-top:20px;font-size:12px;color:#FA6F03;">
                    <%
                        if(request.getAttribute("err") != null) {
                            out.print(request.getAttribute("err"));

                       }

                    %>
                </p></center>
            </form>
        </div>
    </div>
    <div class="login_footer">
        <p class="name">版权所有：数据管理中心七站</p>
        <p>建议浏览器：IE8及以上、360、谷歌、Firefox v22</p>
        <p>技术支持：七站科研办公室 &nbsp;&nbsp;联系电话：000000000  </p>

    </div>
</div>

</body>
</html>