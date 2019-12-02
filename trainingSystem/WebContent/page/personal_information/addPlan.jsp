<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>训练计划</title>
</head>
<link type="text/css" href="../../resources/bootstrap-edit/bootstrap-editable.css"	rel="stylesheet">
<link type="text/css" href="../../resources/bootstrap/css/bootstrap.all.min.css"        rel="stylesheet">
<link type="text/css" href="../../resources/layui/css/layui.css"	rel="stylesheet">
<body>
	<label>
		<input onchange="getLocalFile()" type="file" name="xlfile" id="docfile" value="导入文件" accept=".xls,.xlsx"></label>
		<!-- <button class="layui-btn test" id="docfile">选择文件</button> -->
	<label>
		<button class="layui-btn" onclick="uploadPlan()">上传计划</button>
        </label>
	<table id="table"></table>
</body>

<script type="text/javascript" src="../../resources/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="../../resources/bootstrap/js/bootstrap.all.min.js"></script>
<script type="text/javascript" src="../../resources/bootstrap/js/bootstrap-table-zh-CN.js"></script>
<script type="text/javascript" src="../../resources/xlsx.full.min.js"></script>
<script type="text/javascript" src="../../resources/bootstrap-edit/bootstrap-editable.min.js"></script>
<script type="text/javascript" src="../../resources/bootstrap-edit/bootstrap-table-editable.min.js"></script>
<script type="text/javascript" src="../../resources/layui/layui.all.js"></script>

<script type="text/javascript" src="addPlan.js"></script>


</html>