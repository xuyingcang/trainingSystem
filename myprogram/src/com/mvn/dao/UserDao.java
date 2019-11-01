package com.mvn.dao;

import javax.annotation.Resource;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import com.mvn.entity.User;

@Repository
public class UserDao {

    @Resource
    SessionFactory sessionFactory;
    
    public void save(User user){
        Session session = sessionFactory.openSession();
        session.save(user);
        
    }
}
