package com.training.dao;

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

import com.training.entity.TrainingPlan;

@Repository
public class TrainingPlanDao
{
	@Autowired
	SessionFactory sessionFactory;
	
		
	/**
	 * 保存计划
	 * 
	 * @param trainingPlan
	 */
	public void save(TrainingPlan trainingPlan)
	{
		Session session = sessionFactory.openSession();
	        session.saveOrUpdate(trainingPlan);
	}
	
	
	public List getPlanList(String startTime,String endTime)
	{
		String hql="from TrainingPlan";
		Session session = sessionFactory.openSession();
		Query query = session.createQuery(hql);
	        List<TrainingPlan> list = query.list();
		return list;
	}
	
}
