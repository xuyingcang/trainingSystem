// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
$(function() {
	$.ajax({
		url : "../../getHoursLast12Month.do",
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
				myChart.setOption(option);
		},
	});
});





