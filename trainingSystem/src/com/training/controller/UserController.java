package com.training.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.training.dao.UserDao;
import com.training.entity.User;

@Controller
public class UserController
{
	@Autowired
	UserDao userDao;	
	
	@RequestMapping("/")
	public String index() {
		return "index";
	}
	
	@RequestMapping("/register")
	public String register() {
		return "register";
	}
	
	@RequestMapping("/login")
	public String login(HttpServletRequest request ,HttpServletResponse response,
			@RequestParam(value="username") String username,@RequestParam(value="password") String password) {
		return "index";
	}
	
	@RequestMapping("/saveuser")
	public String saveUser( User user) {
		System.out.println(user);
		userDao.save(user);
		return "success";
	}    
}
