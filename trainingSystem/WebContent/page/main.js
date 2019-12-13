// 基于准备好的dom，初始化echarts实例
var chart1 = echarts.init(document.getElementById('traininghours'));
var chart2 = echarts.init(document.getElementById('QualifiedRate'));
$(function() {
	initChart1();
	initChart2();
	getHistoryRecords();
	//初始化未完成计划表格
	initTable();
});

function initChart1(){
	$.ajax({
		url : "../getHoursLast12Month.do",
		type : "get",
		//dataType : "json",
		contentType : 'application/json;charset=utf-8',
		async : true,
		success : function(data) {
			var option = {
					title : {
						text : '每月训练时长'
					},
					tooltip : {},
					legend : {
						data : [ '训练小时' ]
					},
					xAxis : {
						data : data.month
					},
					yAxis : {},
					series : [ {
						name : '训练时',
						type : 'bar',
						data : data.hours
					} ]
				};

				// 使用刚指定的配置项和数据显示图表。
			chart1.setOption(option);
		},
	});
}

function initChart2(){
	$.ajax({
		url : "../getTeamQualifiedRate.do",
		type : "get",
		//dataType : "json",
		contentType : 'application/json;charset=utf-8',
		async : true,
		success : function(data) {
			var option = {
					title : {
						text : '考核合格率'
					},
					tooltip : {},
					legend : {
						left:'right',
						tooltip:{
					        show:true
					    }
					},
					xAxis : {
						data : data.time
					},
					yAxis : {},
					series : [ 
                    	{
							name : '专业',
							type : 'line',
							data : data.major
                    	}, 
                    	{
							name : '体能',
							type : 'line',
							data : data.sports
                    	}, 
                    ]
				};

				// 使用刚指定的配置项和数据显示图表。
			chart2.setOption(option);
		},
	});
}

function getHistoryRecords(){
	$.ajax({
		url : "../getHistoryRecords.do",
		type : "get",
		//dataType : "json",
		contentType : 'application/json;charset=utf-8',
		async : true,
		success : function(data) {
			console.log(data);
			$('#running-record').html(data.running.runningScoremm+"分"+data.running.runningScoress+"秒");
			$('#running-keeper').html(data.running.person.name+"");
			
			$('#pullUp-record').html(data.pullUp.pullUp+"个");
			$('#pullUp-keeper').html(data.pullUp.person.name+"");
			
			$('#pushUp-record').html(data.pushUp.pushUp+"个");
			$('#pushUp-keeper').html(data.pushUp.person.name+"");
			
			$('#hang-record').html(data.hang.hangss+"秒");
			$('#hang-keeper').html(data.hang.person.name+"");
			
			$('#sitUp-record').html(data.sitUp.sitUp+"个");
			$('#sitUp-keeper').html(data.sitUp.person.name+"");
			
			$('#snakeRun-record').html(data.snakeRun.snakeRunScoremm+"."+data.running.snakeRunScorems+"秒");
			$('#snakeRun-keeper').html(data.snakeRun.person.name+"");
		},
	});
}

function initTable(){
	$.ajax({
		url : "../getUnfinishedPlans.do",
		type : "get",
		//dataType : "json",
		contentType : 'application/json;charset=utf-8',
		async : true,
		success : function(data) {
			$('#table').bootstrapTable({
				method : 'get', //请求方式（*）
				data:data,
				//toolbar : '#toolbar', //工具按钮用哪个容器
				toolbarAlign : '',//工具栏的位置
				striped : true, //是否显示行间隔色
				cache : false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
				pagination : true, //是否显示分页（*）
				sortable : true, //是否启用排序
				sortOrder : "asc", //排序方式
				//queryParams : oTableInit.queryParams,//传递参数（*）
				sidePagination : "client", //分页方式：client客户端分页，server服务端分页（*）
				pageNumber : 1, //初始化加载第一页，默认第一页
				pageSize : 10, //每页的记录行数（*）
				pageList : [ 10, 25, 50, 100 ], //可供选择的每页的行数（*）
				//search : false, //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
				contentType : "application/x-www-form-urlencoded",
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
					title : '专业'
				}, {
					field : 'startTime',
					align:"center",
					title : '开始时间'
				}, {
					field : 'endTime',
					align:"center",
					title : '结束时间'
				}, {
					field : 'trainingContent',
					align:"center",
					title : '训练内容'
				}
				],
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

		
		},
	});
}

/*
 *初始化Bootstrap Table
 */
var TableInit = function() {
	var oTableInit = new Object();
	//初始化Table
	oTableInit.Init = function() {
		$('#table').bootstrapTable({
			url : '../getUnfinishedPlans.do', //请求后台的URL（*）
			method : 'get', //请求方式（*）
			//toolbar : '#toolbar', //工具按钮用哪个容器
			toolbarAlign : '',//工具栏的位置
			striped : true, //是否显示行间隔色
			cache : false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
			pagination : true, //是否显示分页（*）
			sortable : true, //是否启用排序
			sortOrder : "asc", //排序方式
			queryParams : oTableInit.queryParams,//传递参数（*）
			sidePagination : "client", //分页方式：client客户端分页，server服务端分页（*）
			pageNumber : 1, //初始化加载第一页，默认第一页
			pageSize : 10, //每页的记录行数（*）
			pageList : [ 10, 25, 50, 100 ], //可供选择的每页的行数（*）
			//search : false, //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
			contentType : "application/x-www-form-urlencoded",
			//strictSearch : true,
			//showColumns : true, //是否显示所有的列
			//showRefresh : false, //是否显示刷新按钮
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
				title : '专业'
			}, {
				field : 'startTime',
				align:"center",
				title : '开始时间'
			}, {
				field : 'endTime',
				align:"center",
				title : '结束时间'
			}, {
				field : 'trainingContent',
				align:"center",
				title : '训练内容'
			}
			],
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
		var temp = { 
		};
		return temp;
	};
	return oTableInit;
};

