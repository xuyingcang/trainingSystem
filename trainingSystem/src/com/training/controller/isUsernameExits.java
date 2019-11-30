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

/**
 * 异步验证用户名是否存在的Controller
 */

@Controller
public class isUsernameExits {

    @Autowired
    UserDao userDao;

    @RequestMapping(value = "/isusernameexits.do")
    public void toUsernameExits(HttpServletRequest request, HttpServletResponse response) throws IOException {

        User user = userDao.selectUser(request.getParameter("username"));
        if (user != null) {
            response.getWriter().write("no");
        }

    }



}
