package com.training.dao;

import com.training.entity.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository
public class UserDao {
    @Autowired
    SessionFactory sessionFactory;

    /**
     * 查询用户
     */
    public User selectUser(String username) {
        Session session = sessionFactory.openSession();
        //创建query对象
        //根据用户名和密码查询
        String hql = "from User where username = :username ";
        Query query = session.createQuery(hql);
        //设置参数
        query.setParameter("username", username);
        //得到结果
        User user = new User();
        user = (User) query.uniqueResult();
        session.close();
        return user;

    }
    /**
     * 保存用户
     */
    public void save(User user){
        Session session = sessionFactory.openSession();
        session.save(user);
        session.close();
    }
}
