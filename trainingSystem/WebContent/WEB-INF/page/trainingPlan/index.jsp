<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>训练计划</title>
</head>
<link type="text/css" href="../resources/bootstrap-edit/bootstrap-editable.css"	rel="stylesheet">
<link type="text/css" href="../resources/bootstrap-table/bootstrap.all.min.css"	rel="stylesheet">
<link type="text/css" href="../resources/bootstrap-table/bootstrap-table.css"	rel="stylesheet">
<body>
	<input type="file" name="xlfile" id="docfile" accept=".xls,.xlsx">
	<button onclick="getLocalFile()">导入计划</button>
	<button onclick="exportFile()">导出计划</button>

	<br>表格：
	<br>
	<table id="ArbetTable"></table>
	<div id="result"></div>
</body>

<script type="text/javascript" src="../resources/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="../resources/bootstrap-table/bootstrap-table.js"></script>
<script type="text/javascript" src="../resources/bootstrap-table/bootstrap-table-zh-CN.js"></script>
<script type="text/javascript" src="../resources/xlsx.full.min.js"></script>
<script type="text/javascript"
	src="../resources/bootstrap-edit/bootstrap-editable.min.js"></script>
<script type="text/javascript"
	src="../resources/bootstrap-edit/bootstrap-table-editable.min.js"></script>

<script type="text/javascript">
	$(function () {
		//1.初始化Table
		var oTable = new TableInit();
		//oTable.Init();
	 });

	
	var TableInit = function () {
	    var oTableInit = new Object();
	    //初始化Table
	    oTableInit.Init = function () {
	        $('#ArbetTable').bootstrapTable({
	            url: '/Interface/GetData',         //请求后台的URL（*）
	            method: 'get',                      //请求方式（*）
	            toolbar: '#toolbar',                //工具按钮用哪个容器
	            striped: true,                      //是否显示行间隔色
	            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
	            pagination: true,                   //是否显示分页（*）
	            sortable: false,                     //是否启用排序
	            sortOrder: "asc",                   //排序方式
	            queryParams: oTableInit.queryParams,//传递参数（*）
	            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
	            pageNumber: 1,                       //初始化加载第一页，默认第一页
	            pageSize: 10,                       //每页的记录行数（*）
	            pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
	            search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
	            contentType: "application/x-www-form-urlencoded",
	            strictSearch: true,
	            showColumns: true,                  //是否显示所有的列
	            showRefresh: true,                  //是否显示刷新按钮
	            minimumCountColumns: 2,             //最少允许的列数
	            clickToSelect: true,                //是否启用点击选中行
	            height: 700,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
	            uniqueId: "no",                     //每一行的唯一标识，一般为主键列
	            showToggle: true,                    //是否显示详细视图和列表视图的切换按钮
	            cardView: false,                    //是否显示详细视图
	            detailView: false,                   //是否显示父子表
	            columns: [
	            {
	                field: 'ID',
	                title: 'ID'
	            }, {
	                field: 'Name',
	                title: '名字'
	            }, {
	                field: 'Sex',
	                title: '性别'
	            },
	            {
	                field: 'operate',
	                title: '操作',
	                formatter: operateFormatter //自定义方法，添加操作按钮
	            },
	            ],
	            rowStyle: function (row, index) {
	                var classesArr = ['success', 'info'];
	                var strclass = "";
	                if (index % 2 === 0) {//偶数行
	                    strclass = classesArr[0];
	                } else {//奇数行
	                    strclass = classesArr[1];
	                }
	                return { classes: strclass };
	            },//隔行变色
	        });

	    };


	    //得到查询的参数
	    oTableInit.queryParams = function (params) {
	        var temp = {   //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
	            limit: params.limit,   //页面大小
	            offset:params.offset
	        };
	        return temp;
	    };
	    return oTableInit;
	};


	function operateFormatter(value, row, index) {//赋予的参数
	    return [
	        '<a class="btn active disabled" href="#">编辑</a>',
	        '<a class="btn active" href="#">档案</a>',
	        '<a class="btn btn-default" href="#">记录</a>',
	        '<a class="btn active" href="#">准入</a>'
	    ].join('');
	}
	
	
	

function openDownloadDialog(url, saveName)
{
	if(typeof url == 'object' && url instanceof Blob)
	{
		url = URL.createObjectURL(url); // 创建blob地址
	}
	var aLink = document.createElement('a');
	aLink.href = url;
	aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
	var event;
	if(window.MouseEvent) event = new MouseEvent('click');
	else
	{
		event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	}
	aLink.dispatchEvent(event);
}

	// 读取本地excel文件
	function readWorkbookFromLocalFile(file, callback) {
		console.log(file);
		var reader = new FileReader();
		reader.onload = function(e) {
			var data = e.target.result;
			var workbook = XLSX.read(data, {type: 'binary'});
			console.log(workbook);
			readWorkbook(workbook);
			if(callback) callback(workbook);
		};
		reader.readAsBinaryString(file);
	}
	
	function getLocalFile(){
		var docObj = document.getElementById("docfile");
		console.log(docObj.files[0])
        if (docObj.files && docObj.files[0]) {
        	readWorkbookFromLocalFile(docObj.files[0])
        }
	}
	var text;
	//将读取workbook的内容转换为csv格式
	function readWorkbook(workbook)
	{
	    var sheetNames = workbook.SheetNames; // 工作表名称集合
	    var worksheet = workbook.Sheets[sheetNames[0]]; // 这里我们只读取第一张sheet
	    var csv = XLSX.utils.sheet_to_csv(worksheet);
	    text=csv;
	    document.getElementById('result').innerHTML = csv2table(csv);
	}

	// 将csv转换成简单的表格，会忽略单元格合并，在第一行和第一列追加类似excel的索引
	function csv2table(csv)
	{
	    var html = '<table id="table">';
	    var rows = csv.split('\n');
	    rows.pop(); // 最后一行没用的
	    rows.forEach(function(row, idx) {
	        var columns = row.split(',');
	        columns.unshift(idx+1); // 添加行索引
	        if(idx == 0) { // 添加列索引
	            html += '<tr>';
	            for(var i=0; i<columns.length; i++) {
	                html += '<th>' + (i==0?'':String.fromCharCode(65+i-1)) + '</th>';
	            }
	            html += '</tr>';
	        }
	        html += '<tr>';
	        columns.forEach(function(column) {
	            html += '<td>'+column+'</td>';
	        });
	        html += '</tr>';
	    });
	    html += '</table>';
	    return html;
	}
	
	// csv转sheet对象
	function csv2sheet(csv) {
	    var sheet = {}; // 将要生成的sheet
	    csv = csv.split('\n');
	    csv.forEach(function(row, i) {
	        row = row.split(',');
	        if(i == 0) sheet['!ref'] = 'A1:'+String.fromCharCode(65+row.length-1)+(csv.length-1);
	        row.forEach(function(col, j) {
	            sheet[String.fromCharCode(65+j)+(i+1)] = {v: col};
	        });
	    });
	    return sheet;
	}

	// 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
	function sheet2blob(sheet, sheetName) {
	    sheetName = sheetName || 'sheet1';
	    var workbook = {
	        SheetNames: [sheetName],
	        Sheets: {}
	    };
	    workbook.Sheets[sheetName] = sheet;
	    // 生成excel的配置项
	    var wopts = {
	        bookType: 'xlsx', // 要生成的文件类型
	        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
	        type: 'binary'
	    };
	    var wbout = XLSX.write(workbook, wopts);
	    var blob = new Blob([s2ab(wbout)], {type:"application/octet-stream"});
	    // 字符串转ArrayBuffer
	    function s2ab(s) {
	        var buf = new ArrayBuffer(s.length);
	        var view = new Uint8Array(buf);
	        for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
	        return buf;
	    }
	    return blob;
	}
	
	/**
	 * 通用的打开下载对话框方法，没有测试过具体兼容性
	 * @param url 下载地址，也可以是一个blob对象，必选
	 * @param saveName 保存文件名，可选
	 */
	function openDownloadDialog(url, saveName)
	{
	    if(typeof url == 'object' && url instanceof Blob)
	    {
	        url = URL.createObjectURL(url); // 创建blob地址
	    }
	    var aLink = document.createElement('a');
	    aLink.href = url;
	    aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
	    var event;
	    if(window.MouseEvent) event = new MouseEvent('click');
	    else
	    {
	        event = document.createEvent('MouseEvents');
	        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	    }
	    aLink.dispatchEvent(event);
	}
	
	function exportExcel(csv) {
	    var sheet = csv2sheet(csv);
	    var blob = sheet2blob(sheet);
	    openDownloadDialog(blob, '导出.xlsx');
	}
	
	function exportFile(){
		var tableDom=document.getElementById('table');
		var sheet=XLSX.utils.table_to_sheet(tableDom);
		var blob = sheet2blob(sheet);
		openDownloadDialog(blob, '导出table.xlsx');
	}
	
	
</script>


</html>