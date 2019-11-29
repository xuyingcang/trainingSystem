<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>用户注册</title>
    <link href="css/style.css" rel="stylesheet" type="text/css"/>
    <script type='text/javascript' src='js/jquery-1.4.4.min.js'></script>
    <script type="text/javascript" src="js/valid.js"></script>
</head>
<body onkeydown="toSubmit(event)">
<div class='body_main'>
    <div class='index_box' style='margin-top:20px;'>
        <div style="position:fixed;color:red;margin:70px 0 0 450px;font-size:16px;Z-index:100;display:block;"
             id="hint"></div>
        <div class='box_title'>
            <div class='text_content'>
            </div>
        </div>
        <div class='box_main'>
            <div id="register" class="register">
                <form id="form" action="../../register.do" method="post" onsubmit=" return onSubmit()">
                    <div id="form_submit" class="form_submit">
                        <div class="fieldset">
                            <div class="field-group">
                                <label class="required title">账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：</label>
                                <span class="control-group" id="username_input">
                <div class="input_add_long_background">
                  <input class="register_input" type="text" id="username" name="username" maxlength="12" value=""
                         onblur="myblur(this)">
                </div>
                </span>
                                <label class="tips" id="username_tip">请输入您的账号</label>
                            </div>
                            <div class="field-group">
                                <label class="required title">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</label>
                                <span class="control-group" id="name_input">
                <div class="input_add_long_background">
                  <input class="register_input" type="text" id="name" name="name" maxLength="4" value=""
                  onblur="myblur(this)">
                </div>
                </span>
                                <label class="tips" id="name_tip">请输入您的姓名</label>
                            </div>

                            <div class="field-group">
                                <label class="required title">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
                                <span class="control-group" id="password_input">
                <div class="input_add_long_background">
                  <input class="register_input" type="password" id="password" name="password" maxLength="20" value="" onblur="myblur(this)"/>
                </div>
                </span>
                                <label class="tips" id="password_tip">请使用6~20个英文字母（区分大小写）、符号或数字</label>
                            </div>
                            <div class="field-group">
                                <label class="required title">确认密码：</label>
                                <span class="control-group" id="password1_input">
                <div class="input_add_long_background">
                  <input class="register_input" type="password" id="password1" name="password1" maxLength="20"
                         value="" onblur="myblur(this)"/>
                </div>
                </span>
                                <label class="tips" id="password1_tip">请保证两次密码输入一致</label>
                            </div>
                            <div class="field-group">
                                <label class="required title">用户类型：</label>
                                <span class="control-group" style="line-height:28px;">
                <input id="Administrator" type="radio" checked value="管理员" name="usertype">
                管理员
                <input id="operator" type="radio" value="操作员" name="usertype">
                操作员 </span>
                                <label class="tips" style="margin-bottom:5px;" id="tooltext1">请选择用户类型</label>
                            </div>
                            </span>
                        </div>
                    </div>
                    <div id="div_submit" class="div_submit">
                        <div class='div_submit_button'>
                            <input id="submit" type="submit" value="注册" class='button_button disabled'>
                        </div>
                    </div>
                </form>
            </div>

        </div>
        <div class='box_bottom'></div>
    </div>
</div>
</body>
</html>
