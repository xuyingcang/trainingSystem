$(function() {
	loadSelector("personSelect", "../../getPersonList.do");
});

/*
 * 获取本地数据初始化select2
 */
function initSelector(id, data) {
	//要想让placeholder生效，需要select的option里边有一个value为空的option
	$('#' + id).select2({
		placeholder : '请选择人员',
		data : data,
		language : "zh-CN",
	});
	$('#' + id).on("select2:select", function(e) {
		$.ajax({
			url : "../../getHoursLastWeeks.do",
			type : "get",
			//dataType : "json",
			data:{id:e.params.data.id},
			contentType : 'application/json;charset=utf-8',
			async : true,
			success : function(data) {
				var option = {
						title : {
							text : '每周训练时长'
						},
						tooltip : {},
						legend : {
							data : [ '训练小时' ]
						},
						xAxis : {
							data : data.week
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
}

/*
 * 获取远程数据初始化select2
 */
function loadSelector(id, url) {
	$.ajax({
		url : url,
		type : "post",
		dataType : "json",
		contentType : 'application/json;charset=utf-8',
		async : true,
		success : function(data) {
			initSelector(id, data);
		},
	});
}

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

