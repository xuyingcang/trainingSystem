package com.training.dao;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;


import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.training.entity.TrainingPlan;


@Repository
@Transactional
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

	/**
	 * 更新训练计划的执行结果
	 * 
	 * @param trainingPlan
	 */
	public void update(TrainingPlan trainingPlan)
	{
		String hql = "update TrainingPlan t set t.persons=:persons,t.completion=:completion,t.remarks=:remarks where t.id=:id";
		Session session = sessionFactory.openSession();
		Query query = session.createQuery(hql);
		query.setParameter("persons", trainingPlan.getPersons());
		query.setParameter("completion", trainingPlan.getCompletion());
		query.setParameter("remarks", trainingPlan.getRemarks());
		query.setParameter("id", trainingPlan.getId());
		query.executeUpdate();
		session.close();
	}
	
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

}
