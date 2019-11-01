package com.spring.hello.module;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name = "student", schema = "")
@DynamicUpdate(true)
@DynamicInsert(true)
public class Student
{
	@Id
	@GeneratedValue
	@Column(name = "id", unique = false)
	private Integer id;
	@Column(name = "name", nullable = false)
	private String name;
	@Column(name = "age", nullable = false)
	private Integer age;
	public Integer getId()
	{
		return id;
	}
	public void setId(Integer id)
	{
		this.id = id;
	}
	public String getName()
	{
		return name;
	}
	public void setName(String name)
	{
		this.name = name;
	}
	public Integer getAge()
	{
		return age;
	}
	public void setAge(Integer age)
	{
		this.age = age;
	}
	public Student(Integer id, String name, Integer age)
	{
		super();
		this.id = id;
		this.name = name;
		this.age = age;
	}
	public Student()
	{
		super();
	}
	
	
}
