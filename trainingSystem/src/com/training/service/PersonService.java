package com.training.service;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.training.dao.PersonDao;
import com.training.entity.Person;

@Repository
public class PersonService
{
	@Autowired 
	PersonDao personDao;
	
	public List getPersonList(String type) throws ParseException {
		List<Person> persons=personDao.getPersonList(type);
		List<Map> list=new ArrayList<Map>();
		for (Person person : persons)
		{
			Map<String, String> map=new HashMap<String, String>();
			map.put("id", person.getId().toString());
			map.put("text", person.getName());
			list.add(map);
		}
		return list;
	}


	/**
	 * 添加人员
	 */
	public void addPerson(Person person){
		personDao.save(person);
	}
}
