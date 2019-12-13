package com.training.dao;

import com.training.entity.Person;
import com.training.entity.SportsScore;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SportsScoreDao {

    @Autowired
    SessionFactory sessionFactory;

    /**
     * 添加训练成绩
     * @param sportsScore
     */
    public void addSportsScore(SportsScore sportsScore) {
        Session session = sessionFactory.openSession();
        session.save(sportsScore);
        session.close();
    }

    public List<SportsScore> getSportsScore(){
        Session session = sessionFactory.openSession();
        String hql = "from SportsScore";
        Query query = session.createQuery(hql);
        List list = query.list();
        session.close();
        return list;
    }
    
    /**
     * 获取某次考试所有人的体育成绩
     * @param id
     * @return
     */
    public List<SportsScore> getSportsScoreByExam(Integer id){
	        Session session = sessionFactory.openSession();
	        String hql = "from SportsScore where examPlan.id=:id order by person.id asc";
	        Query query = session.createQuery(hql);
	        query.setParameter("id", id);
	        List list = query.list();
	        session.close();
	        return list;
    }

    public SportsScore getSportsScoreListToId(Integer id) {

            Session session = sessionFactory.openSession();
            SportsScore sportsScore = session.get(SportsScore.class, id);
            session.close();
            return sportsScore;

    }

    public void deleteSportsScore(SportsScore sportsScore) {
        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction();
        session.delete(sportsScore);
        tx.commit();
        session.close();
    }

    public void updateSportsScore(SportsScore sportsScore) {

        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction();
        session.update(sportsScore);
        tx.commit();
        session.close();
    }
}
