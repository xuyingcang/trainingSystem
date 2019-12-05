var json;
var index;//layer的index
var monday;//当周周一
var sunday;//当周周日
var yzks;//一周开始时间
var yzjs;//一周结束时间

$(function() {
	getThisWeekDate();
	var layer = layui.layer;

	//1.初始化Table
	var oTable = new TableInit();
	oTable.Init();
});

/*
 * “完成情况”按钮的点击事件
 * 弹出layer
 */
function editCompletion(row) {}
/*
 * “导出文件”按钮点击事件
 */
function exportFile() {
	var tableDom = document.getElementById('table');
	var sheet = XLSX.utils.table_to_sheet(tableDom);
	var blob = sheet2blob(sheet);
	openDownloadDialog(blob, '周军事训练计划.xlsx');
}

/*
 *“查询计划”按钮的点击事件
 */
function queryPlan() {
	$('#table').bootstrapTable('refresh');
}

/*
 *初始化Bootstrap Table
 */
var TableInit = function() {
	var oTableInit = new Object();
	//初始化Table
	oTableInit.Init = function() {
		$('#table').bootstrapTable({
			url : '../../getPlanList.do', //请求后台的URL（*）
			method : 'get', //请求方式（*）
			toolbar : '#toolbar', //工具按钮用哪个容器
			toolbarAlign : 'right',//工具栏的位置
			striped : true, //是否显示行间隔色
			cache : false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
			pagination : true, //是否显示分页（*）
			sortable : false, //是否启用排序
			sortOrder : "asc", //排序方式
			queryParams : oTableInit.queryParams,//传递参数（*）
			sidePagination : "client", //分页方式：client客户端分页，server服务端分页（*）
			pageNumber : 1, //初始化加载第一页，默认第一页
			pageSize : 10, //每页的记录行数（*）
			pageList : [ 10, 25, 50, 100 ], //可供选择的每页的行数（*）
			search : true, //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
			contentType : "application/x-www-form-urlencoded",
			strictSearch : true,
			showColumns : true, //是否显示所有的列
			showRefresh : false, //是否显示刷新按钮
			minimumCountColumns : 2, //最少允许的列数
			clickToSelect : false, //是否启用点击选中行
			//height : 700, //table的高度，如果没有设置height属性，表格自动根据记录条数觉得表格高度
			uniqueId : "no", //每一行的唯一标识，一般为主键列
			showToggle : false, //是否显示详细视图和列表视图的切换按钮
			cardView : false, //是否显示详细视图
			showExport : false,//是否显示导出按钮
			detailView : false, //是否显示父子表
			columns : [ {
				field : 'major',
				align:"center",
				valign: 'middle',
				title : '专业'
			}, {
				field : 'startTime',
				align:"center",
				valign: 'middle',
				title : '开始时间'
			}, {
				field : 'endTime',
				align:"center",
				valign: 'middle',
				title : '结束时间'
			}, {
				field : 'trainingObject',
				align:"center",
				valign: 'middle',
				title : '训练对象'
			}, {
				field : 'trainingContent',
				align:"center",
				valign: 'middle',
				title : '训练内容'
			}, {
				field : 'trainingPlace',
				align:"center",
				valign: 'middle',
				title : '训练场地'
			}, {
				field : 'classHour',
				align:"center",
				valign: 'middle',
				title : '课时'
			}, {
				field : 'classMethod',
				align:"center",
				valign: 'middle',
				title : '训练方法'
			}, {
				field : 'principal',
				align:"center",
				valign: 'middle',
				title : '负责人'
			},{
				field:'ID',
				title: '操作',
				width: 120,
				align: 'center',
				valign: 'middle',
				events: operateEvents,//给按钮注册事件
				formatter: operateFormatter//定义操作按钮
				},  ],
			rowStyle : function(row, index) {
				var classesArr = [ 'success', 'info' ];
				var strclass = "";
				if (index % 2 === 0) {//偶数行
					strclass = classesArr[0];
				} else {//奇数行
					strclass = classesArr[1];
				}
				return {
					classes : strclass
				};
			},//隔行变色
		});

	};

	//得到查询的参数
	oTableInit.queryParams = function(params) {
		var temp = { //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
			startTime : monday,
			endTime : sunday
		};
		return temp;
	};
	return oTableInit;
};
//赋予的参数
function operateFormatter(value, row, index) {
	return [	'<button type="button" class="layui-btn layui-btn-sm"> <i class="layui-icon">&#xe608;</i> 完成情况 </button>'].join('');
} 
window.operateEvents = {
		        'click .layui-btn-sm': function (e, value, row, index) {
		           edit(row);
		         }, 
		       };
/*
 * 点击某项训练计划填报训练情况登记
 */
function edit(row){
	//初始化select2
	loadSelector("persons","../../getPersonList.do");
	loadData(row);
	index=layer.open({
		type : 1,
		area : [ '1000px', '500px' ],
		fixed : false, //不固定
		maxmin : true,
		zIndex:1001,
		title : '编辑完成情况',
		content : $('#editPage')
	});
}

function closeLayer(){
	layer.close(index);
}

function toAjax() {
	var form =$("#form-plan").serialize();
	$.ajax({
        url : "../../updatePlan.do",
        type : "post",
        async:false,
        data : form,
        success:function(data){
			if(data==200){
				 layer.msg('更新成功！');
				 layer.close(index);
			}else{
				 layer.msg('更新失败！');
			}
		},
		error:function(XMLHttpRequest, textStatus, errorThrown){
            console.log("ajax请求失败");
        }
    });
}

function initcombobox(){
	$('#persons').combobox({
		url:'../../getPersonList.do',
		valueField:'id',
		textField:'text',
		multiple:true,
		//editable:false,
		dropdownParent :$('#editPage'),
		onLoadSuccess:function(rec){
			console.log(rec);
		},
		onSelect: function(rec){
			$('#persons').val(rec.XM);
		}
	});
}

/*
 * 加载对象
 */
function loadData(obj) {
	//$("#persons").val(['0','2']).trigger('change');
	for (var item in obj){
		$("#"+item).val(obj[item]);//设置属性
		//$("#"+item).attr("name",item);//设置name
	}
}

/*
 * 获取本地数据初始化select2
 */
function initSelector(id, data) {
	$('#' + id).select2({
		placeholder: '请选择',
		data:data,
		closeOnSelect:false,
		dropdownParent :$('#editPage'),
	});
}

/*
 * 获取远程数据初始化select2
 */
function loadSelector(id,url) {
	$.ajax({
		url : "../../getPersonList.do",
		type : "post",
		dataType : "json",
		contentType : 'application/json;charset=utf-8',
		async : true,
		success:function(data){
			initSelector(id,data);
		},
	});
}



/** ************************************日期处理*************************************** */

function getThisWeekDate(){
	var now = new Date();
	var week = new Array();
	var currentWeek = now.getDay();
	if(currentWeek == 0){
		currentWeek = 7;
	}
	monday = new Date(now.getTime() - (currentWeek -1)*24*60*60*1000);
	sunday = new Date(now.getTime() + (7 - currentWeek)*24*60*60*1000);
	monday = standardDateTransform(monday);
	sunday = standardDateTransform(sunday);
	yzks = monday + " 00:00";
	yzjs = sunday+ " 23:59";
	}
function standardDateTransform(date){
	var yearStr = date.getFullYear();
	var monthStr = date.getMonth() + 1;
	var dateStr = date.getDate();
	return yearStr + "-" + addZero(monthStr) + "-" + addZero(dateStr);
}
function standardDateFormat(date){
	var yearStr = date.getFullYear();
	var monthStr = date.getMonth() + 1;
	var dateStr = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	return yearStr + "-" + addZero(monthStr) + "-" + addZero(dateStr) + " " + addZero(hour) + ":" + addZero(minute);
}
function addZero(str){
	if(str<10)
		return "0"+str;
	else
		return str;
}
function dateFormat(time,option){
	var monthstr = time.getMonth() + 1;
	monthstr = addZero(monthstr);
	var datestr = time.getDate();
	datestr = addZero(datestr);
	if(option == ""){
		var hourstr = time.getHours();
		hourstr = addZero(hourstr);
		var minstr = time.getMinutes();
		minstr = addZero(minstr);
	}else{
		switch(option){
		case "上午":
			var hourstr = "08";
			var minstr = "00";
			break;
		case "下午":
			var hourstr = "14";
			var minstr = "30";
			break;
		case "晚上":
			var hourstr = "19";
			var minstr = "40";
			break;
		case "全天":
			var hourstr = "00";
			var minstr = "01";
			break;
		}
	}
	var timestr = (time.getYear() + 1900 + "-" + monthstr + "-" + datestr + " " + hourstr + ":" + minstr).toString(); 
	return timestr;
}