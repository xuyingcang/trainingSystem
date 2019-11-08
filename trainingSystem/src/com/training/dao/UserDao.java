package com.training.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.training.entity.User;

@Repository
public class UserDao
{
	@Autowired
	SessionFactory sessionFactory;
	public void save(User user){
	        Session session = sessionFactory.openSession();
	        session.save(user);	        
	    }
}
