var json;
const fields = [ 'startTime', 'endTime', 'major', 'trainingObject',
		'trainingContent', 'trainingPlace', 'classMethod', 'classHour',
		'principal' ];
// 初始化
$(function() {});

// 导入文件按钮的点击事件
function getLocalFile() {
	// 1.初始化Table
	var oTable = new TableInit();
	oTable.Init();

	var docObj = document.getElementById("docfile");
	if (docObj.files && docObj.files[0]) {
		readWorkbookFromLocalFile(docObj.files[0])
	}
	//
}
/*
 * 上传按钮的点击事件
 */
function uploadPlan() {
	doAjax(json);
}

/*
 * 初始化Bootstrap Table
 */
var TableInit = function() {
	var oTableInit = new Object();
	// 初始化Table
	oTableInit.Init = function() {
		$('#table').bootstrapTable({
			// url : 'getPlanList', //请求后台的URL（*）
			method : 'get', // 请求方式（*）
			//toolbar : '#toolbar', // 工具按钮用哪个容器
			striped : true, // 是否显示行间隔色
			cache : false, // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
			pagination : true, // 是否显示分页（*）
			sortable : false, // 是否启用排序
			sortOrder : "asc", // 排序方式
			// queryParams : oTableInit.queryParams,//传递参数（*）
			sidePagination : "client", // 分页方式：client客户端分页，server服务端分页（*）
			pageNumber : 1, // 初始化加载第一页，默认第一页
			pageSize : 10, // 每页的记录行数（*）
			pageList : [ 10, 25, 50, 100 ], // 可供选择的每页的行数（*）
			search : false, // 是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
			contentType : "application/x-www-form-urlencoded",
			strictSearch : true,
			showColumns : false, // 是否显示所有的列
			showRefresh : false, // 是否显示刷新按钮
			minimumCountColumns : 2, // 最少允许的列数
			clickToSelect : false, // 是否启用点击选中行
			// height : 700, //table的高度，如果没有设置height属性，表格自动根据记录条数觉得表格高度
			uniqueId : "no", // 每一行的唯一标识，一般为主键列
			showToggle : false, // 是否显示详细视图和列表视图的切换按钮
			cardView : false, // 是否显示详细视图
			detailView : false, // 是否显示父子表
			columns : [ {
				field : 'major',
				title : '专业'
			}, {
				field : 'startTime',
				title : '开始时间'
			}, {
				field : 'endTime',
				title : '结束时间'
			}, {
				field : 'trainingObject',
				title : '训练对象'
			}, {
				field : 'trainingContent',
				title : '训练内容'
			}, {
				field : 'trainingPlace',
				title : '训练场地'
			}, {
				field : 'classHour',
				title : '课时'
			}, {
				field : 'classMethod',
				title : '训练方法'
			}, {
				field : 'principal',
				title : '负责人'
			}, ],
			rowStyle : function(row, index) {
				var classesArr = [ 'success', 'info' ];
				var strclass = "";
				if (index % 2 === 0) {// 偶数行
					strclass = classesArr[0];
				} else {// 奇数行
					strclass = classesArr[1];
				}
				return {
					classes : strclass
				};
			},// 隔行变色
		});

	};

	return oTableInit;
};
// 赋予的参数
/*
 * function operateFormatter(value, row, index) { return [ '<a class="btn
 * active disabled" href="#">编辑</a>', '<a class="btn active" href="#">档案</a>', '<a
 * class="btn btn-default" href="#">记录</a>', '<a class="btn active"
 * href="#">准入</a>' ].join(''); }
 */

// 打开下载对话框
function openDownloadDialog(url, saveName) {
	if (typeof url == 'object' && url instanceof Blob) {
		url = URL.createObjectURL(url); // 创建blob地址
	}
	var aLink = document.createElement('a');
	aLink.href = url;
	aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
	var event;
	if (window.MouseEvent)
		event = new MouseEvent('click');
	else {
		event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0,
				false, false, false, false, 0, null);
	}
	aLink.dispatchEvent(event);
}

// 读取本地excel文件
function readWorkbookFromLocalFile(file, callback) {
	console.log(file);
	var reader = new FileReader();
	reader.onload = function(e) {
		var data = e.target.result;
		var workbook = XLSX.read(data, {
			type : 'binary'
		});
		readWorkbook(workbook);
		if (callback)
			callback(workbook);
	};
	reader.readAsBinaryString(file);
}

// 将读取workbook的内容转换为csv格式
function readWorkbook(workbook) {
	var sheetNames = workbook.SheetNames; // 工作表名称集合
	var worksheet = workbook.Sheets[sheetNames[0]]; // 这里我们只读取第一张sheet
	// var csv= XLSX.utils.sheet_to_csv(worksheet);
	// 将sheet转换为json，并且将表头中文替换问英文
	json = XLSX.utils.sheet_to_json(worksheet, {
		header : fields
	});
	json.splice(0, 1);// 删除第一行数据
	$("#table").bootstrapTable('load', json);// 将json数据传入bootstrapTable显示
	// document.getElementById('result').innerHTML = csv2table(csv);
}

// csv转sheet对象
function csv2sheet(csv) {
	var sheet = {}; // 将要生成的sheet
	csv = csv.split('\n');
	csv.forEach(function(row, i) {
		row = row.split(',');
		if (i == 0)
			sheet['!ref'] = 'A1:' + String.fromCharCode(65 + row.length - 1)
					+ (csv.length - 1);
		row.forEach(function(col, j) {
			sheet[String.fromCharCode(65 + j) + (i + 1)] = {
				v : col
			};
		});
	});
	return sheet;
}

// 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
function sheet2blob(sheet, sheetName) {
	sheetName = sheetName || 'sheet1';
	var workbook = {
		SheetNames : [ sheetName ],
		Sheets : {}
	};
	workbook.Sheets[sheetName] = sheet;
	// 生成excel的配置项
	var wopts = {
		bookType : 'xlsx', // 要生成的文件类型
		bookSST : false, // 是否生成Shared String
							// Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
		type : 'binary'
	};
	var wbout = XLSX.write(workbook, wopts);
	var blob = new Blob([ s2ab(wbout) ], {
		type : "application/octet-stream"
	});
	// 字符串转ArrayBuffer
	function s2ab(s) {
		var buf = new ArrayBuffer(s.length);
		var view = new Uint8Array(buf);
		for (var i = 0; i != s.length; ++i)
			view[i] = s.charCodeAt(i) & 0xFF;
		return buf;
	}
	return blob;
}

/**
 * 通用的打开下载对话框方法，没有测试过具体兼容性
 * 
 * @param url
 *            下载地址，也可以是一个blob对象，必选
 * @param saveName
 *            保存文件名，可选
 */
function openDownloadDialog(url, saveName) {
	if (typeof url == 'object' && url instanceof Blob) {
		url = URL.createObjectURL(url); // 创建blob地址
	}
	var aLink = document.createElement('a');
	aLink.href = url;
	aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
	var event;
	if (window.MouseEvent)
		event = new MouseEvent('click');
	else {
		event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0,
				false, false, false, false, 0, null);
	}
	aLink.dispatchEvent(event);
}

function exportExcel(csv) {
	var sheet = csv2sheet(csv);
	var blob = sheet2blob(sheet);
	openDownloadDialog(blob, '导出.xlsx');
}

// 导出Excel按钮点击事件
function exportFile() {
	var tableDom = document.getElementById('table');
	var sheet = XLSX.utils.table_to_sheet(tableDom);
	var blob = sheet2blob(sheet);
	openDownloadDialog(blob, '导出table.xlsx');
}

function doAjax(json) {
	$.ajax({
		url : "../../savePlanList.do",
		type : "post",
		dataType : "json",
		contentType : 'application/json;charset=utf-8',
		async : true,
		data : JSON.stringify(json),
	});
}