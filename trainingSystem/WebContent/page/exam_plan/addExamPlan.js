$(function () {
    layui.use('form', function(){
        var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功

        //……

        //但是，如果你的HTML是动态生成的，自动渲染就会失效
        //因此你需要在相应的地方，执行下述方法来进行渲染
        form.render();
    });
})



/*
 * 添加按钮的点击事件
 */
function uploadPlan() {
    doAjax();
}


function doAjax() {
    $.ajax({
        url : "../../addPerson.do",
        type : "post",
        dataType : "text",
        contentType : 'application/json;charset=utf-8',
        async : true,
        data : "1",
        success:function(data){
            var layer = layui.layer;
            if(data==200){
                layer.msg('添加成功！');
                $('#table').bootstrapTable('destroy');//重置bootstraptable
            }else{
                layer.msg('添加失败！');
            }
        },
    });
}
