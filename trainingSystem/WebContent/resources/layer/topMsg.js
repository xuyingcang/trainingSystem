/*
 * 保存数据后的提示信息框
 * @param title
 */

/* 20171222edit:禁用backspace键start */
document.onkeydown = function (e){
	var ev = e || window.event;
	var obj = ev.target || ev.srcElement;
	var t = obj.type || obj.getAttribute('type');
	var vReadOnly = obj.readOnly;
	var vDisabled = obj.disabled;
	vReadOnly = (vReadOnly == undefined) ? false : vReadOnly;
	vDisabled = (vDisabled == undefined) ? true : vDisabled;
	if(ev.keyCode == 33 || ev.keyCode == 34){
		return false;
	}
	if(ev.keyCode == 8){
//		var flag2 = obj.nodeName == "DIV" && obj.getAttribute("contenteditable") == "true";
		var flag2 = obj.getAttribute("contenteditable") == "true";
		if (flag2){
			return true;
		}
		var flag1 = (null != t) && ((t == "search" || t == "number" || t == "password" || t == "text" || t == "textarea") && (!vReadOnly));
		if(!flag1 && !flag2) 
			return false;
	}
//	var flag2 = (ev.keyCode == 8) && (null != t) && (t != "password") && (t != "text") && (t != "textarea") && (t != "search");
};
/* 20171222:禁用backspace键end */
$(function(){
	// defineCss();
	if (null != $.mCustomScrollbar) {
		$.mCustomScrollbar.defaults.scrollInertia=0;
	}
});

function showMsg(str) {
	layer.alert(str,{
		title: ["提示","font-family:Microsoft YaHei;background-color: #0097A7;font-weight: bold;color:#fff;"],
		time: 1000,
		btn: 0
	});  
}

function confirmMsg(str) {//20170331_lsl:需要用户点击确定来确认看到这一信息，无回调
	layer.alert(str,{
		title: ["警告","font-family:Microsoft YaHei;background-color: #00ACC1;font-weight: bold;color:#fff;"],
		time: 0
	}); 
}

function showMsg1(str){
	dhtmlx.alert({
		title:"提　　示",
		text:str
	});
}

//含有weboffice页面的弹出提示框
function showMsg_webOffice(title){
	$.messager.show({
		title:'提示',
		msg:'<iframe scrolling="no" frameborder="0" style="top: 0;left: 0; position: absolute; z-index: -1; width: 100%; height: 100%;"></iframe><font style="font-size:14px;color:red;">'+title+'</font>',
		showType:'slide',
//		timeout :2000, 默认4秒
		style:{
			right:'',
			top:document.body.scrollTop+document.documentElement.scrollTop,
			bottom:''
		}
	});
	
}

function showMsg_webOffice1(title){
	$.messager.show({
		title:'提示',
		msg:'<iframe scrolling="no" frameborder="0" style="top: 0;left: 0; position: absolute; z-index: -1; width: 100%; height: 100%;"></iframe><font style="font-size:14px;color:red;">'+title+'</font>',
		showType:'slide',
//		timeout :2000, 默认4秒
		style:{
			right:'',
			top:document.body.scrollTop+document.documentElement.scrollTop,
			bottom:''
		}
	});
}

function defineCss(){
	var oCss = document.createElement("link");
	oCss.setAttribute("rel","stylesheet");
	oCss.setAttribute("type","text/css");
	var oCssGeneral = document.createElement("link");
	oCssGeneral.setAttribute("rel","stylesheet");
	oCssGeneral.setAttribute("type","text/css");
	oCssGeneral.setAttribute("href","resources/style/css/alert/alert_general.css");
	var screen_1024 = "resources/style/css/alert/alert_1024.css";
	var screen_1280 = "resources/style/css/alert/alert_1280.css";
	var screen_1366 = "resources/style/css/alert/alert_1366.css";
	var screen_1440 = "resources/style/css/alert/alert_1440.css";
	var screen_1600 = "resources/style/css/alert/alert_1600.css";
	if(window.outerWidth <= 1200){
		oCss.setAttribute("href",screen_1024);
	}
	if(window.outerWidth > 1200 && window.outerWidth <= 1300){
		oCss.setAttribute("href",screen_1280);
	}
	if(window.outerWidth > 1300 && window.outerWidth <= 1400){
		oCss.setAttribute("href",screen_1366);
	}
	if(window.outerWidth > 1400 && window.outerWidth <= 1500){
		oCss.setAttribute("href",screen_1440);
	}
	if(window.outerWidth > 1500){
		oCss.setAttribute("href",screen_1600);
	}
	document.getElementsByTagName("head")[0].appendChild(oCssGeneral);
	document.getElementsByTagName("head")[0].appendChild(oCss);
}

/*20170607_lsl:高亮选中表格特定行s*/
function selectTheRecord(t,r) {
	if(!t.is(":visible")){
		var p = t.closest(".tab-pane");
		if(p.length > 0){
			var id = p.attr("id");
			$("[data-toggle = 'tab'][href='#" + id + "']").click();
		}
	}
	
	if('bootstrapTable' in $(t)){
		findRow(t,r)
	}else{
		var row = t.children("tbody").children("tr[data-nm='" + r + "']");
		if(null != row && row.length > 0){
			row.addClass("tr-selected");
		}
	}
}

function removeSelectedClass(m,t,classN){
	m.on("hidden.bs.modal",function(){
		t.children("tbody").children("tr").removeClass(classN);
	});
}
var count = 0;
function findRow(tab,nm){
	var row = tab.children("tbody").children("tr[data-uniqueid='" + nm + "']");
	if((null == row || row.length == 0) && count < 10){
		$(tab).bootstrapTable('nextPage');
		count++;
		findRow(tab,nm)
	}else{
		row.addClass("tr-selected");
	}
	
}
/*20170607_lsl:高亮选中表格特定行e*/

/*20170607_lsl:跳转后选中部队树节点s*/
function selectMenuNode(tree,n,s) {
	var node = tree.treeview('findNodes', [n, 'id']);
	var found = false;
	if(null != node && node.length > 0){
		tree.treeview('revealNode', [ node, { silent: true } ]);
		tree.treeview('selectNode', [ node ]);
		found = true;
	}
	if (s && !found) {
		tree.treeview('collapseAll', [{silent: true}]);
		selectFirstLeaf(tree);
		return;
	};
	if(!found){
		tree.treeview('expandAll', { levels: 4, silent: true });
		s = true;
		selectMenuNode(tree, n,s);
		showMsg("未配置相应节点！");
	}
}

function selectFirstLeaf(tree){
	var node = tree.treeview('findNodes', ['^0.0$', 'nodeId']);
	if (node.length > 0){
		node = node[0];
		while (!node.isLeaf && null != node.nodes){
			node = node.nodes[0];
		}
	}			
	tree.treeview('revealNode',[node]);
	tree.treeview('selectNode',[node]);
}
/*20170607_lsl:跳转后选中部队树节点e*/
/*20170704bk:多级部队树递归选择叶节点 start*/
function selectFirstLeafPro(tree){
	var node = tree.treeview('findNodes', ['^0.0$', 'nodeId']);
	if (node.length > 0){
		node = node[0];
		checkNextLevel(tree,node);
	}
	
}
function checkNextLevel(tree,node){
		while (null != node.nodes){
			node = node.nodes[0];
			if(node.nodes != undefined || node.lazyLoad){
				node.$el.children(".fa").click();
				setTimeout(1000,function(tree,node){
					checkNextLevel(tree,node);
				})
			}else{
				tree.treeview('revealNode',[node,{silent: true}]);
				tree.treeview('selectNode',[node])
			}
			
		}
}
/*20170704bk:多级部队树递归选择叶节点 end*/
/*20170228_lsl:二级标题文件夹图标操作start*/
function operateFolderIcon(){
	$(".mk2jcd-container a").on("click",function(){
		$(this).closest("ul").find("i").removeClass("fa-folder-open");
		$(this).closest("ul").find("i").addClass("fa-folder");
		$(this).find("i").addClass("fa-folder-open");
		$(this).find("i").removeClass("fa-folder");
	});
}
/*20170228_lsl:二级标题文件夹图标操作end*/

function initSelect2(arr) {
	var arrD = [];
	for (var i = 0; i < arr.length; i++) {
		var id = arr[i].id;
		var options = arr[i].options;
		var key = arr[i].key;
		var gxKey = arr[i].gxKey ? arr[i].gxKey:"";
		var filterZd = arr[i].filterZd ? arr[i].filterZd:"";
		var filterNm = arr[i].filterNm ? arr[i].filterNm:"";
		var joinZd = arr[i].joinZd ? arr[i].joinZd:"";
		if(arr[i].remote){
			getZdList(key,id,options,gxKey,filterZd,filterNm,joinZd)
		}else{
			options.language = "zh-CN";
			$("#" + id).select2(options);
			$("#" + id).select2("val","[]");
		}
		/*if(typeof(options.onSelect) == "function"){
			$("#" + id).on('select2:selecting',function(e){
				console.log(e);
				options.onSelect(e);
				this
				
			})
		}*/
	};
}
/**
 * 获取字典列表
 * @param key 连接的字典表名
 * @param id 
 * @param options
 * @param gxKey 关系表
 * @param filterZd 关系表中对应查询条件的字段
 * @param filterNm 过滤的条件
 * @param joinZd 查询的表在关系表中对应的字段
 */
function getZdList(key,id,options,gxKey,filterZd,filterNm,joinZd){
	$.ajax({
		type : "POST",
		url : "query/getZdList.do",
		data: {
			key: key,
			gxKey: gxKey,
			filterZd: filterZd,
			filterNm: filterNm,
			joinZd: joinZd
		},
		success: function(data){
			$("#" + id).empty();
			data = eval(data);
			options.data = data;
			options.language = "zh-CN";
			$("#" + id).select2(options);
			$("#" + id).select2("val","[]");
		}
	});
}

/*20170704_lsl:判断数组中是否包含某元素，返回true或false*/
Array.prototype.S = String.fromCharCode(2);
Array.prototype.in_array = function(e) {
	var r = new RegExp(this.S + e + this.S);
	return (r.test(this.S + this.join(this.S) + this.S));
}

/*20170704_lsl:毫秒转yyyy-m-d*/
function millionToYMD(m) {
	var t = new Date(m);
	if(t.toString() === "Invalid Date")
		return m;
	else{
		var y = t.getFullYear();
		var m = t.getMonth() + 1;
		var d = t.getDate();
		var res = y + "-" + m + "-" + d;
		return res;
	}
}

/**
 * 20170624_lsl
 * 控制highcharts图例，打开关闭不同图例，并更新y轴
 */
 function closeLegendWithYUpdate(chart, yAxis, s, index, valueSuffix) {
 	for (var i = 0; i < s.length; i++) {
 		if(i != index && s[i].visible) {
 			s[i].hide();
 		}
 	};
 	chart.update({
 	 	yAxis: yAxis,
 	 	tooltip: {	
 	 		formatter: function() {
 	 			return millionToYMD(this.x) + "<br/>" + this.points[0].series.name + "：" + this.y + valueSuffix;
 	 		}
	    }
 	},true);
 }

 function in_mapArray(a,s) {
 	for(var i in a) {
 		if (s === a[i].name) {
 			return a[i];
 		};
 	}
 	return false;
 }
 
 /**
  * 20170719_lsl:构建月份选择器
  * @param o 初始化select的jquery对象
  * @param f 选项响应函数
  * @param c 当前月份标识
  */
 function setMonthSelector(o,f,c) {
	 var monthList = [{id:1,text:"一月"},{id:2,text:"二月"},{id:3,text:"三月"},{id:4,text:"四月"},{id:5,text:"五月"},{id:6,text:"六月"},{id:7,text:"七月"},{id:8,text:"八月"},{id:9,text:"九月"},{id:10,text:"十月"},{id:11,text:"十一月"},{id:12,text:"十二月"}];
	 var options = {
			 data: monthList.splice(0,c),
			 language: "zh-CN"
	 };
	 o.select2(options);
	 o.on("change",function(e) {
		 var selected = o.select2("val");
		 f(selected);
	 });
	 o.val(c).trigger("change");
 }
 
 function getCurrentMonth() {
	 var d = new Date();
	 var m = d.getMonth() + 1;
	 return m;
 }
 
 /**
  * 20170721_lsl:校验input输入框数值不为负数
  * @param o
  * @param s
  */
 function numberCheck(o,s) {
	 o.on("input propertychange",function(e) {
		 var val = $(this).val();
		 if(val < 0) {
			 $(this).val(0);
			 showMsg(s + "数据错误！");
		 }
	 });
 }

 /**
  * 20170807_lsl:对form进行赋值，目前仅限于表格中的input和textarea标签
  * @param o form的jquery对象
  * @param d 要载入的数据
  */
 function loadFormData(o,d) {
 	for(var key in d) {
 		o.find("input[name='" + key + "']").val(d[key]);
 	}
 	for(var key in d) {
 		o.find("textarea[name='" + key + "']").val(d[key]);
 	}
 	for (var key in d) {
 		o.find("td[name='" + key + "']").html(d[key]);
 	}
 }

 /**
  * 20170807_lsl:页面跳转后对一级菜单的href进行复位
  * @param m 需要复位的标签id
  */
 function resetTopAHref(m) {
 	if (null != $("#" + m, top.window.document) && $("#" + m, top.window.document).length > 0) {
 		$("#" + m, top.window.document).attr("href","goMain.do?menuId=" + m);
 	}
 }

 function lessThenHundred(oL) {
 	oL.forEach(function(e) {
 		e.on("input propertychange",function(e) {
		 var val = $(this).val();
		 if(isNaN(val)) {
			 $(this).val(0);
		 }else {
		 	if (parseInt(val) > 100 || parseInt(val) < 0) {
		 		$(this).val(0);
		 		showMsg("数据超出合理范围！")
		 	}
		 }
	 });
 	})
 }
/**
 * 20170814_bk附件批量下载
 * 使用方法：在getAttachments函数中先初始化附件内码，然后传入附件内码
 * @param obj附件内码字符以逗号隔开字符串形式
 */
 function downloadFjZip(obj,isWd){
 	if (null == isWd) {
 		isWd = false;
 	}
	if(obj!="") {
		fjnms=obj.substring(0,obj.length-1);
		window.location.href=path+"/attach/downloadFjZip.do?fjnms="+fjnms + "&isWd=" + isWd;
	}
 }

 /**
  * 20170818_lsl:form表单转换为json对象
  */
 $.fn.serializeObject = function() {
 	var o = {};
 	var a = this.serializeArray();
 	$.each(a,function() {
 		if (o[this.name]) {
 			if (!o[this.name].push) {
 				o[this.name] = [o[this.name]];
 			}
 			o[this.name].push(this.value || "");
 		}else {
 			o[this.name] = this.value || "";
 		}
 	});
 	return o;
 }

 function setZonHeBuDuiZhiBan(l) {
	var res = [];
	for (var i = 0; i < l.length; i++) {
		if(l[i]["attributes"]["zblbnm"] === "01" || l[i]["attributes"]["zblbnm"] === "29") {
			res.push(l[i]);
		}
	}
	return res;
}
 /**
  * 20171018_bk将日期转换为表准格式
  * @param date日期
  * @param fmt格式
  * @returns String日期
  */
 function dateformat(date,fmt){
	 Date.prototype.Format = function(fmt){
		 var o = {
		 "M+":this.getMonth() +1,
		 "d+":this.getDate(),
		 "h+":this.getHours(),
		 "m+":this.getMinutes(),
		 "s+":this.getSeconds(),
		 "q+":Math.floor((this.getMonth() + 3) / 3),
		 "s":this.getMilliseconds()
		 };
		 if(/(y+)/.test(fmt))
			 fmt = fmt.replace(RegExp.$1,(this.getFullYear() +"").substr(4-RegExp.$1.length));
		 for(var k in o){
			 if(new RegExp("("+ k +")").test(fmt))
				 fmt = fmt.replace(RegExp.$1,(RegExp.$1.length == 1) ? (o[k]):(("00"+o[k]).substr((""+o[k]).length)));
		 }
		 return fmt
		 
	 }
	 return date.Format(fmt);
 }
 /**
  * 20171018_bk获取指定月份第一天和最后一天
  * @param year年份
  * @param month月份
  * @param flag（first第一天，last最后一天）
  * @returns {String日期}
  */
 function getMonthStartAndEnd(year,month,flag){
	 var firstday = new Date(year,month-1,1)
	 var lastday = new Date(year,month,0)
	 if(flag=="first"){
		 return dateformat(firstday,"yyyy-MM-dd");
	 }
	 if(flag=="last"){
		 return dateformat(lastday,"yyyy-MM-dd");
	 }
 }

var debounceV2 = function(fn, delay, mustRunDelay) {
	var timer = null;
	var t_start;
	return function() {
		var context = this, args = arguments, t_curr = +new Date();
		clearTimeout(timer);
		if (!t_start) {
			t_start = t_curr;
		}
		if (t_curr - t_start >= mustRunDelay) {
			fn.apply(context,args);
			t_start = t_curr;
		}else {
			timer = setTimeout(function() {
				fn.apply(context, args);
			},delay);
		}
	};
}

/**
 * 20171106_lsl:提交时，对字符长度(包括最大值和是否为空)做限制
 * @param o 需要校验的jquery对象
 * @param l 限制长度
 * @param m 在提示信息中需要展示的字段名
 * @param isNull 字段是否可为空
 * @returns {Boolean}
 */
function inputLengthControl(o,l,m,isNull) {
	if (o.length > 0) {
		var s = o.val();
		if(null != s && s != "") {
			if (s.length > parseInt(l)) {
				showMsg(m + "填写内容过长！");
				return false;
			}
			return true;
		}else {
			if (isNull) {
				return true;
			}else {
				showMsg(m + "不能为空！");
				return false;
			}
		}
	}
	return true;
}

function trimV2(str, is_global) {
	var result = str.toString();
	result = result.replace(/(^\s+)|(\s+$)/g,"");
	if (is_global.toLowerCase() === "g") {
		result = result.replace(/\s/g,"");
	}
	return result;
}

function isBuMenZhiBan(bdjb, xjd) {
	if (parseInt(bdjb) <= 10 && xjd === "0") {
		return true;
	}else
		return false;
}

function with114And112(n) {
	if (null != n && n === getJuNmWith114And112()) {
		return true;
	}
	return false;
}

function getJuNmWith114And112() {
	var f = "2de4deef8b5c49feab2a3551";
	return f;
}

function getViewWidth(o,width) {
	var pLeft = o.css("padding-left").split("px")[0];
	var pRight = o.css("padding-right").split("px")[0];
	var mLeft = o.css("margin-left").split("px")[0];
	var mRight = o.css("margin-right").split("px")[0];
	width = width - parseInt(pLeft) - parseInt(pRight) - parseInt(mLeft) - parseInt(mRight);
	return width;
}

function findRowData(param, table) {
	if (table.hasClass("table")) {
		var row = table.bootstrapTable("getRowByUniqueId", param);
		if (null != row) {
			return row;
		}
	}
	return null;
}

function isPhoneNumer(ys,ms) {
	var pattern = /(^[0-9]{3,4}-[0-9]{3,8}$)|(^[0-9]{3,8}$\(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}1[0-9]{10}$)/;
	if (!pattern.test(ys)) {
		showMsg(ms);
		return false;
	}
	return true;
}

function setZhuangBeiXi() {
	var zhuangbei = {
		nm: 64,
		id: "25",
		text: "装备席",
		name: "装备席",
		leaf: true,
		xh: "25",
		attributes: {
			zblbnm: "25"
		}
	}
	return zhuangbei;
}

function setShuGuanXi() {
	var shuguan = {
		nm: 1214,
		id: "28",
		text: "数管席",
		name: "数管席",
		leaf: true,
		xh: "28",
		attributes: {
			zblbnm: "99"
		}
	}
	return shuguan;
}

function isTuanYiShang(bdjb) {
	if (parseInt(bdjb) < 7) {
		return true;
	}else
		return false;
}

/* 2018.01.24 chen 将部队树构建提取到公用文件*/
function setBdTree($element, options, dataFormatter){
	
	var params = {
		withRoot: true,
		maxNextLevel: 3,
		withXJD: false,
		withZSD: true,
		withLazy: true,
		jiGuanKuoZhan: false
	};
	
	var dataUrl = {		
		url: "zzll/getBdTree.do",
		async: true,
		data: params,
		dataType: 'json',
		type: 'POST'
	};	
	
	var newOpts = options['treeOptions'];
	if (newOpts){		
		$.extend(true, dataUrl, newOpts.dataUrl);
		delete newOpts['dataUrl'];
	} 
		
	var treeOptions = {		
		preventUnselect: true,
		showBorder: true,
		showIcon: true,
		backColor: '#EDF4EA',
		color: '#333',
		onhoverColor: '#eaf2ff',
		selectedBackColor: 'rgb(206,232,255)',
		selectedColor: '#000 !important',
		expandIcon:'fa fa-chevron-right',
		collapseIcon: 'fa fa-chevron-down',
		wrapNodeText: true,
		levels:2		
	};
	
	if (options.nonLeafSelectable === false){
		var onNodeSelected = newOpts['onNodeSelected'];
		var onNodeCollapsed = newOpts['onNodeCollapsed'];
		var onNodeExpanded = newOpts['onNodeExpanded'];
		var eventHandler = {
				onNodeSelected:function(event,node){	
					if (node.isLeaf){
						$element.find('.node-selected').each(function(){
							if ($(this).data('nodeid') !== node.nodeId)
								$(this).removeClass('node-selected');
						});
					}
					if (onNodeSelected instanceof Function){
						onNodeSelected(event, node);
					}
				},
				onNodeCollapsed: function(event, node){
					if (!node.isLeaf){				
						var selectedNodes = $element.treeview('getSelected');
						selectedNodes.forEach(function(n){
							if (n.nodeId.search('^'+node.nodeId) !== -1){						
								$('#'+ node.id).removeClass('node-selected').addClass('node-selected');	
								return;
							}
						});
					}
					if (onNodeCollapsed instanceof Function){
						onNodeCollapsed(event, node);
					}
				},
				onNodeExpanded: function(event, node){
					if (!node.isLeaf){				
						var selectedNodes = $element.treeview('getSelected');
						selectedNodes.forEach(function(n){
							if (n.nodeId.search('^'+node.nodeId) !== -1){						
								$('#'+ node.id).removeClass('node-selected');
								return;
							}
						});
					}
					if (onNodeExpanded instanceof Function){
						onNodeExpanded(event, node);
					}
				}
		};
		
		delete newOpts['onNodeSelected'];
		delete newOpts['onNodeCollapsed'];
		delete newOpts['onNodeExpanded'];
		$.extend(true, treeOptions, eventHandler)
	}
	
	$.extend(true, treeOptions, newOpts);	
	
	function setSelectable(nodes){
		if (options.nonLeafSelectable === false){
			$.each(nodes, function(index, node){
				if (node.nodes){
					setSelectable(node.nodes);
				}
				if (!node.isLeaf){
					node.selectable = false;
				}
			});
		}
	}
	
	var lazyLoad = function(node,func){	
		 
		var optionsEx = {				
				data : {
					bdnm: node.id,
					withRoot: false,
					jiGuanKuoZhan: false
				}				
			};
		var lazyloadOptions = $.extend(true, {}, dataUrl, optionsEx);
		$.ajax(lazyloadOptions)
			.done(function(data){
				if(null != data){
					setSelectable(data);
					if (options['setLazyloadFlag'] instanceof Function){
						options.setLazyloadFlag();
					}
					func(data);						
				}
			}).fail(function(){
				console.log("加载部队树出错!");
			});
	};
	
	var isLazyload = dataUrl.data.withLazy;
	if (isLazyload) {
		treeOptions.lazyLoad = lazyLoad;
	}
	
	$.ajax(dataUrl)
		.done(function(nodes){
			if (nodes){
				setSelectable(nodes);
				if (dataFormatter instanceof Function) {
					nodes = dataFormatter(nodes);
				}
				treeOptions.data = nodes;
				$element.treeview(treeOptions);	
			}
		}).fail(function(){
			console.log("加载部队树出错!");
		});	
}

function xiuFuYongCheDanWeiForJiaoDaoDui (zblbnm, isLeaf, bdjc, bdnm, arr) {
	if (arr && arr.length === 0 && zblbnm && zblbnm === "20" && isLeaf && isLeaf === "true") {
		arr.unshift({
			id: bdnm,
			text: bdjc
		});
	}
	return arr;
}