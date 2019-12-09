package com.training.dao;

import com.training.entity.SportsScore;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
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
}
