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
<title>训练完成情况</title>
</head>
<link type="text/css" href="../../resources/bootstrap-edit/bootstrap-editable.css"	rel="stylesheet">
<link type="text/css" href="../../resources/bootstrap/css/bootstrap.all.min.css"	rel="stylesheet">
<link type="text/css" href="../../resources/layui/css/layui.css"	rel="stylesheet">
<link type="text/css" href="../../resources/select2/css/select2.css"        rel="stylesheet">

<style type="text/css">
 
 .layui-form-label{
        width: 20%;
}
 .layui-input-block{
        width: 20%;
}
</style>
<body>
        <div style="font: 18px;">本周训练计划</div>
	<div id="toolbar"  class="toolbar"></div>
	<table id="table"></table>

	<div id="editPage" style="display: none;">
		<form class="form-horizontal" role="form" method="post" action="../../updatePlan.do">
		      <input name="id"  type="hidden" id="id">
			<div class="form-group">
				<label for="firstname" class="col-sm-2 control-label">专业</label>
				<div class="col-sm-8">
					<input type="text" readonly="readonly" class="form-control" id="major" name="major">
				</div>
			</div>
			<div class="form-group">
                                <label for="firstname" class="col-sm-2 control-label">开始时间</label>
                                <div class="col-sm-8">
                                        <input type="datetime"  readonly="readonly" class="form-control"  id="startTime">
                                </div>
                        </div>
                        <div class="form-group">
                                <label for="firstname" class="col-sm-2 control-label">结束时间</label>
                                <div class="col-sm-8">
                                        <input type="datetime"  readonly="readonly" class="form-control" id="endTime">
                                </div>
                        </div>
                        <div class="form-group">
                                <label for="firstname" class="col-sm-2 control-label">训练内容</label>
                                <div class="col-sm-8">
                                        <input type="text" class="form-control"  readonly="readonly" id="trainingContent" name="trainingContent">
                                </div>
                        </div>
                        <div class="form-group">
                                <label for="firstname" class="col-sm-2 control-label">训练对象</label>
                                <div class="col-sm-8">
                                        <select  readonly="readonly" id="trainingObject"  name="trainingObject">
                                        </select>
                                </div>
                        </div>
			<div class="form-group">
                                <label for="firstname" class="col-sm-2 control-label">参训人员</label>
                                <div class="col-sm-8">
                                        <input  id="persons" name="persons" >
                                </div>
                        </div>
                        <div class="form-group">
                                <label for="firstname" class="col-sm-2 control-label">训练情况</label>
                                <div class="col-sm-8">
                                        <textarea rows="3" cols="80" id="completion" name="completion"></textarea>
                                </div>
                        </div>
                        <div class="form-group">
                                <label for="firstname" class="col-sm-2 control-label">备注</label>
                                <div class="col-sm-8">
                                        <textarea rows="3" cols="80" id="remarks" name="remarks"></textarea>
                                </div>
                        </div>
			<div class="form-group">
				<div class="col-sm-offset-2 col-sm-10">
					<button type="submit" class="btn btn-default">提交</button>
				</div>
			</div>
		</form>
	</div>
</body>

<script type="text/javascript" src="../../resources/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="../../resources/bootstrap/js/bootstrap.all.min.js"></script>
<script type="text/javascript" src="../../resources/bootstrap/js/bootstrap-table-zh-CN.js"></script>
<script type="text/javascript" src="../../resources/xlsx.full.min.js"></script>
<script type="text/javascript" src="../../resources/layer/layer.js"></script>
<script type="text/javascript" src="../../resources/layui/layui.all.js"></script>
<script type="text/javascript" src="../../resources/select2/js/select2.full.js"></script>

<script type="text/javascript" src="index.js"></script>


</html>