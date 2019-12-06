package com.training.entity;

import javax.persistence.*;

/**
 * 考核计划表
 */

@Entity
@Table(name = "exam_plan")
public class ExamPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;//主键

    @Column(name = "content")
    private String content;//考试内容

    @Column(name = "time")
    private String time;//考试时间

    @Column(name = "type")
    private String type;//考核类型

    @Column(name = "percent")
    private double percent;//实操考核占比

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getPercent() {
        return percent;
    }

    public void setPercent(double percent) {
        this.percent = percent;
    }
}
