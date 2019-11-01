package com.spring.hello.controller;


import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.spring.hello.dao.TestDao;

public class HibernateTemplatetest 
{
	public static void main(String[] args)
	{
		ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");
	        TestDao dao=(TestDao) context.getBean("TestDao");
	        dao.select();
	}
}
