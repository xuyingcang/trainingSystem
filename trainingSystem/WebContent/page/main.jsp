<%@ page language="java" contentType="text/html; charset=UTF-8"
        pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>个人训练统计分析</title>
    <link type="text/css" href="../resources/bootstrap/css/bootstrap.all.min.css"    rel="stylesheet">
    <link type="text/css" href="../resources/select2/css/select2.css"   rel="stylesheet">
</head>
<body>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="traininghours"  style="width: 500px;height:350px;float: left;"></div>
    <div id="QualifiedRate"  style="width: 500px;height:350px;float: left;"></div>
    <div id="historyRecord"  style="width: 400px;height:250px;">
        <div><h4>历史最佳成绩</h4></div>
        <table class="table table-hover" style="width: 100%">
                <tr>
                        <th style="width: 40%" align="center">项目</th>
                        <td style="width: 30%" align="center">最佳成绩</td>
                         <td style="width: 30%" align="center">记录保持者</td>
                </tr>
                <tr style="height: 20px;vertical-align: middle;">
                        <th>3KM长跑</th>
                        <td id="running-record" align="center"></td>
                         <td id="running-keeper" align="center"></td>
                </tr>
                <tr style="height: 20px;vertical-align: middle;">
                        <th>引体向上</th>
                       <td id="pullUp-record" align="center"></td>
                         <td id="pullUp-keeper" align="center"></td>
                </tr>
                <tr style="height: 20px;vertical-align: middle;">
                        <th>俯卧撑</th>
                        <td id="pushUp-record" align="center"></td>
                         <td id="pushUp-keeper" align="center"></td>
                </tr>
                <tr style="height: 20px;vertical-align: middle;">
                        <th>双臂悬垂</th>
                        <td id="hang-record" align="center"></td>
                         <td id="hang-keeper" align="center"></td>
                </tr>
                <tr style="height: 20px;vertical-align: middle;">
                        <th>仰卧起坐</th>
                       <td id="sitUp-record" align="center"></td>
                         <td id="sitUp-keeper" align="center"></td>
                </tr>
                </tr>
                <tr style="height: 20px;vertical-align: middle;">
                        <th>蛇形跑</th>
                        <td id="snakeRun-record" align="center"></td>
                         <td id="snakeRun-keeper" align="center"></td>
                </tr>
        </table>
    </div>
    <div id="ExcellentPerson"  style="width: 600px;height:250px;float: right;">
        <div><h4>本周未完成计划</h4></div>
        <table id="table"></table>
    </div>
</body>
<script type="text/javascript" src="../resources/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="../resources/echarts/echarts.min.js"></script>
<script type="text/javascript" src="../resources/select2/js/select2.min.js"></script>
<script type="text/javascript" src="../resources/select2/js/pinyin.js"></script>
<script type="text/javascript" src="../resources/select2/js/i18n/zh-CN.js"></script>
<script type="text/javascript" src="../resources/bootstrap/js/bootstrap.all.min.js"></script>
<script type="text/javascript" src="../resources/bootstrap/js/bootstrap-table-zh-CN.js"></script>

<script type="text/javascript" src="main.js"></script>
</html>