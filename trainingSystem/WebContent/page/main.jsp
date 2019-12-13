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
        <div>历史最佳成绩</div>
        <table class="table table-hover" style="width: 100%">
                <tr>
                        <th style="width: 40%">项目</th>
                        <td style="width: 30%">最佳成绩</td>
                         <td style="width: 30%">记录保持者</td>
                </tr>
                <tr>
                        <th>3000M长跑</th>
                        <td>12分10秒</td>
                         <td>a</td>
                </tr>
                <tr>
                        <th>引体向上</th>
                        <td>18</td>
                         <td>a</td>
                </tr>
                <tr>
                        <th>俯卧撑</th>
                        <td>50</td>
                         <td>2</td>
                </tr><tr>
                        <th>双臂悬垂</th>
                        <td>45秒</td>
                         <td>2</td>
                </tr><tr>
                        <th>仰卧起坐</th>
                        <td>88</td>
                         <td>a</td>
                </tr>
                </tr><tr>
                        <th>蛇形跑</th>
                        <td>17.88秒</td>
                         <td>a</td>
                </tr>
        </table>
    </div>
    <div id="ExcellentPerson"  style="width: 400px;height:250px;float: right;">
        <div>优秀训练个人</div>
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