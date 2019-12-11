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
<link type="text/css"
	href="../../resources/bootstrap-edit/bootstrap-editable.css"
	rel="stylesheet">
<link type="text/css"
	href="../../resources/bootstrap/css/bootstrap.all.min.css"
	rel="stylesheet">
<link type="text/css" href="../../resources/layui/css/layui.css"
	rel="stylesheet">
<link type="text/css" href="../../resources/select2/css/select2.css"
	rel="stylesheet">
<link type="text/css" href="../../resources/select2/css/select2.min.css"
	rel="stylesheet">
<style type="text/css">
.layui-form-label {
	width: 20%;
}

.layui-input-block {
	width: 20%;
}
</style>
<body>
	<div style="font: 18px;">本周训练计划</div>
	<div id="toolbar" class="toolbar"></div>
	<table id="table"></table>

	<div id="editPage" style="display: none;">
		<form id="form-plan" class="layui-form" action="../../updatePlan.do"  method="post">
			<input name="id" type="hidden" id="id">
			<div class="layui-form-item">
				<label class="layui-form-label">专业</label>
				<div class="layui-input-inline">
					<input type="text" readonly="readonly" id="major"
						class="layui-input">
				</div>
				<label class="layui-form-label">训练对象</label>
                                <div class="layui-input-inline">
                                        <select id="trainingObject" disabled="disabled"
                                                class="layui-input">
                                                <option>全体人员</option>
                                                <option>指挥军官</option>
                                                <option>技术军官</option>
                                                <option>文职人员</option>
                                                <option>战士</option>
                                        </select>
                                </div>
			</div>
			<div class="layui-form-item">
				<label class="layui-form-label">开始时间</label>
				<div class="layui-input-inline">
					<input type="datetime" readonly="readonly" id="startTime"
						class="layui-input">
				</div>
				<label class="layui-form-label">结束时间</label>
				<div class="layui-input-inline">
					<input type="datetime" readonly="readonly" id="endTime"
						class="layui-input">
				</div>
			</div>
			<div class="layui-form-item">
				<label class="layui-form-label">参训人员</label>
				<div class="layui-input-inline">
					<select id="persons" name="persons" multiple="multiple"
						 lay-ignore style="width: 590px;"></select> 
				</div>
			</div>
			<div class="layui-form-item">
				<label class="layui-form-label">训练情况</label>
				<div class="layui-input-inline">
					<textarea id="completion" name="completion" required="required" rows="2"
						placeholder="必填项"  class="layui-textarea" style="width: 590px;"></textarea>
				</div>
			</div>
			<div class="layui-form-item">
                                <label class="layui-form-label">备注</label>
                                <div class="layui-input-inline">
                                        <textarea id="remarks" name="remarks" placeholder="选填项"  rows="2"
                                                 class="layui-textarea" style="width: 590px;"></textarea>
                                </div>
                        </div>
			<div class="layui-form-item">
                                <label class="layui-form-label"></label>
				<div class="layui-input-inline">
					<button onclick="closeLayer()" class="layui-btn layui-btn-primary">取消</button>
				</div>
				<label class="layui-form-label"></label>
				<div class="layui-input-inline">
                                        <!-- <button  type="submit" onclick="toAjax()" class="layui-btn" >提交</button> -->
                                        <button  type="submit" class="layui-btn" lay-submit lay-filter="formDemo">提交</button>
                                </div>
			</div>
		</form>
	</div>
</body>

<script type="text/javascript" src="../../resources/jquery-3.4.1.min.js"></script>
<script type="text/javascript"
	src="../../resources/bootstrap/js/bootstrap.all.min.js"></script>
<script type="text/javascript"
	src="../../resources/bootstrap/js/bootstrap-table-zh-CN.js"></script>
<script type="text/javascript" src="../../resources/xlsx.full.min.js"></script>
<script type="text/javascript" src="../../resources/layer/layer.js"></script>
<script type="text/javascript" src="../../resources/layui/layui.all.js"></script>
<script type="text/javascript" src="../../resources/select2/js/select2.min.js"></script>
<script type="text/javascript" src="../../resources/select2/js/pinyin.js"></script>
<script type="text/javascript" src="../../resources/select2/js/i18n/zh-CN.js"></script>

<script type="text/javascript" src="index.js"></script>


</html>