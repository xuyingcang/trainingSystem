
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link type="text/css" href="../../resources/bootstrap-edit/bootstrap-editable.css"	rel="stylesheet">
    <link type="text/css" href="../../resources/bootstrap/css/bootstrap.all.min.css"	rel="stylesheet">
    <link type="text/css" href="../../resources/layui/css/layui.css"	rel="stylesheet">
</head>
<body>



<fieldset class="layui-elem-field layui-field-title" style="margin-top: 10px;">
    <legend>军事体育成绩登记</legend>
</fieldset>
<form class="layui-form layui-form-pane" action="">
    <div class="layui-form-item">
        <label class="layui-form-label">长输入框</label>
        <div class="layui-input-inline">
            <input name="title" class="layui-input" type="text" placeholder="请输入标题" autocomplete="off">
        </div>
    </div>
    <div class="layui-form-item">
        <label class="layui-form-label">短输入框</label>
        <div class="layui-input-inline">
            <input name="username" class="layui-input" type="text" placeholder="请输入" autocomplete="off" lay-verify="required">
        </div>
    </div>

    <div class="layui-form-item">
        <div class="layui-inline">
            <label class="layui-form-label">日期选择</label>
            <div class="layui-input-block">
                <input name="date" class="layui-input" id="date1" type="text" autocomplete="off">
            </div>
        </div>
        <div class="layui-inline">
            <label class="layui-form-label">行内表单</label>
            <div class="layui-input-inline">
                <input name="number" class="layui-input" type="text" autocomplete="off">
            </div>
        </div>
    </div>
    <div class="layui-form-item">
        <label class="layui-form-label">密码</label>
        <div class="layui-input-inline">
            <input name="password" class="layui-input" type="password" placeholder="请输入密码" autocomplete="off">
        </div>
        <div class="layui-form-mid layui-word-aux">请务必填写用户名</div>
    </div>

    <div class="layui-form-item">
        <button class="layui-btn" lay-filter="demo2" lay-submit="">跳转式提交</button>
    </div>
</form>



</body>
</html>