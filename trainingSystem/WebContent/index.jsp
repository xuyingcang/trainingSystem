<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link type="text/css" href="resources/layui/css/layui.css"	rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <title>layuiAdmin</title>
</head>
<body>
<!--上方标题栏-->
<div class="parentTop">
    <a href="#" class="appName">军事训练管理系统</a>
    <div class="loginNameDiv">
        <img class="loginIcon" src="image/icon.png">
        <div class="loginUserInfo">
            <span>abc</span><br>
            <span>备份站</span>
        </div>
    </div>
</div>

<!--左侧菜单-->
<div class="leftMenu">
    <ul class="layui-nav layui-nav-tree"
        lay-filter="test">
    </ul>
</div>
<!--主要内容区-->
<div class="parentMain">
    <iframe id="iframeParent"></iframe>
</div>

<!--设置弹框-->
<div class="dialogMenu">
    <div id="parentChangePassword" class="dialogMenu-item">修改密码</div>
    <div id="parentExit" class="dialogMenu-item">退出</div>
</div>
</body>
</html>
<!--修改密码弹框-->
<script type="text/html" id="dialogChangePassword">
    <form class="layui-form" id="dialogChangePasswordForm" style="margin-top:30px;padding-right:30px;">
        <div class="layui-form-item">
            <label class="layui-form-label">原密码</label>
            <div class="layui-input-block">
                <input type="password" name="password"
                       placeholder="请输入原密码" class="layui-input">
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">新密码</label>
            <div class="layui-input-block">
                <input type="password" name="newPassword"
                       placeholder="请输入新密码" class="layui-input">
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">确认密码</label>
            <div class="layui-input-block">
                <input type="password" name="okPassword"
                       placeholder="请重复输入密码" class="layui-input">
            </div>
        </div>
    </form>
</script>

<script type="text/javascript" src="resources/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="resources/layui/layui.all.js"></script>
<script src="js/utils.js"></script>
<script>

    layui.use(['layer', 'form','element'], function () {
        window.layer = layui.layer;
        window.form = layui.form;
        window.element=layui.element;
        mounted();
    });

    /**
     * 类Vue路由设计，如不需要可删除
     */
    function initRouter() {
        var url = window.location.href;
        var router;
        if (url.indexOf("#/") > -1) {
            router = url.substring(url.indexOf('#/') + 2);
            if (router === '') {
                router = 'main.jsp';
            }
            $('#iframeParent').attr('src', 'page/' + router);
        } else {
            $('#iframeParent').attr('src', 'page/main.jsp');
            history.replaceState(null, null, '#/');
        }
        //地址栏修改不刷新的解决方案
        $('a').click(function () {
            if ($(this).attr('href')) {
                window.location.href = $(this).attr('href');
                window.location.reload();
            }
        });
    }

    /**
     *格式化菜单数据
     */
     function formatMenus() {
        findChildMenus(-1);
        window.element.render('nav');
    }

    /**
     * 根据id查找下级菜单
     * @param id
     */
    function findChildMenus(id) {
        if(id==-1){
            menuArray.forEach(function (item) {
                if(item.pid==id){
                    $('.leftMenu ul')
                        .append('<li menu-id="'+item.id+'" class="layui-nav-item"><a href="'+item.url+'">'+item.name+'</a></li>')
                    findChildMenus(item.id);
                }
            });

        }else{
            menuArray.forEach(function (item) {
                if(item.pid==id){
                    $('[menu-id="'+item.pid+'"]>a').removeAttr('href');
                    if(!$('[menu-id="'+item.pid+'"]').children('dl')[0]){
                        $('[menu-id="'+item.pid+'"]').append('<dl class="layui-nav-child"></dl>')
                    }
                    $('[menu-id="'+item.pid+'"] dl')
                        .append('<dd menu-id="'+item.id+'"><a href="'+item.url+'">'+item.name+'</a></dd>');
                    findChildMenus(item.id);
                }
            });
        }

    }


    function mounted() {
        //菜单列表数据
        window.menuArray = [
            {
                name: "首页",
                id: 0,
                pid: -1,
                url:'#/'
            }, {
                name: "训练计划",
                id: 1,
                pid: -1,
                url:''
            }, {
                name: "训练成绩",
                id: 2,
                pid: -1,
                url:''
            }, {
                name: "统计分析",
                id: 3,
                pid: -1,
                url:'#/table.html'
            }, {
                name: "系统设置",
                id: 4,
                pid: -1,
                url:'#/multi_image_upload.html'
            },  {
                name: "制定计划",
                id: 6,
                pid: 1,
                url:'#/plan/index.jsp'
            }, {
                name: "训练情况",
                id: 7,
                pid: 1,
                url:'#/plan/index.jsp'
            },{
                name: "军事体育",
                id: 8,
                pid: 2,
                url:''
            }, {
                name: "理论考核",
                id: 9,
                pid: 2,
                url:''
            }, 
            , {
                name: "单位情况",
                id: 10,
                pid: 3,
                url:''
            }, 
            , {
                name: "个人情况",
                id: 11,
                pid: 3,
                url:''
            }, 
        ];
        formatMenus();
        initRouter();
        //显示设置弹框
        $('.loginNameDiv').click(function () {
            if ($('.dialogMenu').css('display') === 'block') {
                $('.dialogMenu').css('display', 'none');
            } else {
                $('.dialogMenu').css('display', 'block');
            }

        });
        //退出登录
        $('#parentExit').click(function () {
            $('.dialogMenu').css('display', 'none');
            layer.open({
                type: 1,
                content: `<div style="padding: 20px;">是否退出</div>`,
                btn: ["确定退出", "暂不退出"],
                yes: function (index, layero) {
                    location.href = "login.jsp";
                },
                btn2: function (index, layero) {
                    //return false 开启该代码可禁止点击该按钮关闭
                }
            });
        });
        //显示修改密码弹框
        $('#parentChangePassword').click(function () {
            $('.dialogMenu').css('display', 'none');
            layer.open({
                type: 1,
                title: '修改密码',
                content: $('#dialogChangePassword').html(), //这里content是一个普通的String
                btn: ['确定', '取消'],
                success: function (index, layero) {
                    form.render();
                    $('#dialogChangePasswordForm').submit(function (e) {
                        console.log(formArray2Data($(this).serializeArray()));
                        return false;
                    });
                },
                yes: function (index, layero) {
                    $('#dialogChangePasswordForm').submit();
                },
                btn2: function (index, layero) {
                    //return false 开启该代码可禁止点击该按钮关闭
                }
            });
        });
    }


</script>
