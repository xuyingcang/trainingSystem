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
        <div id="topInfo">
                
                <div  id="personInfo"  style="height:120px;">
			<table>
				<tr>
					<td>姓名:</td>
					<td>
					   <select id="personSelect" data-placeholder="请选择人员" style="width:150px;">
                                                <option id=""></option>
                                            </select>
                                        </td>
                                        <td style="width: 50px;">性别:</td>
                                        <td id="sex" style="width: 90px;">男</td>
                                        <td style="width: 50px;">年龄:</td>
                                        <td id="age" style="width: 50px;">26</td>
				</tr>
				<tr>
					<td style="width: 100px;">身高:</td>
					<td id="height" style="width: 100px;">188</td>
					<td style="width: 100px;">体重:</td>
                                        <td id="weight" style="width: 100px;">66</td>
				</tr>
			</table>
		</div>
        </div>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="traininghours"  style="width: 500px;height:350px;float: left;"></div>
    <div id="majorScores"  style="width: 500px;height:350px;float: left;"></div>
</body>
<script type="text/javascript" src="../../resources/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="../../resources/echarts/echarts.min.js"></script>
<script type="text/javascript" src="../../resources/select2/js/select2.min.js"></script>
<script type="text/javascript" src="../../resources/select2/js/pinyin.js"></script>
<script type="text/javascript" src="../../resources/select2/js/i18n/zh-CN.js"></script>

<script type="text/javascript" src="index.js"></script>
</html>