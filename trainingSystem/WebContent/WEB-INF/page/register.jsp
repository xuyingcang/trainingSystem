<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>测试注册用户</title>
</head>
<body>
	<form action="/trainingSystem/saveuser.do" method="post">
		用户名:<input type="text" name="username">
		密码:<input type="password" name="password">
		<input type="submit" value="提交">
	</form>
</body>
</html>