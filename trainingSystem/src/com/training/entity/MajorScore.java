package com.training.entity;

import javax.persistence.*;

/**
 * 专业考核成绩表
 */

@Entity
@Table(name = "major_score")
public class MajorScore {
    //id、人员、考核计划、实操成绩、理论成绩、总成绩、成绩评定
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;//主键

    @OneToOne
    @JoinColumn(name = "person_id")
    private Person person;//人员

    @ManyToOne
    @JoinColumn(name = "exam_plan_id")
    private ExamPlan examPlan;//考核计划

    @Column(name = "operation")
    private double operation;//实操成绩

    @Column(name = "theory")
    private double theory;//理论成绩

    @Column(name = "totalScore")
    private double totalScore;//总成绩

    @Column(name = "evaluate")
    private String evaluate;//成绩评定

    private Integer number;

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public ExamPlan getExamPlan() {
        return examPlan;
    }

    public void setExamPlan(ExamPlan examPlan) {
        this.examPlan = examPlan;
    }

    public double getOperation() {
        return operation;
    }

    public void setOperation(double operation) {
        this.operation = operation;
    }

    public double getTheory() {
        return theory;
    }

    public void setTheory(double theory) {
        this.theory = theory;
    }

    public double getTotalScore() {
        return totalScore;
    }

    public void setTotalScore(double totalScore) {
        this.totalScore = totalScore;
    }

    public String getEvaluate() {
        return evaluate;
    }

    public void setEvaluate(String evaluate) {
        this.evaluate = evaluate;
    }
}
