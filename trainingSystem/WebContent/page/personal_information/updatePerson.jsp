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
<form style="margin-left: 70px" id="form-updateperson" class="layui-form" method="post" onsubmit="myUpdatePersonAction()"  >

    <div style="margin-top: 10px;" class="layui-form-item">
        <input id="id" name="id" style="display: none">
        <div class="layui-inline">
            <label class="layui-form-label">姓名</label>
            <div class="layui-input-inline">
                <input name="name" id="name" class="layui-input" type="text" placeholder="请输入姓名" autocomplete="off"
                       lay-verify="required">
            </div>
        </div>
        <div class="layui-inline">
            <label class="layui-form-label">性别</label>
            <div class="layui-input-inline">
                <select name="sex" id="sex" style="height: 35px;width:190px;border-color: #D2D2D2">
                    <option value="男">&nbsp;&nbsp;&nbsp;男&nbsp;&nbsp;</option>
                    <option value="女">&nbsp;&nbsp;&nbsp;女&nbsp;&nbsp;</option>
                </select>
            </div>
        </div>
    </div>
    </div>


    <div class="layui-form-item">
        <div class="layui-inline">
            <label class="layui-form-label">出生日期</label>
            <div class="layui-input-inline">
                <input name="birthday" id="birthday"  class="layui-input" type="text" placeholder="请选择日期" lay-verify="required|date" >
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
        <div class="layui-inline">
            <label class="layui-form-label">人员类别</label>
            <div class="layui-input-inline">
                <select name="person_type" id="person_type" style="height: 35px;width:190px;border-color: #D2D2D2">
                    <option value="军官">&nbsp;&nbsp;&nbsp;军官&nbsp;&nbsp;</option>
                    <option value="士官">&nbsp;&nbsp;&nbsp;士官&nbsp;&nbsp;</option>
                    <option value="义务兵">&nbsp;&nbsp;&nbsp;义务兵&nbsp;&nbsp;</option>
                </select>
            </div>
        </div>
    </div>

    <div class="layui-form-item">
        <div class="layui-inline">
            <label class="layui-form-label">身高</label>
            <div class="layui-input-inline">
                <input name="height" id="height" class="layui-input" type="text" placeholder="身高单位cm" autocomplete="off"
                       lay-verify="required|number">
            </div>
        </div>
        <div class="layui-inline">
            <label class="layui-form-label">体重</label>
            <div class="layui-input-inline">
                <input name="weight" id="weight" class="layui-input" type="text" placeholder="体重单位kg" autocomplete="off"
                       lay-verify="required|number">
            </div>
        </div>
    </div>

    <div class="layui-form-item">
        <div class="layui-inline">
            <label class="layui-form-label">军衔</label>
            <div class="layui-input-inline">
                <input name="military_rank" id="military_rank" class="layui-input" type="text" placeholder="请选择" autocomplete="off"
                       lay-verify="required">
            </div>
        </div>
        <div class="layui-inline">
            <label class="layui-form-label">职务</label>
            <div class="layui-input-inline">
                <input name="duty" id="duty" class="layui-input" type="text" placeholder="请输入职务" autocomplete="off"
                       lay-verify="required"   >
            </div>
        </div>
    </div>
 <div class="layui-form-item">
        <div class="layui-inline">
            <label class="layui-form-label">专业</label>
            <div class="layui-input-inline">
                <input name="profession" id="profession" class="layui-input" type="text" placeholder="请输入专业" autocomplete="off"
                       lay-verify="required">
            </div>
        </div>
        <div class="layui-inline">
            <label class="layui-form-label">训练类型</label>
            <div class="layui-input-inline">
                <input name="training_type" id="training_type" class="layui-input" type="text" placeholder="请输入训练类型" autocomplete="off"
                       lay-verify="required">
            </div>
        </div>
    </div>
    <div class="layui-form-item">
        <div style="margin-left: 400px" class="layui-input-block">
            <button class="layui-btn" lay-submit >修改</button>
            <button type="reset" class="layui-btn layui-btn-primary">重置</button>
        </div>
    </div>
</form>

</body>




</html>