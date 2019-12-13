package com.training.dao;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;


import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.training.entity.TrainingPlan;


@Repository
public class TrainingPlanDao 
{
	@Autowired
	SessionFactory sessionFactory;
	
	@Autowired
	HibernateTemplate hibernateTemplate;
	
	@Autowired
	JdbcTemplate jt;
	/**
	 * 保存计划
	 * 
	 * @param trainingPlan
	 */
	public void save(TrainingPlan trainingPlan)
	{

		Session session = sessionFactory.openSession();
		session.save(trainingPlan);
		session.close();
	}

	/**
	 * 更新训练计划的执行结果
	 * 
	 * @param trainingPlan
	 */
	public void update(TrainingPlan trainingPlan)
	{
		String sql="update training_plan t set t.completion='"+trainingPlan.getCompletion()+"',t.persons='"+trainingPlan.getPersons()+"',t.remarks='"+trainingPlan.getRemarks()+"' where t.id="+trainingPlan.getId();
		jt.execute(sql);
	}
	
	/**
	 * 获取时间段内的训练计划
	 * @param startTime
	 * @param endTime
	 * @return
	 * @throws ParseException
	 */
	public List getPlanList(String startTime, String endTime) throws ParseException
	{
		Timestamp start, end;
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		if (startTime == null || "".equals(startTime))
		{
			start = new Timestamp(System.currentTimeMillis());
		} else
		{
			start = new Timestamp(sdf.parse(startTime).getTime());
		}
		if (endTime == null || "".equals(endTime))
		{
			end = new Timestamp(System.currentTimeMillis());
		} else
		{
			end = new Timestamp(sdf.parse(endTime).getTime());
		}
		String hql = "from TrainingPlan where  startTime >= :start and startTime <= :end  order by startTime asc";
		Session session = sessionFactory.openSession();
		Query query = session.createQuery(hql);
		query.setParameter("start", start);
		query.setParameter("end", end);
		List<TrainingPlan> list = query.list();
		session.close();
		return list;
	}

	/**
	 * 获取时间段内未完成的训练计划
	 * @param startTime
	 * @param endTime
	 * @return
	 * @throws ParseException
	 */
	public List getUnfinishedPlanList(Timestamp startTime, Timestamp endTime) throws ParseException
	{
		String hql = "from TrainingPlan where  startTime >= :start and startTime <= :end and completion is null  order by startTime asc";
		Session session = sessionFactory.openSession();
		Query query = session.createQuery(hql);
		query.setParameter("start", startTime);
		query.setParameter("end", endTime);
		List<TrainingPlan> list = query.list();
		session.close();
		return list;
	}
}
