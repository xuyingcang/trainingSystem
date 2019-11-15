package com.training.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="training_plan")
public class TrainingPlan
{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id",  unique = false)
	private Integer id;//主键
	
	@OneToOne
	@JoinColumn(name = "major")
	private DicMajor major;//专业
	
	@Column(name = "start_time",  unique = false)
	private Date startTime;//开始时间
	
	@Column(name = "end_time",  unique = false)
	private Date endTime;//结束时间
	
	@Column(name = "trainingcontent",  unique = false)
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

	public Integer getId()
	{
		return id;
	}

	public void setId(Integer id)
	{
		this.id = id;
	}

	public DicMajor getMajor()
	{
		return major;
	}

	public void setMajor(DicMajor major)
	{
		this.major = major;
	}

	public Date getStartTime()
	{
		return startTime;
	}

	public void setStartTime(Date startTime)
	{
		this.startTime = startTime;
	}

	public Date getEndTime()
	{
		return endTime;
	}

	public void setEndTime(Date endTime)
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

	public TrainingPlan()
	{
		super();
	}

	public TrainingPlan(Integer id, DicMajor major, Date startTime, Date endTime, String trainingContent,
			String trainingObject, String trainingPlace, float classHour, String classMethod,
			String principal)
	{
		super();
		this.id = id;
		this.major = major;
		this.startTime = startTime;
		this.endTime = endTime;
		this.trainingContent = trainingContent;
		this.trainingObject = trainingObject;
		this.trainingPlace = trainingPlace;
		this.classHour = classHour;
		this.classMethod = classMethod;
		this.principal = principal;
	}
	
	
	
	
}