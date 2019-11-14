package com.training.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.training.entity.TrainingPlan;

@Repository
public class TrainingPlanDao
{
	@Autowired
	SessionFactory sessionFactory;
	public void save(TrainingPlan trainingPlan){
	        Session session = sessionFactory.openSession();
	        session.save(trainingPlan);	        
	    }
}
