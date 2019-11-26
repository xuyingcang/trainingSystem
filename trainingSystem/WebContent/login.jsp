<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录</title>
    <link type="text/css" href="resources/layui/css/layui.css"	rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <style>
        html,body{
            height: 100%;
        }
        body{
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: url("image/login_bg.png");
            background-size: cover;
        }
    </style>
</head>
<body>
<div class="login-div">
    <h1>登录</h1>
    <form id="login-form" action="#">
        <div class="login-form-item">
            <input name="username" placeholder="用户名">
        </div>
        <div class="login-form-item">
            <input name="password" type="password" placeholder="密码">
        </div>
        <button class="btn-login" type="submit">登录</button>
    </form>
</div>
</body>
</html>
<script type="text/javascript" src="resources/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="resources/layui/layui.all.js"></script>
<script src="js/utils.js"></script>
<script>
    layui.use(['layer','form'], function () {
        window.layer = layui.layer;
        window.form=layui.form;
        mounted();
    });

    function mounted(){
        $('#login-form').submit(function () {
            location.href="index.jsp";
            return false;
        })
    }

</script>