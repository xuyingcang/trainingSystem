package com.spring.hello.dao;

import java.sql.Date;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.spring.hello.module.News;

@Repository//自动扫描
public class TestDao 
{
	@Autowired//注解
	 private static HibernateTemplate ht;
	
	public void select() {
	        News news =ht.get(News.class, 1);
	        System.out.println(news.getTitle());

	    }
	
}
