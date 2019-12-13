package com.training.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.training.dao.MajorScoreDao;
import com.training.dao.StatisticsDao;
import com.training.entity.MajorScore;
import com.training.service.StatisticsService;

@Controller
public class StatisticsController
{
	
	@Autowired
	StatisticsDao statisticsDao;
	@Autowired
	StatisticsService statisticsService;
	@Autowired
	MajorScoreDao majorScoreDao;
	
	public static final int SUCCESS=200;
	public static final int FAIL=400;
	
	/**
	 * 获取个人的参训率
	 * @param id
	 * @param response
	 */
	@RequestMapping("/getPersonalAttendance.do")
	private void getAttendanceByPid(@RequestParam(value = "id")String id,HttpServletResponse response) {
		PrintWriter writer=null;
		try
		{
			writer=response.getWriter();
			Double attendance=statisticsDao.getAttendanceByPid(Integer.parseInt(id));
			writer.print(attendance);
			writer.flush();
			writer.close();
		} catch (IOException e)
		{
			writer.print(FAIL);
			e.printStackTrace();
		}
		
	}
	
	/**
	 * 获取单位前12个月的训练时长
	 */
	@RequestMapping(value="/getHoursLast12Month.do",produces={"application/json; charset=UTF-8"})
	@ResponseBody
	private Map getHoursLast12() {
		try
		{
			Map<String,List> map=statisticsService.getHoursEveryMonth(new Date(System.currentTimeMillis()));
			return map;
		} catch (Exception e)
		{
			e.printStackTrace();
			return null;
		}
		
	}
	
	/**
	 * 获取单位的历史考核成绩合格率
	 */
	@RequestMapping(value="/getTeamQualifiedRate.do",produces={"application/json; charset=UTF-8"})
	@ResponseBody
	private Map getTeamQualifiedRate() {
		try
		{
			Map<String,List> map=statisticsService.getTeamQualifiedRate();
			return map;
		} catch (Exception e)
		{
			e.printStackTrace();
			return null;
		}
		
	}
	
	/**
	 * 获取个人之前数周的训练时长数据
	 * @param id
	 * @param response
	 */
	@RequestMapping(value="/getHoursLastWeeks.do",produces={"application/json; charset=UTF-8"})
	@ResponseBody
	private Map getHoursLastWeeks(@RequestParam(value = "id")Integer id) {
		try
		{
			Map<String,List> map=statisticsService.getHoursEveryWeek(id,new Date(System.currentTimeMillis()));
			return map;
		} catch (Exception e)
		{
			e.printStackTrace();
			return null;
		}
	}
	
	/**
	 * 获取个人的历史专业考核成绩（理论+实操）
	 * @param id
	 * @param response
	 */
	@RequestMapping(value="/getMajorScoresByPid.do",produces={"application/json; charset=UTF-8"})
	@ResponseBody
	private List getMajorScoresByPid(@RequestParam(value = "id")Integer id) {
		try
		{
			List<MajorScore> list=majorScoreDao.getPersonMajorScore(id);
			return list;
		} catch (Exception e)
		{
			e.printStackTrace();
			return null;
		}
	}
}
