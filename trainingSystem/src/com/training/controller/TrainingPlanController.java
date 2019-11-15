package com.training.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.training.dao.TrainingPlanDao;

@RequestMapping("/trainingPlan")
@Controller
public class TrainingPlanController
{
	@Autowired
	TrainingPlanDao trainingPlanDao;		
	
	@RequestMapping("/index")
	private String toIndex() {		
		return "trainingPlan/index";
	}
		
}
