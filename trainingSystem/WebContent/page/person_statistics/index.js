$(function() {
	loadSelector("personSelect", "../../getPersonList.do");
});

/*
 * 获取本地数据初始化select2
 */
function initSelector(id, data) {
	$('#' + id).select2({
		placeholder : '请选择人员',
		data : data,
		language : "zh-CN",
	});
	$('#' + id).on("select2:select", function(e) {
		$.ajax({
			url : "../../getPersonalAttendance.do",
			type : "get",
			//dataType : "json",
			data:{id:e.params.data.id},
			contentType : 'application/json;charset=utf-8',
			async : true,
			success : function(data) {
				console.log(data);
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

// 指定图表的配置项和数据
var option = {
	title : {
		text : '个人训练时间'
	},
	tooltip : {},
	legend : {
		data : [ '训练小时' ]
	},
	xAxis : {
		data : [ "衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子" ]
	},
	yAxis : {},
	series : [ {
		name : '销量',
		type : 'bar',
		data : [ 5, 20, 36, 10, 10, 20 ]
	} ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);