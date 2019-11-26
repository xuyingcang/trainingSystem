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
<link type="text/css" href="../../resources/bootstrap-table/bootstrap.all.min.css"	rel="stylesheet">
<link type="text/css" href="../../resources/bootstrap-table/bootstrap-table.css"	rel="stylesheet">
<body>
	<input type="file" name="xlfile" id="docfile" accept=".xls,.xlsx">
	<button onclick="getLocalFile()">导入计划</button>
	<button onclick="uploadPlan()">上传计划</button>


	<br>表格：
	<br>
	<table id="ArbetTable"></table>
	<div id="result"></div>
</body>

<script type="text/javascript" src="../../resources/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="../../resources/bootstrap-table/bootstrap-table.js"></script>
<script type="text/javascript" src="../../resources/bootstrap-table/bootstrap-table-zh-CN.js"></script>
<script type="text/javascript" src="../../resources/xlsx.full.min.js"></script>
<script type="text/javascript" src="../../resources/bootstrap-edit/bootstrap-editable.min.js"></script>
<script type="text/javascript" src="../../resources/bootstrap-edit/bootstrap-table-editable.min.js"></script>

<script type="text/javascript" src="addPlan.js"></script>


</html>