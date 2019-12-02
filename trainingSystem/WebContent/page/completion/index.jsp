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
		<form class="form-horizontal" role="form">
			<div class="form-group">
				<label for="firstname" class="col-sm-2 control-label">专业</label>
				<div class="col-sm-8">
					<input type="text" value="CDMA" readonly="readonly" class="form-control" id="firstname">
				</div>
			</div>
			<div class="form-group">
                                <label for="firstname" class="col-sm-2 control-label">开始时间</label>
                                <div class="col-sm-8">
                                        <input type="datetime" value="2019-11-29 08:00"  readonly="readonly" class="form-control" id="firstname">
                                </div>
                        </div>
                        <div class="form-group">
                                <label for="firstname" class="col-sm-2 control-label">结束时间</label>
                                <div class="col-sm-8">
                                        <input type="datetime" value="2019-11-29 11:00"  readonly="readonly" class="form-control" id="firstname">
                                </div>
                        </div>
                        <div class="form-group">
                                <label for="firstname" class="col-sm-2 control-label">训练内容</label>
                                <div class="col-sm-8">
                                        <input type="text" class="form-control"  readonly="readonly" id="firstname">
                                </div>
                        </div>
                        <div class="form-group">
                                <label for="firstname" class="col-sm-2 control-label">训练对象</label>
                                <div class="col-sm-8">
                                        <select  readonly="readonly">
                                                <option>全体人员</option>
                                                <option>战士</option>
                                                <option>干部</option>
                                        </select>
                                </div>
                        </div>
			<div class="form-group">
                                <label for="firstname" class="col-sm-2 control-label">参训人员</label>
                                <div class="col-sm-8">
                                        <select multiple="multiple">
                                                <option>人员1</option>
                                                <option>人员2</option>
                                                <option>人员3</option>
                                                <option>人员4</option>
                                                <option>人员5</option>
                                                <option>人员6</option>
                                                <option>人员7</option>
                                        </select>
                                </div>
                        </div>
                        <div class="form-group">
                                <label for="firstname" class="col-sm-2 control-label">训练情况</label>
                                <div class="col-sm-8">
                                        <textarea rows="3" cols="80"></textarea>
                                </div>
                        </div>
                        <div class="form-group">
                                <label for="firstname" class="col-sm-2 control-label">备注</label>
                                <div class="col-sm-8">
                                        <textarea rows="3" cols="80"></textarea>
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

<script type="text/javascript" src="index.js"></script>


</html>