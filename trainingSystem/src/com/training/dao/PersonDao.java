package com.training.dao;

import java.sql.Date;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.support.DaoSupport;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.orm.hibernate5.support.HibernateDaoSupport;
import org.springframework.stereotype.Repository;

import com.training.entity.Person;
import com.training.entity.TrainingPlan;

import javassist.expr.NewArray;

@Repository
public class PersonDao
{
	@Autowired
	SessionFactory sessionFactory;
	
	/**
	 * 根据训练人员类别获取人员列表
	 * @param type
	 * @return
	 * @throws ParseException
	 */
	public List getPersonList(String type) throws ParseException
	{
		String hql = "from Person order by name asc";
		Session session = sessionFactory.openSession();
		Query query = session.createQuery(hql);
		List<Person> list = query.list();
		session.close();
		return list;
	}

}
