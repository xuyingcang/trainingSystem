package com.training.util;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class CalendarUtil
{

	public static void main(String[] args)
	{
		System.out.println(getStartTimeAtWeek(new Date(System.currentTimeMillis())));
		System.out.println(getEndTimeAtWeek(new Date(System.currentTimeMillis())));
	}
	
	/**
	 * 获取日期所在周的第一天（Monday）的时间
	 * @param date
	 * @return
	 */
	public static Date getStartTimeAtWeek(Date date) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.set(Calendar.DAY_OF_WEEK, 2);
		calendar.set(Calendar.HOUR_OF_DAY, 0);
		calendar.set(Calendar.MINUTE, 0);
		calendar.set(Calendar.SECOND, 0);
		calendar.set(Calendar.MILLISECOND, 0);
		Date startDate = calendar.getTime();
		return startDate;
	}
	
	/**
	 * 获取日期所在周的最后一天（Sunday）的时间
	 * @param date
	 * @return
	 */
	public static Date getEndTimeAtWeek(Date date) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.set(Calendar.DAY_OF_WEEK, 1);
		calendar.add(Calendar.DAY_OF_YEAR, 7);
		calendar.set(Calendar.HOUR_OF_DAY, 23);
		calendar.set(Calendar.MINUTE, 59);
		calendar.set(Calendar.SECOND, 59);
		calendar.set(Calendar.MILLISECOND, 999);
		Date endDate = calendar.getTime();
		return endDate;
	}
	
	/**
	 * 获取日期所在月的开始第一天的时间
	 * 
	 * @param date
	 * @return
	 */
	public static Date getStartDayAtMonth(Date date)
	{
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.set(Calendar.DAY_OF_MONTH, 1);
		calendar.set(Calendar.HOUR_OF_DAY, 0);
		calendar.set(Calendar.MINUTE, 0);
		calendar.set(Calendar.SECOND, 0);
		calendar.set(Calendar.MILLISECOND, 0);
		Date firstDate = calendar.getTime();
		return firstDate;
	}
	
	/**
	 * 获取日期所在月的开始第一天的时间
	 * 
	 * @param date
	 * @return
	 */
	public static Date getEndDayAtMonth(Date date)
	{
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.set(Calendar.DAY_OF_MONTH, calendar.getActualMaximum(Calendar.DAY_OF_MONTH));
		calendar.set(Calendar.HOUR_OF_DAY, 23);
		calendar.set(Calendar.MINUTE, 59);
		calendar.set(Calendar.SECOND, 59);
		calendar.set(Calendar.MILLISECOND, 999);
		Date firstDate = calendar.getTime();

		return firstDate;
	}

}
