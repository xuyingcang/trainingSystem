package com.training.dao;

import java.text.ParseException;
import java.util.List;

import net.bytebuddy.implementation.bytecode.assign.primitive.PrimitiveUnboxingDelegate;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.training.entity.Person;

@Repository
public class PersonDao
{
	@Autowired
	SessionFactory sessionFactory;
	
	/**
	 * 根据训练人员类别获取人员列表
	 * @param type
	 * @return
	 * @throws ParseException
	 */
	public List getPersonList(String type) throws ParseException
	{
		String hql = "from Person order by name asc";
		Session session = sessionFactory.openSession();
		Query query = session.createQuery(hql);
		List<Person> list = query.list();
		session.close();
		return list;
	}

	public List getPersonListAll() throws ParseException {
		String hql = "from Person ";
		Session session = sessionFactory.openSession();
		Query query = session.createQuery(hql);
		List<Person> list = query.list();
		session.close();
		return list;
	}

	public Person getPersonListToId(Integer id) {
		Session session = sessionFactory.openSession();
		Person person = session.get(Person.class, id);
		session.close();
		return person;

	}



	/**
	 * 保存人员
	 */
	public void save(Person person) {
        Session session = sessionFactory.openSession();
        session.saveOrUpdate(person);
        session.close();
    }


	public void deletePerson(Person person) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		session.delete(person);
		tx.commit();
		session.close();
	}

	public void updatePerson(Person person) {
		Session session = sessionFactory.openSession();
		Transaction tx = session.beginTransaction();
		session.update(person);
		tx.commit();
		session.close();
	}
}
