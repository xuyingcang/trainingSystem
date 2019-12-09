package com.training.dao;

import com.training.entity.MajorScore;
import com.training.entity.SportsScore;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
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
        return list;

    }
}
