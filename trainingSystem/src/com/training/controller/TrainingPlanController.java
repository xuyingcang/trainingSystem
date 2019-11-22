package com.training.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.training.dao.TrainingPlanDao;
import com.training.entity.TrainingPlan;

@RequestMapping("/trainingPlan")
@Controller
public class TrainingPlanController
{
	@Autowired
	TrainingPlanDao trainingPlanDao;		
	
	public static final String SUCCESS="success";
	public static final String FAIL="fail";
	
	@RequestMapping("/index.do")
	private String toIndex() {		
		return "trainingPlan/index";
	}
	
	/**
	 * 保存穿入的训练计划表格
	 * @param list
	 * @param response
	 */
	@RequestMapping(value="/savePlanList.do")	
	private void savePlanList(@RequestBody List<TrainingPlan> list,HttpServletResponse response) {
		try
		{
			PrintWriter writer=response.getWriter();
			for (TrainingPlan trainingPlan : list)
			{
				trainingPlanDao.save(trainingPlan);
			} 
			writer.print("good");
			writer.flush();
		} catch (IOException e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	@RequestMapping(value="/getPlanList.do",produces={"application/json; charset=UTF-8"})	
	@ResponseBody
	private List getPlanByWeek() {
		List<TrainingPlan> list=null;
		list=(ArrayList<TrainingPlan>) trainingPlanDao.getPlanList("","");
		return list;
		
	}
}
