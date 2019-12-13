// 基于准备好的dom，初始化echarts实例
var chart1 = echarts.init(document.getElementById('traininghours'));
var chart2 = echarts.init(document.getElementById('QualifiedRate'));
$(function() {
	initChart1();
	initChart2();
	getHistoryRecords();
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
		},
	});
}

