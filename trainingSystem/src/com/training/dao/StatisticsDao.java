package com.training.dao;

import java.sql.Timestamp;
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

	/**
	 * 计算时间段内单位的训练时间
	 * @param start
	 * @param end
	 * @return
	 */
	public float getHoursByMonth(Timestamp start,Timestamp end) {
		String hql = "from TrainingPlan where  startTime >= :start and startTime <= :end  order by startTime asc";
		Session session = sessionFactory.openSession();
		Query query = session.createQuery(hql);
		query.setParameter("start", start);
		query.setParameter("end", end);
		List<TrainingPlan> list = query.list();
		session.close();
		float hours=0;
		for (TrainingPlan trainingPlan : list)
		{
			if(trainingPlan.getCompletion()!=null) {
				hours=hours+trainingPlan.getClassHour();
			}
		}
		return hours;
	}
	
	/**
	 * 获取个人单位时间内的训练时长
	 * @param id
	 * @param start
	 * @param end
	 * @return
	 */
	public float getHoursByWeek(Integer id,Timestamp start,Timestamp end) {
		String hql = "from TrainingPlan where  startTime >= :start and startTime <= :end  order by startTime asc";
		Session session = sessionFactory.openSession();
		Query query = session.createQuery(hql);
		query.setParameter("start", start);
		query.setParameter("end", end);
		List<TrainingPlan> list = query.list();
		session.close();
		float hours=0;
		for (TrainingPlan trainingPlan : list)
		{
			if(trainingPlan.getCompletion()!=null&&trainingPlan.getPersons()!=null) {
				String personStr=trainingPlan.getPersons();
				String[] persons=personStr.split(",");
				for (String person : persons)
				{
					if(person.equals(id.toString())) {
						hours=hours+trainingPlan.getClassHour();
					}
				}
			}
		}
		return hours;
	}
	
}
