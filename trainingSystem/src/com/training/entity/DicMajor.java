package com.training.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="dic_major")
public class DicMajor
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id",  unique = false)
	private Integer id;//主键
	@Column(name = "name")
	private String name;//专业名称
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
	public DicMajor(Integer id, String name)
	{
		super();
		this.id = id;
		this.name = name;
	}
	public DicMajor()
	{
	}
	
	
}
