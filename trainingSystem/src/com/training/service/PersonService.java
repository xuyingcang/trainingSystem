package com.training.service;

import java.text.ParseException;
import java.util.*;

import com.training.util.GetAge;
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

	public List getPersonListAll(String type) throws Exception {
		List<Person> persons = personDao.getPersonList(type);
		List<Map> list = new ArrayList<Map>();
		for (Person person : persons) {
			Map<String, String> map = new HashMap<String, String>();
			map.put("id", person.getId().toString());
			map.put("text", person.getName());
			map.put("height", person.getHeight());
			map.put("weight", person.getWeight());
			map.put("sex", person.getSex());
			map.put("age", ""+ GetAge.getAge(person.getBirthday()));
			list.add(map);
		}
		return list;
	}




}
