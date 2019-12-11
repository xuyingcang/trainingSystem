$(function () {
    //2.初始化Table
    var oTable = new TableInit();
    oTable.Init();
    var layer = layui.layer;

});
var i = -1;

/*
 * “导入计划”按钮的点击事件
 * 弹出layer
 */
function addSportScore() {
    i = 1;
    name();
    plan();

}

/**
 * 表单提交的点击事件
 */
function myMajorAction() {
    if (i == 1) {

        doAjax();
        i = -1;
    }
    if (i == 2) {

        updateAjax();
        i = -1;
    }
}

function doAjax() {
    var form = $("#form-major").serialize();
    $.ajax({
        url: "../../addMAjorScore.do",
        type: "post",
        async: false,
        data: form,
        success: function (data) {
            if (data == 200) {
                layer.msg('添加成功！');
            } else {
                layer.msg('添加失败！');
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("ajax请求失败");
        }
    });

}

/*
 * 点击某项训练计划填报训练情况登记
 */
function name() {
    //初始化select2
    loadSelectorName("persons", "../../getPersonList.do");
    index = layer.open({
        type: 1,
        area: ['1000px', '500px'],
        fixed: false, //不固定
        maxmin: true,
        zIndex: 1001,
        title: '考核成绩',
        content: $('#major_score'),
    });
}


/*
 * 获取本地数据初始化select2
 */
function initSelectorName(id, data) {
    $('#' + id).select2({
        data: data,
        closeOnSelect: false,
        dropdownParent: $('#major_score'),
    });
}

/*
 * 获取远程数据初始化select2
 */
function loadSelectorName(id, url) {
    $.ajax({
        url: "../../getPersonList.do",
        type: "post",
        dataType: "json",
        contentType: 'application/json;charset=utf-8',
        async: true,
        success: function (data) {
            initSelectorName(id, data);
        },
    });
}

//----------------------------------设置计划下拉框-------------------------------------------------------
/*
 * 点击某项训练计划填报训练情况登记
 */
function plan() {
    //初始化select2
    loadSelectorPlan("plan", "../../getExamPlanList.do");

}


/*
 * 获取本地数据初始化select2
 */
function initSelectorPlan(id, data) {
    $('#' + id).select2({
        data: data,
        closeOnSelect: false,
        dropdownParent: $('#major_score'),
    });
}

/*
 * 获取远程数据初始化select2
 */
function loadSelectorPlan(id, url) {
    $.ajax({
        url: "../../getExamPlanList.do",
        type: "post",
        dataType: "json",
        contentType: 'application/json;charset=utf-8',
        async: true,
        success: function (data) {
            initSelectorPlan(id, data);
        },
    });
}


/**
 * 查询
 */
function queryExamPlan() {
    $('#table').bootstrapTable('refresh');
}

/*
*初始化Bootstrap Table
*/
var TableInit = function () {
    var oTableInit = new Object();
    //初始化Table
    oTableInit.Init = function () {
        $('#table').bootstrapTable({
            url: '../../getMajorScore.do', //请求后台的URL（*）
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
                field: 'number',
                align: 'center',
                valign: 'middle',
                title: 'ID'
            }, {
                field: 'person.name',
                align: 'center',
                valign: 'middle',
                title: '姓名'
            }, {
                field: 'examPlan.content',
                align: 'center',
                valign: 'middle',
                title: '考核'
            }, {
                field: 'operation',
                align: 'center',
                valign: 'middle',
                title: '实操成绩'
            }, {
                field: 'theory',
                align: 'center',
                valign: 'middle',
                title: '理论成绩'

            }, {
                field: 'totalScore',
                align: 'center',
                valign: 'middle',
                title: '总成绩'

            }, {
                field: 'evaluate',
                align: "center",
                valign: "middle",
                title: '成绩评定'

            }, {
                field: 'id',
                title: '操作',
                width: 120,
                align: 'center',
                valign: 'middle',
                events: operateEvents,//给按钮注册事件
                formatter: operateFormatter//定义操作按钮
            },],
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

//赋予的参数
function operateFormatter(value, row, index) {
    return ['<button type="button" id="updateMajor" class="layui-btn layui-btn-sm">修改 </button><button type="button" id="deleteMajor" class="layui-btn layui-btn-sm"> 删除 </button>'].join('');
}

window.operateEvents = {
    'click #updateMajor': function (e, value, row, index) {
        updateMajorScore(row);

    }, 'click #deleteMajor': function (e, value, row, index) {
        //
        layer.confirm('真的删除么?', {btn: ['确定', '取消'], titel: "提示"}, function () {
            deleteMajorScore(row);

        });
    }
};


/*
 * 点击某项训练计划填报训练情况登记
 */
function updateMajorScore(row) {
    i = 2;
    loadData(row);
    name();
    plan();
}

function closeLayer() {
    layer.close(index);
}

/*
 * 加载对象
 */
function loadData(obj) {
    for (var item in obj) {
        $("#" + item).val(obj[item]);//设置属性
        if (item == "persons") {
            persons = obj[item];
        }
    }
}

function deleteMajorScore(row) {

    $.ajax({
        url: "../../deleteMajorScore.do",
        type: "post",
        dataType: "json",
        async: true,
        data: {id: row.id},
        success: function (data) {
            if (data == 200) {
                layer.msg('删除成功！');
                $('#table').bootstrapTable('refresh');
            } else {
                layer.msg('删除失败！');
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("ajax请求失败");
        }
    });

}


function updateAjax() {
    var form = $("#form-major").serialize();
    $.ajax({
        url: "../../updateMajorScore.do",
        type: "post",
        async: false,
        data: form,
        success: function (data) {
            if (data == 200) {
                layer.msg('修改成功！');
            } else {
                layer.msg('修改失败！');
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("ajax请求失败");
        }
    });

}


/**
 * 计算总成绩和成绩评定的点击事件
 */
function majorBlur() {

    $.ajax({
        url: "../../getExamPlanToId.do",
        type: "post",
        dataType: "json",
        async: true,
        data: {id: $("#plan").val()},
        success: function (data) {
            var operation = $("#operation").val();
            var theory = $("#theory").val();
            var totalScore = $("#totalScore").val((operation * data + (100 - data) * theory) / 100);

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("ajax请求失败");
        }
    });

}