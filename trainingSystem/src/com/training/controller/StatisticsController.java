package com.training.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.training.dao.StatisticsDao;

@Controller
public class StatisticsController
{
	
	@Autowired
	StatisticsDao statisticsDao;
	
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
}
