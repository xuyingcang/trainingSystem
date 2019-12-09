<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>新增人员</title>
</head>
<script type="text/javascript" src="../../resources/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="../../resources/bootstrap/js/bootstrap.all.min.js"></script>
<script type="text/javascript" src="../../resources/bootstrap/js/bootstrap-table-zh-CN.js"></script>
<script type="text/javascript" src="../../resources/xlsx.full.min.js"></script>
<script type="text/javascript" src="../../resources/bootstrap-edit/bootstrap-editable.min.js"></script>
<script type="text/javascript" src="../../resources/bootstrap-edit/bootstrap-table-editable.min.js"></script>
<script type="text/javascript" src="../../resources/layui/layui.all.js"></script>
<script type="text/javascript" src="index.js"></script>

<link type="text/css" href="../../resources/bootstrap-edit/bootstrap-editable.css" rel="stylesheet">
<link type="text/css" href="../../resources/bootstrap/css/bootstrap.all.min.css" rel="stylesheet">
<link type="text/css" href="../../resources/layui/css/layui.css" rel="stylesheet">
<body>
<form style="margin-left: 70px" id="form-updateexamplan" class="layui-form" method="post" onsubmit="myUpdatePlanAction()">
    <input id="id" name="id" style="display: none">

    <div style="margin-top: 10px;" class="layui-form-item">
        <div class="layui-inline">
            <label class="layui-form-label">考核内容</label>
            <div class="layui-input-inline">
                <input name="content" id="content" class="layui-input" type="text" placeholder="请输入考试内容" autocomplete="off"
                       lay-verify="required">
            </div>
        </div>
        <div class="layui-inline">
            <label class="layui-form-label">考核时间</label>
            <div class="layui-input-inline">
                <input name="time" id="time" class="layui-input" type="text" placeholder="请选择日期" lay-verify="required|date" >
                <%--设置日期框--%>
                <script type="text/javascript">
                    layui.use('laydate', function(){
                        var laydate = layui.laydate;

                        //执行一个laydate实例
                        laydate.render({
                            elem: '#birthday' //指定元素
                        });
                    });

                </script>
            </div>
        </div>
    </div>
    </div>



    <div class="layui-form-item">
        <div class="layui-inline">
            <label class="layui-form-label">考核类型</label>
            <div class="layui-input-inline">
                <input name="type" id="type" class="layui-input" type="text" placeholder="" autocomplete="off"
                       lay-verify="required">
            </div>
        </div>
        <div class="layui-inline">
            <label class="layui-form-label">理论占比</label>
            <div class="layui-input-inline">
                <input name="percent" id="percent" class="layui-input" type="text" placeholder="" autocomplete="off"
                       lay-verify="required|number">
            </div>
        </div>
    </div>


    <div class="layui-form-item">
        <div style="margin-left: 400px" class="layui-input-block">
            <button class="layui-btn" lay-submit  >修改</button>
            <button type="reset" class="layui-btn layui-btn-primary">重置</button>
        </div>
    </div>

</form>

</body>




</html>