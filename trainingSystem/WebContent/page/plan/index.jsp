<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
    String path = request.getContextPath();
	String basePath=request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>训练计划</title>
</head>
<link type="text/css" href="../../resources/bootstrap-edit/bootstrap-editable.css"	rel="stylesheet">
<link type="text/css" href="../../resources/bootstrap/css/bootstrap.all.min.css"	rel="stylesheet">
<link type="text/css" href="../../resources/layui/css/layui.css"	rel="stylesheet">
<body>
	<div class="layui-inline"><input type="text" class="layui-input" id="start"></div>
	<div class="layui-inline"><input type="text" class="layui-input" id="end"></div>
	<button class="layui-btn" onclick="queryPlan()">查询计划</button>
	<button class="layui-btn" onclick="exportFile()">导出计划</button>
	<button class="layui-btn"  onclick="addPlan()">新增计划</button>

	<br>本周军事训练计划：
	<div id="toolbar"  class="toolbar"></div>
	<table id="table"></table>
</body>

<script type="text/javascript" src="../../resources/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="../../resources/bootstrap/js/bootstrap.all.min.js"></script>
<script type="text/javascript" src="../../resources/bootstrap/js/bootstrap-table-zh-CN.js"></script>
<script type="text/javascript" src="../../resources/xlsx.full.min.js"></script>
<script type="text/javascript" src="../../resources/layer/layer.js"></script>
<script type="text/javascript" src="../../resources/layui/layui.all.js"></script>

<script type="text/javascript" src="index.js"></script>


</html>