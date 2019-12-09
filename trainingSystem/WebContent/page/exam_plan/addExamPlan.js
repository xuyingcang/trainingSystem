$(function () {
    layui.use('form', function(){
        var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功
        var layer = layui.layer;

        //……

        //但是，如果你的HTML是动态生成的，自动渲染就会失效
        //因此你需要在相应的地方，执行下述方法来进行渲染
        form.render();
    });
})



/*
 * 添加按钮的点击事件
 */
function myExamPlanAction() {
    doAjax();
}


function doAjax() {
    var form = $("#form-examplan").serialize();
    $.ajax({
        url : "../../addExamPlan.do",
        type : "post",
        async : false,
        data : form,
        success:function(data){
            if(data==200){
                layer.msg('添加成功！');
            }else{
                layer.msg('添加失败！');
            }
        },
    });
}
