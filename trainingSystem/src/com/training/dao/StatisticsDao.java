package com.training.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.training.entity.TrainingPlan;


@Repository
public class StatisticsDao 
{
	@Autowired
	SessionFactory sessionFactory;
	
	@Autowired
	HibernateTemplate ht;
	
	@Autowired
	JdbcTemplate jt;
	
	/**
	 * 获取个人的训练出勤率
	 * @param pId :人员id
	 * @return
	 */
	public double getAttendanceByPid(Integer pId) {
		double attendance=1;
		float sum=0,attend=0;
		String hql = "from TrainingPlan order by startTime asc";
		Session session = sessionFactory.openSession();
		Query query = session.createQuery(hql);
		List<TrainingPlan> list = query.list();
		session.close();
		sum=list.size();
		for (TrainingPlan trainingPlan : list)
		{
			String persons=trainingPlan.getPersons();
			if(persons!=null) {
				sum++;
				if(persons.contains(pId.toString())) {
					attend++;
				}
			}
		}
		if(sum!=0) {
			attendance=attend/sum;
			return attendance;
		}else {
			return 0;
		}
	}

}
