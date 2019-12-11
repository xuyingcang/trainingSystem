package com.training.service;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.training.dao.StatisticsDao;
import com.training.util.CalendarUtil;

@Repository
public class StatisticsService
{
	@Autowired 
	StatisticsDao statisticsDao;
	
	/**
	 * 获取当前日期之前12个月每月的训练时长数据
	 * @param date
	 * @return
	 */
	public Map getHoursEveryMonth(Date now) {
		Calendar calendar=Calendar.getInstance();
		calendar.setTime(now);
		int year=calendar.get(Calendar.YEAR)-1;
		int month=calendar.get(Calendar.MONTH);//从当前月的上一个月开始
		List<String> monthList=new ArrayList<String>();
		List<Float> hoursList=new ArrayList<Float>();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy.MM");
		for(int i=0;i<12;i++,month++) {
			if(month==12) {
				month=0;
				year=year+1;
			}
			calendar.set(year, month, 1);
			Date date=calendar.getTime();
			Date start=CalendarUtil.getStartDayAtMonth(date);
			Date end=CalendarUtil.getEndDayAtMonth(date);
			Float hours=statisticsDao.getHoursByMonth(
					new Timestamp(start.getTime()), new Timestamp(end.getTime()));
			monthList.add(sdf.format(date));
			hoursList.add(hours);
		}
		Map<String,List> map=new HashMap<String, List>();
		map.put("month", monthList);
		map.put("hours", hoursList);
		return map;
	}
	
	/**
	 * 获取个人过去数周的训练时长
	 * @param id
	 * @param now
	 * @return
	 */
	public Map getHoursEveryWeek(Integer id,Date now) {
		Calendar calendar=Calendar.getInstance();
		calendar.setTime(now);
		List<String> weekList=new ArrayList<String>();
		List<Float> hoursList=new ArrayList<Float>();
		SimpleDateFormat sdf = new SimpleDateFormat("MM.dd");
		calendar.add(Calendar.DAY_OF_YEAR, -7*9);//开始时间设置为9周前
		for(int i=0;i<8;i++) {
			calendar.add(Calendar.DAY_OF_YEAR, 7);//每次循环加7天
			Date date=calendar.getTime();
			Date start=CalendarUtil.getStartTimeAtWeek(date);
			Date end=CalendarUtil.getEndTimeAtWeek(date);
			Float hours=statisticsDao.getHoursByWeek(id, 
					new Timestamp(start.getTime()), new Timestamp(end.getTime()));
			weekList.add(sdf.format(start)+"-"+sdf.format(end));
			hoursList.add(hours);
		}
		Map<String,List> map=new HashMap<String, List>();
		map.put("week", weekList);
		map.put("hours", hoursList);
		return map;
	}
}
