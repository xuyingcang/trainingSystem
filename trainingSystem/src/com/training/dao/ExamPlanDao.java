package com.training.dao;


import com.training.entity.ExamPlan;
import com.training.entity.Person;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class ExamPlanDao {

    @Autowired
    SessionFactory sessionFactory;

    /**
     * 添加考试计划
     * @param examPlan
     */

    public void addExamPlan(ExamPlan examPlan) {
        Session session = sessionFactory.openSession();
        session.save(examPlan);
        session.close();
    }

    public List getExamPlan(){
        String hql = "from ExamPlan order by id asc";
        Session session = sessionFactory.openSession();
        Query query = session.createQuery(hql);
        List<ExamPlan> list = query.list();
        session.close();
        return list;
    }

    public void updateExamPlan(ExamPlan examPlan) {
        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction();
        session.update(examPlan);
        tx.commit();
        session.close();
    }

    public ExamPlan getExamPlanListToId(Integer id) {
        Session session = sessionFactory.openSession();
        ExamPlan examPlan = session.get(ExamPlan.class, id);
        session.close();
        return examPlan;
    }

    public void deleteExamPlan(ExamPlan examPlan) {
        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction();
        session.delete(examPlan);
        tx.commit();
        session.close();
    }
}
