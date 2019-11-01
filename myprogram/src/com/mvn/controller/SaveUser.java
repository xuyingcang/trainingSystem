package com.mvn.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mvn.entity.User;
import com.mvn.service.UserService;

@Controller
public class SaveUser {

    @Resource
    UserService userService;
    
    @RequestMapping(value="/saveUser")
    public String saveUser(User user){
        userService.save(user);
        
        return "saveSucess";
    }
}