package com.mvn.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "news")
public class News
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	/***
	 * 设置主键的生成策略JPA提供的四种标准用法为TABLE,SEQUENCE,IDENTITY,AUTO.
	 * TABLE：使用一个特定的数据库表格来保存主键。
	SEQUENCE：根据底层数据库的序列来生成主键，条件是数据库支持序列。
	IDENTITY：主键由数据库自动生成（主要是自动增长型）
	AUTO：主键由程序控制。
	在指定主键时，如果不指定主键生成策略，默认为AUTO。
	
	 */
	@Column(name = "id",  unique = false)
	private Integer id;
	@Column(name = "title", nullable = true)
	private String title;
	@Column(name = "author", nullable = true)
	private String author;
	@Column(name = "date", nullable = true)
	private Date date;
	
	
	public Integer getId()
	{
		return id;
	}
	public void setId(Integer id)
	{
		this.id = id;
	}
	public String getTitle()
	{
		return title;
	}
	public void setTitle(String title)
	{
		this.title = title;
	}
	public String getAuthor()
	{
		return author;
	}
	public void setAuthor(String author)
	{
		this.author = author;
	}
	public Date getDate()
	{
		return date;
	}
	public void setDate(Date date)
	{
		this.date = date;
	}
	public News(String title, String author, Date date)
	{
		super();
		this.title = title;
		this.author = author;
		this.date = date;
	}
	
	
	public News(Integer id, String title, String author, Date date)
	{
		super();
		this.id = id;
		this.title = title;
		this.author = author;
		this.date = date;
	}
	public News()
	{
		super();
	}
	@Override
	public String toString()
	{
		return "News [id=" + id + ", title=" + title + ", author=" + author + ", date=" + date + "]";
	}
	
	
}
