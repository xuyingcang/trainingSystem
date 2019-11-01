package com.spring.hello.controller;


import java.sql.Date;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.model.naming.ImplicitNamingStrategyComponentPathImpl;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;

import com.spring.hello.module.News;

class HibernateTest
{
	public static void test(String[] args)
	{
		StandardServiceRegistry standardRegistry = new StandardServiceRegistryBuilder().configure().build();
		
		Metadata metadata = new MetadataSources(standardRegistry).getMetadataBuilder()
				.applyImplicitNamingStrategy(ImplicitNamingStrategyComponentPathImpl.INSTANCE).build();
		
		//最后由这个metadata使用构建出sessionFactory
		SessionFactory sessionFactory = metadata.getSessionFactoryBuilder().build();
		//2.创建一个Session对象
		Session session=sessionFactory.openSession();
		//3.开启事务
		Transaction transaction=session.beginTransaction();
		//4.执行保存操作
		News news=new News("ss", "cc", new Date(new java.util.Date().getTime()));
		System.out.println(news.toString());
		session.save(news);
		//5.提交事务
		transaction.commit();
		//6.关闭Session
		session.close();
		//7.关闭SessionFactory对象
		sessionFactory.close();		
	}
	
	public static void main(String[] args)
	{
		//1.读取hibernate.cfg.xml文件
		Configuration cfg = new Configuration();
		cfg.configure(); 
		
		//2.创建SessionFactory工厂
		SessionFactory factory = cfg.buildSessionFactory();
		
		//3.创建Session对象
		Session session = factory.openSession();
		
		//4.开启事务
		Transaction tx = session.beginTransaction();
		
		//5.执行添加操作
		News news=new News("java", "eclipse", new Date(new java.util.Date().getTime()));
		System.out.println(news.toString());
		session.save(news);
		//6.提交事务
		tx.commit();
		//7.关闭资源
		session.close();
		factory.close();
	}
	
	

}
