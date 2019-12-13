package com.training.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.sql.Date;
import java.sql.Timestamp;
import java.text.ParseException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.training.dao.PersonDao;
import com.training.dao.TrainingPlanDao;
import com.training.entity.TrainingPlan;
import com.training.util.CalendarUtil;


@Controller
public class TrainingPlanController
{
	@Autowired
	TrainingPlanDao trainingPlanDao;
	
	public static final int SUCCESS=200;
	public static final int FAIL=400;
	
	
	/**
	 * 保存穿入的训练计划表格
	 * @param list
	 * @param response
	 */
	@RequestMapping(value="/savePlanList.do")	
	private void savePlanList(@RequestBody List<TrainingPlan> list,HttpServletResponse response) {
		PrintWriter writer=null;
		try
		{
			writer=response.getWriter();
			for (TrainingPlan trainingPlan : list)
			{
				trainingPlanDao.save(trainingPlan);
			} 
			writer.print(SUCCESS);
			writer.flush();
			writer.close();
		} catch (Exception e)
		{
			writer.print(FAIL);
			e.printStackTrace();
		}
	}
	
	@RequestMapping(value="/getPlanList.do",produces={"application/json; charset=UTF-8"})	
	@ResponseBody
	private List getPlanByWeek(@RequestParam(value = "startTime")String startTime,@RequestParam(value = "endTime")String endTime) throws ParseException {
		List<TrainingPlan> list=null;
		list=(ArrayList<TrainingPlan>) trainingPlanDao.getPlanList(startTime,endTime);
		return list;
		
	}
	
	@RequestMapping(value="/getUnfinishedPlans.do",produces={"application/json; charset=UTF-8"})	
	@ResponseBody
	private List getUnfinishedPlans() throws ParseException {
		List<TrainingPlan> list=null;
		java.util.Date now=new Date(System.currentTimeMillis());
		java.util.Date start=CalendarUtil.getStartTimeAtWeek(now);
		java.util.Date end=CalendarUtil.getEndTimeAtWeek(now);
		list=trainingPlanDao.getUnfinishedPlanList(new Timestamp(start.getTime()),new Timestamp(end.getTime()));
		return list;
		
	}
	
	@RequestMapping(value="/updatePlan.do")	
	private void updatePlan(TrainingPlan plan,HttpServletResponse response) {
		PrintWriter writer=null;
		try
		{
			writer=response.getWriter();
			trainingPlanDao.update(plan);
			writer.print(SUCCESS);
			writer.flush();
			writer.close();
		} catch (Exception e)
		{
			writer.print(FAIL);
			e.printStackTrace();
		}
	}
	
}
