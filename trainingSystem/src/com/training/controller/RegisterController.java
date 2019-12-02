package com.training.controller;

import com.training.dao.UserDao;
import com.training.entity.User;
import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

@Controller
public class RegisterController {

    @Autowired
    UserDao userDao;

    @RequestMapping(value = "/register.do")
    public void toRegister(HttpServletRequest request, HttpServletResponse response) throws Exception {

        Map<String, String[]> parameterMap = request.getParameterMap();
        //创建user对象
        User user = new User();
        //设置编码
        response.setContentType("text/html;charset=UTF-8");
        //封装数据
        BeanUtils.populate(user, parameterMap);
        //调用dao保存数据
        userDao.save(user);
        response.getWriter().write("注册成功，三秒后跳转到登录页面...");
        response.setHeader("reFresh", "3;URL=./login.jsp");
    }

    @RequestMapping(value = "/vaild.do")
    public void vaildUsername(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String username = request.getParameter("username");
        User user = userDao.selectUser(username);
        if (user != null) {
            response.getWriter().write("no");
        }
    }

}
