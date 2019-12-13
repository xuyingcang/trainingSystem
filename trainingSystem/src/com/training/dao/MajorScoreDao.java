package com.training.dao;

import com.training.entity.MajorScore;
import com.training.entity.SportsScore;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MajorScoreDao {

    @Autowired
    SessionFactory sessionFactory;

    /**
     * 添加训练成绩
     * @param majorScore
     */
    public void addMajorScore(MajorScore majorScore) {
        Session session = sessionFactory.openSession();
        session.save(majorScore);
        session.close();
    }

    public List<MajorScore> getMajorScore(){
        Session session = sessionFactory.openSession();
        String hql = "from MajorScore";
        Query query = session.createQuery(hql);
        List list = query.list();
        session.close();
        return list;

    }

    public MajorScore getMajorScoreToId(Integer id) {
        Session session = sessionFactory.openSession();
        MajorScore majorScore = session.get(MajorScore.class, id);
        session.close();
        return majorScore;
    }

    public void deleteMajorScore(MajorScore majorScore) {

        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction();
        session.delete(majorScore);
        tx.commit();
        session.close();
    }

    public void updateMajorScore(MajorScore majorScore) {
        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction();
        session.update(majorScore);
        tx.commit();
        session.close();
    }
    
    public List<MajorScore> getPersonMajorScore(Integer id){
	        Session session = sessionFactory.openSession();
	        String hql = "from MajorScore where person.id=:id order by examPlan.time asc";
	        Query query = session.createQuery(hql);
		query.setParameter("id", id);
	        List list = query.list();
	        session.close();
	        return list;
    }
    
    /**
     * 获取某次考试所有人的专业考核成绩
     * @param id
     * @return
     */
    public List<MajorScore> getMajorScoreByExam(Integer id){
	        Session session = sessionFactory.openSession();
	        String hql = "from MajorScore where examPlan.id=:id order by person.id asc";
	        Query query = session.createQuery(hql);
	        query.setParameter("id", id);
	        List list = query.list();
	        session.close();
	        return list;
    }
}
