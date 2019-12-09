package com.training.controller;

import com.training.dao.UserDao;
import com.training.entity.User;
import com.training.util.MD5Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class LoginController {

    @Autowired
    UserDao userDao;

    @RequestMapping(value = "/login.do")
    private void toLogin(@RequestParam(value = "username") String username, @RequestParam(value = "password")String password, HttpServletResponse response, HttpServletRequest request) throws ServletException, IOException {
       User user = userDao.selectUser(username);
        if (user != null) {
            if (user.getPassword().equals(MD5Utils.encrypt(password))) {
                //登陆成功，把user对象储存到httpsession
                request.getSession().setAttribute("user",user);
                //跳转到首页
               // request.getRequestDispatcher("/index.jsp").forward(request, response);
               response.sendRedirect("./index.jsp");
                return;
            } else {
                request.setAttribute("err", "您输入的用户名或密码错误</br>");
                request.getRequestDispatcher("/login.jsp").forward(request, response);
                return;
            }
        } else {
            request.setAttribute("err","您输入的用户名或密码错误</br>");
            request.getRequestDispatcher("/login.jsp").forward(request, response);
            return;
        }
    }
    @RequestMapping(value = "exitLogin.do")
    private String  exitLogin(HttpServletRequest request){

        request.getSession().removeAttribute("user");
        return "../login";
    }
}
