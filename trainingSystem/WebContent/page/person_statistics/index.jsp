<%@ page language="java" contentType="text/html; charset=UTF-8"
        pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>个人训练统计分析</title>
    <link type="text/css" href="../../resources/select2/css/select2.css"   rel="stylesheet">
</head>
<body>
        <div id="selectPerson">
                <select id="personSelect" style="width:250px;"></select>
        </div>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main"  style="width: 600px;height:400px;"></div>
</body>
<script type="text/javascript" src="../../resources/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="../../resources/echarts/echarts.min.js"></script>
<script type="text/javascript" src="../../resources/select2/js/select2.min.js"></script>
<script type="text/javascript" src="../../resources/select2/js/pinyin.js"></script>
<script type="text/javascript" src="../../resources/select2/js/i18n/zh-CN.js"></script>

<script type="text/javascript" src="index.js"></script>
</html>