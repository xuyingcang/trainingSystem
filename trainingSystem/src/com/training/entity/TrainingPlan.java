package com.training.entity;

import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import com.training.util.*;

@Entity
@Table(name="training_plan")
public class TrainingPlan
{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id",  unique = false)
	private Integer id;//主键
	
	//@OneToOne
	@Column(name = "major")
	private String major;//专业
	
	@JsonDeserialize(using = DateJsonDeserialize.class)// 请求时：将字符串类型的格式转换成时间类型
	@JsonSerialize(using=DateJsonSerialize.class)// 响应结果：将时间类型的格式化
	@Column(name = "start_time",  unique = false)
	private Timestamp startTime;//开始时间
	
	@JsonDeserialize(using = DateJsonDeserialize.class)
	@JsonSerialize(using=DateJsonSerialize.class)
	@Column(name = "end_time",  unique = false)
	private Timestamp endTime;//结束时间
	
	@Column(name = "training_content",  unique = false)
	private String trainingContent;//训练内容
	
	@Column(name = "training_object",  unique = false)
	private String trainingObject;//参训对象
	
	@Column(name = "training_place",  unique = false)
	private String trainingPlace;//训练场地
	
	@Column(name = "class_hour",  unique = false)
	private float classHour;//课时
	
	@Column(name = "class_method",  unique = false)
	private String classMethod;//组织方法
	
	@Column(name = "principal",  unique = false)
	private String principal;//负责人
	
	@Column(name = "completion",  unique = false)
	private String completion;//完成情况
	
	@Column(name = "persons",  unique = false)
	private String persons;//参训人员
	
	@Column(name = "remarks",  unique = false)
	private String remarks;//备注

	public Integer getId()
	{
		return id;
	}

	public void setId(Integer id)
	{
		this.id = id;
	}

	public String getMajor()
	{
		return major;
	}

	public void setMajor(String major)
	{
		this.major = major;
	}

	public Timestamp getStartTime()
	{
		return startTime;
	}

	public void setStartTime(Timestamp startTime)
	{
		this.startTime = startTime;
	}

	public Timestamp getEndTime()
	{
		return endTime;
	}

	public void setEndTime(Timestamp endTime)
	{
		this.endTime = endTime;
	}

	public String getTrainingContent()
	{
		return trainingContent;
	}

	public void setTrainingContent(String trainingContent)
	{
		this.trainingContent = trainingContent;
	}

	public String getTrainingObject()
	{
		return trainingObject;
	}

	public void setTrainingObject(String trainingObject)
	{
		this.trainingObject = trainingObject;
	}

	public String getTrainingPlace()
	{
		return trainingPlace;
	}

	public void setTrainingPlace(String trainingPlace)
	{
		this.trainingPlace = trainingPlace;
	}

	public float getClassHour()
	{
		return classHour;
	}

	public void setClassHour(float classHour)
	{
		this.classHour = classHour;
	}

	public String getClassMethod()
	{
		return classMethod;
	}

	public void setClassMethod(String classMethod)
	{
		this.classMethod = classMethod;
	}

	public String getPrincipal()
	{
		return principal;
	}

	public void setPrincipal(String principal)
	{
		this.principal = principal;
	}

	public String getCompletion()
	{
		return completion;
	}

	public void setCompletion(String completion)
	{
		this.completion = completion;
	}

	public String getPersons()
	{
		return persons;
	}

	public void setPersons(String persons)
	{
		this.persons = persons;
	}

	public String getRemarks()
	{
		return remarks;
	}

	public void setRemarks(String remarks)
	{
		this.remarks = remarks;
	}

	public TrainingPlan(){}
				
}
