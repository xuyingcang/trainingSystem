// 基于准备好的dom，初始化echarts实例
var chart1 = echarts.init(document.getElementById('traininghours'));
var chart2 = echarts.init(document.getElementById('majorScores'));
var persons;
$(function() {
	//设置下拉框选中事件
	$('#personSelect').on("select2:select", function(e) {
		getTrainingHours(e.params.data.id);
		getMajorScores(e.params.data.id);
		setPersonInfo(e.params.data.id-1);
	});
	loadSelector("personSelect", "../../getPersonListAll.do");
});

/*
 * 获取本地数据初始化select2
 */
function initSelector(id, data) {
	//下拉框初始化
	$('#' + id).select2({
		placeholder : '请选择人员',
		data : data,
		language : "zh-CN",
	});
	
	$('#' + id).val(1).trigger("change");//默认选中第一个
	getTrainingHours(1);
	getMajorScores(1);
	setPersonInfo(0);
}

/**
 * 设置个人信息
 * @param id
 * @returns
 */
function setPersonInfo(id){
	$('#age').text(persons[id].age);
	$('#sex').text(persons[id].sex);
	$('#height').text(persons[id].height+"cm");
	$('#weight').text(persons[id].weight+"kg");
}

/**
 * 获取个人前八周的训练时长
 * @param id
 * @returns
 */
function getTrainingHours(id){
	$.ajax({
		url : "../../getHoursLastWeeks.do",
		type : "get",
		//dataType : "json",
		data:{id:id},
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
			chart1.setOption(option);
		},
	});
}

/**
 * 获取个人的专业考核历史成绩
 * @param id
 * @returns
 */
function getMajorScores(id){
	$.ajax({
		url : "../../getMajorScoresByPid.do",
		type : "get",
		//dataType : "json",
		data:{id:id},
		contentType : 'application/json;charset=utf-8',
		async : true,
		success : function(data) {
			data=convert(data);
			
			var option = {
					title : {
						text : '个人专业成绩'
					},
					tooltip : {},
					legend : {
						left:'right',
						tooltip:{
					        show:true
					    }
					},
					xAxis : {
						data : data.timeLine
					},
				    yAxis : {},
                    series : [ 
                    	{
							name : '理论',
							type : 'line',
							data : data.theory
                    	}, 
                    	{
							name : '实操',
							type : 'line',
							data : data.operation
                    	}, 
                    	{
							name : '总成绩',
							type : 'line',
							data : data.totalScore
                    	}, 
                    ]
				};

				// 使用刚指定的配置项和数据显示图表。
			chart2.setOption(option);
		},
	});
}
/**
 * 对后台数据进行格式化
 * @param data
 * @returns
 */
function convert(data){
	var timeLine=[];
	var theory=[];
	var operation=[];
	var totalScore=[];
	for (var i = 0; i < data.length; i++) {
		timeLine.push(data[i].examPlan.time);
		theory.push(data[i].theory);
		operation.push(data[i].operation);
		totalScore.push(data[i].totalScore);
	}
	var convertedData = {
			"timeLine":timeLine,
			"theory":theory,
			"operation":operation,
			"totalScore":totalScore
	};
	return convertedData;
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
			persons=data;
			initSelector(id, data);
		},
	});
}
