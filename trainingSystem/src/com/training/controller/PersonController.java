package com.training.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.sql.Date;
import java.text.ParseException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.training.dao.PersonDao;
import com.training.dao.TrainingPlanDao;
import com.training.entity.Person;
import com.training.entity.TrainingPlan;
import com.training.service.PersonService;


@Controller
public class PersonController
{
	@Autowired
	PersonService personService;
	
	public static final int SUCCESS=200;
	public static final int FAIL=400;
	
	
	
	@RequestMapping(value="/getPersonList.do",produces={"application/json; charset=UTF-8"})	
	@ResponseBody
	private List getPersonlist() throws ParseException {
		List<Person> list=null;
		list= personService.getPersonList("test");
		return list;
		
	}
	
}
