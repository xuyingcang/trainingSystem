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

import com.training.entity.TrainingPlan;

import javassist.expr.NewArray;

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
	        session.close();
	}
	
	
	public List getPlanList(String startTime,String endTime) throws ParseException
	{
		Timestamp start,end;
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		if(startTime==null||"".equals(startTime)) {
			start=new Timestamp(System.currentTimeMillis());
		}else {
			start=new Timestamp(sdf.parse(startTime).getTime());
		}
		if(endTime==null||"".equals(endTime)) {
			end=new Timestamp(System.currentTimeMillis());
		}else {
			end=new Timestamp(sdf.parse(endTime).getTime());
		}
		String hql="from TrainingPlan where  startTime >= :start and startTime <= :end  ";
		Session session = sessionFactory.openSession();
		Query query = session.createQuery(hql);
		query.setParameter("start",start );
		query.setParameter("end",end);
	        List<TrainingPlan> list = query.list();
	        session.close();
		return list;
	}
	
}
