<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>训练计划</title>
</head>
<link type="text/css" href="../../resources/bootstrap-edit/bootstrap-editable.css" rel="stylesheet">
<link type="text/css" href="../../resources/bootstrap/css/bootstrap.all.min.css" rel="stylesheet">
<link type="text/css" href="../../resources/layui/css/layui.css" rel="stylesheet">
<link type="text/css" href="../../resources/select2/css/select2.css" rel="stylesheet">
<link type="text/css" href="../../resources/select2/css/select2.min.css" rel="stylesheet">
<body>
<button class="layui-btn" onclick="queryExamPlan()">查询计划</button>
<button class="layui-btn" onclick="exportFile()">导出计划</button>
<button class="layui-btn" onclick="addSportScore()">新增成绩</button>


<div id="toolbar" class="toolbar"></div>
<table id="table" style="text-align:center"></table>
<div style="display: none" id="sports_score">
    <form style="margin-left: 70px" method="post" action="../../addSportScore.do">

        <div style="margin-top: 10px;" class="layui-form-item">
            <div class="layui-inline">
                <label class="layui-form-label">计划</label>
                <div class="layui-input-inline">
                    <select id="plan" name="examPlan.id"  style=" height: 35px;width:190px;border-color: #D2D2D2">
                    </select>
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">姓名</label>
                <div class="layui-input-inline">
                    <select id="persons" name="person.id"  style=" height: 35px;width:190px;border-color: #D2D2D2">
                    </select>
                </div>
            </div>


        </div>


        <div class="layui-form-item">
            <div class="layui-inline">
                <label class="layui-form-label">体型</label>
                <div class="layui-input-inline">
                    <input name="bodyType" class="layui-input" type="text" autocomplete="off"
                           lay-verify="required">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">单杠</label>
                <div class="layui-input-inline">
                    <input name="pullUp" class="layui-input" type="text" placeholder="" autocomplete="off"
                           lay-verify="required">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">俯卧撑</label>
                <div class="layui-input-inline">
                    <input name="pushUp" class="layui-input" type="text" placeholder="" autocomplete="off"
                           lay-verify="required|number">
                </div>
            </div>
        </div>
        <div class="layui-form-item">
            <div class="layui-inline">
                <label class="layui-form-label">蛇形跑</label>
                <div class="layui-input-inline">
                    <input name="snakeRun" class="layui-input" type="text" placeholder="" autocomplete="off"
                           lay-verify="required">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">三千米</label>
                <div class="layui-input-inline">
                    <input name="running" class="layui-input" type="text" placeholder="" autocomplete="off"
                           lay-verify="required|number">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">仰卧起坐</label>
                <div class="layui-input-inline">
                    <input name="sitUp" class="layui-input" type="text" placeholder="" autocomplete="off"
                           lay-verify="required">
                </div>
            </div>
        </div>
        <div class="layui-form-item">

            <div class="layui-inline">
                <label class="layui-form-label">总成绩</label>
                <div class="layui-input-inline">
                    <input name="totalScore" class="layui-input" type="text" placeholder="" autocomplete="off"
                           lay-verify="required|number">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">是否合格</label>
                <div class="layui-input-inline">
                    <input name="isPass" class="layui-input" type="text" placeholder="" autocomplete="off"
                           lay-verify="required">
                </div>
            </div>
        </div>

        <div class="layui-form-item">
            <div style="margin-left: 400px" class="layui-input-block">
                <button class="layui-btn" lay-submit lay-filter="formDemo">添加</button>
                <button type="reset" class="layui-btn layui-btn-primary">重置</button>
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
<script type="text/javascript"
        src="../../resources/select2/js/select2.min.js"></script>
<script type="text/javascript"
        src="../../resources/select2/js/pinyin.js"></script>
<script type="text/javascript"
        src="../../resources/select2/js/i18n/zh-CN.js"></script>

<script type="text/javascript" src="index.js"></script>


</html>