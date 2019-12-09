package com.training.entity;

import javax.persistence.*;


/**
 * 军事训练成绩表
 */

@Entity
@Table(name = "sports_Score")
//（id、人员、考核计划、体型、单杠、俯卧撑、蛇形跑、3公里、仰卧起坐、总成绩、是否合格）
public class SportsScore {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;//主键

    @OneToOne
    @JoinColumn(name = "person_id")
    private Person person;//人员（外键）

    @ManyToOne
    @JoinColumn(name = "exam_plan_id")
    private ExamPlan examPlan;//考试计划（外键）

    @Column(name = "body_type")
    private String bodyType;//体型

    @Column(name = "pull_up")
    private Integer pullUp;//引体向上

    @Column(name = "push_up")
    private Integer pushUp;//俯卧撑

    @Column(name = "snake_run")
    private double snakeRun;//蛇形跑

    @Column(name = "running")
    private double running;//3公里

    @Column(name = "sit_up")
    private Integer sitUp;//仰卧起坐

    @Column(name = "total_score")
    private double totalScore;//总分数
    @Column(name = "is_pass")
    private String isPass;//是否合格

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

    public String getBodyType() {
        return bodyType;
    }

    public void setBodyType(String bodyType) {
        this.bodyType = bodyType;
    }

    public Integer getPullUp() {
        return pullUp;
    }

    public void setPullUp(Integer pullUp) {
        this.pullUp = pullUp;
    }

    public Integer getPushUp() {
        return pushUp;
    }

    public void setPushUp(Integer pushUp) {
        this.pushUp = pushUp;
    }

    public double getSnakeRun() {
        return snakeRun;
    }

    public void setSnakeRun(double snakeRun) {
        this.snakeRun = snakeRun;
    }

    public double getRunning() {
        return running;
    }

    public void setRunning(double running) {
        this.running = running;
    }

    public Integer getSitUp() {
        return sitUp;
    }

    public void setSitUp(Integer sitUp) {
        this.sitUp = sitUp;
    }

    public double getTotalScore() {
        return totalScore;
    }

    public void setTotalScore(double totalScore) {
        this.totalScore = totalScore;
    }

    public String getIsPass() {
        return isPass;
    }

    public void setIsPass(String isPass) {
        this.isPass = isPass;
    }
}
