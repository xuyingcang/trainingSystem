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
<table id="table"></table>
<div style="display: none" id="sports_score">
    <form style="margin-left: 70px" method="post" id="form-sports" class="layui-form" onsubmit="mySportsAction()">
        <input name="id" id="id" style="display: none">
        <div style="margin-top: 10px;" class="layui-form-item">
            <div class="layui-inline">
                <label class="layui-form-label">计划</label>
                <div class="layui-input-inline">
                    <select id="plan" name="examPlan.id" lay-ignore style=" width:190px">
                        <option id=" "></option>
                    </select>
                </div>
            </div>
            <div style="margin-left: 80px" class="layui-inline">
                <label class="layui-form-label">姓名</label>
                <div class="layui-input-inline">
                    <select id="persons" name="person.id" lay-ignore
                            style=" height: 35px;width:190px;border-color: #D2D2D2">
                        <option id=""></option>
                    </select>
                </div>
            </div>


        </div>


        <div class="layui-form-item">
            <div class="layui-inline">
                <label class="layui-form-label">体型</label>
                <div class="layui-input-inline">
                    <input name="bodyType" id="bodyType" class="layui-input" readonly="readonly" type="text"
                           autocomplete="off"
                           lay-verify="required">

                </div>
            </div>
            <div class="layui-inline" style="width: 70px">
                <label id="bodyType-tip"></label>

            </div>
            <div class="layui-inline">
                <input name="pullUpScore" id="pullUpScore" style="display: none">
                <input name="bodyTypeScore" id="bodyTypeScore" style="display: none">

                <label class="layui-form-label">引体向上</label>
                <div class="layui-input-inline">
                    <input name="pullUp" id="pullUp" onblur="MypullUpScore()" class="layui-input" type="number"
                           autocomplete="off"
                           lay-verify="required|number">
                </div>
            </div>
            <div class="layui-inline" style="width: 70px">
                <label id="pullUp-tip"></label>

            </div>
        </div>


        <div class="layui-form-item">
            <div class="layui-inline">
                <input name="pushUpScore" id="pushUpScore" style="display: none">

                <label class="layui-form-label">俯卧撑</label>
                <div class="layui-input-inline">
                    <input name="pushUp" id="pushUp" onblur="MypushUpScore()" class="layui-input" type="text"
                           placeholder=""
                           autocomplete="off"
                           lay-verify="required|number">
                </div>
            </div>
            <div class="layui-inline" style="width: 70px">
                <label id="pushUp-tip"></label>

            </div>
            <div class="layui-inline">
                <label class="layui-form-label">曲臂悬垂</label>
                <input name="hangmm" id="hangmm" style="display: none">
                <input name="hangss" id="hangss" style="display: none">
                <input name="hangScore" id="hangScore" style="display: none">
                <div class="layui-inline">
                    <div class="layui-input-inline">
                        <input class="layui-input" name="hang" id="hang" type="text"  placeholder="mm:ss">
                    </div>

                </div>
                <div class="layui-inline" style="width: 70px">
                    <label id="hang-tip"></label>
                </div>
            </div>
        </div>
        <div class="layui-form-item">
            <div class="layui-inline">
                <label class="layui-form-label">蛇形跑</label>
                <input name="snakeRunScoremm" id="snakeRunScoremm" style="display: none">
                <input name="snakeRunScorems" id="snakeRunScorems" style="display: none">
                <input name="snakeRunScore" id="snakeRunScore" style="display: none">
                <div class="layui-input-inline">
                    <input class="layui-input" onblur="MysnakeRunScore()" name="snakeRun" id="snakeRun" type="text" placeholder="ss:ms">

                </div>
            </div>
            <div class="layui-inline" style="width: 70px">
                <label id="snakeRun-tip"></label>
            </div>

            <div class="layui-inline">
                <label class="layui-form-label">三千米</label>
                <input name="runningScore" id="runningScore" style="display: none">
                <input name="runningScoremm" id="runningScoremm" style="display: none">
                <input name="runningScoress" id="runningScoress" style="display: none">

                <div class="layui-input-inline">
                    <input class="layui-input" name="running" id="running" type="text" placeholder="mm:ss">

                </div>

            </div>
            <div class="layui-inline" style="width: 70px">
                <label id="running-tip"></label>
            </div>
        </div>
        <div class="layui-form-item">
            <div class="layui-inline">
                <input name="situpScore" id="situpScore" style="display: none">

                <label class="layui-form-label">仰卧起坐</label>
                <div class="layui-input-inline">
                    <input name="sitUp" id="sitUp" onblur="MysitUpScore()" class="layui-input" type="text" placeholder=""
                           autocomplete="off"
                           lay-verify="required|number">
                </div>
            </div>
            <div class="layui-inline" style="width: 70px">
                <label id="sitUp-tip"></label>
            </div>

            <div class="layui-inline">
                <label class="layui-form-label">总成绩</label>
                <div class="layui-input-inline">
                    <input name="totalScore" id="totalScore" class="layui-input" type="text" placeholder=""
                           autocomplete="off"
                           lay-verify="required|number">
                </div>
            </div>
        </div>

        <div class="layui-form-item">
            <div class="layui-inline">
                <label class="layui-form-label">是否合格</label>
                <div class="layui-input-inline">
                    <select name="isPass" onclick="myTotalScore()" id="isPass" style="height: 35px;width:190px;border-color: #D2D2D2">
                        <option value="合格">&nbsp;&nbsp;&nbsp;合格&nbsp;&nbsp;</option>
                        <option value="不合格">&nbsp;&nbsp;&nbsp;不合格&nbsp;&nbsp;</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="layui-form-item">
            <div style="margin-left: 400px" class="layui-input-block">
                <button class="layui-btn" lay-submit>提交</button>
                <button onclick="closeLayer()" class="layui-btn layui-btn-primary">取消</button>
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
<script type="text/javascript" src="computational.js"></script>
<script type="text/javascript" src="show_input.js"></script>


</html>