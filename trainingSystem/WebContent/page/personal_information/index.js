
	var json;
	$(function() {
		//2.初始化Table
			var oTable = new TableInit();
			oTable.Init();
	});

	/*
	 * “导入计划”按钮的点击事件
	 * 弹出layer
	 */
	function addPerson() {
		layer.open({
			  type: 2,
			  area: ['800px', '400px'],
			  fixed: false, //不固定
			  maxmin: true,
			  title:'新增人员',
			  content: 'addPerson.jsp'
			});
	}

	/*
	*初始化Bootstrap Table
	*/
	var TableInit = function() {
        var oTableInit = new Object();
        //初始化Table
        oTableInit.Init = function () {
            $('#table').bootstrapTable({
                url: '../..//getPersonList1.do', //请求后台的URL（*）
                method: 'get', //请求方式（*）
                toolbar: '#toolbar', //工具按钮用哪个容器
                toolbarAlign: 'right',//工具栏的位置
                striped: true, //是否显示行间隔色
                cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
                pagination: true, //是否显示分页（*）
                sortable: false, //是否启用排序
                sortOrder: "asc", //排序方式
                queryParams: oTableInit.queryParams,//传递参数（*）
                sidePagination: "client", //分页方式：client客户端分页，server服务端分页（*）
                pageNumber: 1, //初始化加载第一页，默认第一页
                pageSize: 10, //每页的记录行数（*）
                pageList: [10, 25, 50, 100], //可供选择的每页的行数（*）
                search: true, //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
                contentType: "application/x-www-form-urlencoded",
                strictSearch: true,
                showColumns: true, //是否显示所有的列
                showRefresh: false, //是否显示刷新按钮
                minimumCountColumns: 2, //最少允许的列数
                clickToSelect: false, //是否启用点击选中行
                //height : 700, //table的高度，如果没有设置height属性，表格自动根据记录条数觉得表格高度
                uniqueId: "no", //每一行的唯一标识，一般为主键列
                showToggle: false, //是否显示详细视图和列表视图的切换按钮
                cardView: false, //是否显示详细视图
                showExport: false,//是否显示导出按钮
                detailView: false, //是否显示父子表
                columns: [{
                    field: 'id',
                    title: 'ID'
                }, {
                    field: 'name',
                    title: '姓名'
                }, {
                    field: 'sex',
                    title: '性别'
                }, {
                    field: 'age',
                    title: '年龄'
                }, {
                    field: 'height',
                    title: '身高'
                }, {
                    field: 'weight',
                    title: '体重'
                }, {
                    field: 'person_type',
                    title: '人员类别'
                }, {
                    field: 'military_rank',
                    title: '军衔'
                }, {
                    field: 'duty',
                    title: '职务'
                }, {
                    field: 'profession',
                    title: '专业'
                }, {
                    field: 'training_type',
                    title: '训练类型'
                }],
                rowStyle: function (row, index) {
                    var classesArr = ['success', 'info'];
                    var strclass = "";
                    if (index % 2 === 0) {//偶数行
                        strclass = classesArr[0];
                    } else {//奇数行
                        strclass = classesArr[1];
                    }
                    return {
                        classes: strclass
                    };
                },//隔行变色
            });

        };
        return oTableInit;
    }