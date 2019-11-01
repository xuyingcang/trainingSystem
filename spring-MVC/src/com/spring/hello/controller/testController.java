package com.spring.hello.controller;

import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/mvc")
public class testController
{

	@RequestMapping("/hello")
	public String hello()
	{
		System.out.println("hello response");
		return "helloworld";
	}

	@RequestMapping("/test")
	public String test()
	{
		System.out.println("test response");
		return "test";
				
	}
}
