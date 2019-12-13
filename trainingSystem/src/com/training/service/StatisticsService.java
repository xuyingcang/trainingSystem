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

import com.training.dao.ExamPlanDao;
import com.training.dao.MajorScoreDao;
import com.training.dao.SportsScoreDao;
import com.training.dao.StatisticsDao;
import com.training.entity.ExamPlan;
import com.training.entity.MajorScore;
import com.training.entity.SportsScore;
import com.training.util.CalendarUtil;

@Repository
public class StatisticsService
{
	@Autowired 
	StatisticsDao statisticsDao;
	@Autowired 
	MajorScoreDao majorScoreDao;
	@Autowired 
	SportsScoreDao sportsScoreDao;
	@Autowired 
	ExamPlanDao examPlanDao;
	
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
	
	/**
	 * 获取单位历次考核的成绩（包括专业和体能）
	 * @return
	 */
	public Map getTeamQualifiedRate() {
		List<ExamPlan> examPlanList=examPlanDao.getExamPlan();//获取所有考试计划
		List<String> timeList=new ArrayList<String>();//考试计划的时间序列
		List<Double> majorScoreRateList=new ArrayList<Double>();//获取的单次考核所有人的专业成绩列表
		List<Double> sportsScoreRateList=new ArrayList<Double>();//获取的单次考核所有人的体能成绩列表
		
		for (ExamPlan examPlan : examPlanList)
		{
			Double majorScoreRate=0.0;
			Double sportsScoreRate=0.0;
			List<MajorScore> majorScoreList=majorScoreDao.getMajorScoreByExam(examPlan.getId());
			double count=0;
			if(!majorScoreList.isEmpty()) {
				for (MajorScore majorScore : majorScoreList)
				{
					if(majorScore.getEvaluate().equals("不合格")) {
						count++;
					}
				}
				majorScoreRate=1-(count/majorScoreList.size());//计算合格率
			}
			List<SportsScore> sportsScoreList=sportsScoreDao.getSportsScoreByExam(examPlan.getId());
			count=0;
			if(!majorScoreList.isEmpty()) {
				for (SportsScore sportsScore : sportsScoreList)
				{
					if(sportsScore.getIsPass().equals("不合格")) {
						count++;
					}
				}
				sportsScoreRate=1-(count/sportsScoreList.size());//计算合格率
			}
			//将单次考核成绩存入各自列表中
			timeList.add(examPlan.getTime());
			majorScoreRateList.add(majorScoreRate);
			sportsScoreRateList.add(sportsScoreRate);
		}
		Map<String,List> map=new HashMap<String, List>();
		map.put("time", timeList);
		map.put("major", majorScoreRateList);
		map.put("sports", sportsScoreRateList);
		return map;
	}
	
	/**
	 * 获取军事体育的历史最好成绩
	 * @return
	 */
	public Map getHistoryRecords() {
		List<SportsScore> sportsScoreList=sportsScoreDao.getSportsScore();
		SportsScore mostPullUp=sportsScoreList.get(0);//引体向上
		SportsScore mostHang=sportsScoreList.get(0);//曲臂悬垂
		SportsScore mostPushUp=sportsScoreList.get(0);//俯卧撑
		SportsScore mostSnakeRun=sportsScoreList.get(0);//蛇形跑
		SportsScore mostRunning=sportsScoreList.get(0);//3km
		SportsScore mostSitUP=sportsScoreList.get(0);//仰卧起坐
		//比较得到各项目的最佳成绩
		for (SportsScore sportsScore : sportsScoreList)
		{
			if(sportsScore.getPullUp()>mostPullUp.getPullUp()){
				mostPullUp=sportsScore;
			}
			if((sportsScore.getHangmm()*60+sportsScore.getHangss())
					>(mostHang.getHangmm()*60+mostHang.getHangss())){
				mostHang=sportsScore;
			}
			if(sportsScore.getPushUp()>mostPushUp.getPushUp()){
				mostPushUp=sportsScore;
			}
			if((sportsScore.getSnakeRunScoremm()*100+sportsScore.getSnakeRunScorems())
					<(mostSnakeRun.getSnakeRunScoremm()*100+mostSnakeRun.getSnakeRunScorems())){
				mostSnakeRun=sportsScore;
			}
			if((sportsScore.getRunningScoremm()*60+sportsScore.getRunningScoress())
					<mostRunning.getRunningScoremm()*60+mostRunning.getRunningScoress()){
				mostRunning=sportsScore;
			}
			if(sportsScore.getSitUp()>mostSitUP.getSitUp()){
				mostSitUP=sportsScore;
			}
		}
		Map<String,SportsScore> map=new HashMap<String, SportsScore>();
		map.put("pullUp", mostPullUp);
		map.put("hang", mostHang);
		map.put("pushUp", mostPushUp);
		map.put("snakeRun", mostSnakeRun);
		map.put("running", mostRunning);
		map.put("sitUp", mostSitUP);
		return map;
	}
	
}
