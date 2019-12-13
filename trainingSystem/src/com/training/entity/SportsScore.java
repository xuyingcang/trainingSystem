package com.training.entity;


import javax.persistence.*;


/**
 * 军事训练成绩表
 */

@Entity
@Table(name = "sports_Score")
//（id、人员、考核计划、体型、单杠、俯卧撑、蛇形跑、3公里、仰卧起坐、总成绩、是否合格、曲臂悬垂、
//单杠成绩、俯卧撑成绩、三公里成绩、仰卧起坐成绩、曲臂悬垂成绩、蛇形跑成绩、曲臂悬垂分、秒、三公里分、秒
//蛇形跑秒、毫秒
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

     @Column(name = "body_type_score")
    private String bodyTypeScore;//体型成绩


    @Column(name = "pull_up")
    private Integer pullUp;//引体向上

    @Column(name = "pull_up_Score")
    private Integer pullUpScore;//引体向上成绩

    private String hang;//曲臂悬垂

    @Column(name = "hang_score")
    private Integer hangScore;//曲臂悬垂成绩

    @Column(name = "hang_mm")
    private Integer hangmm;//曲臂悬垂分

    @Column(name = "hang_ss")
    private Integer hangss;//曲臂悬垂秒


    @Column(name = "push_up")
    private Integer pushUp;//俯卧撑

    @Column(name = "push_up_score")
    private Integer pushUpScore;//俯卧撑成绩

    private String snakeRun;//蛇形跑

    @Column(name = "snake_run_score")
    private Integer snakeRunScore;//蛇形跑成绩

    @Column(name = "snake_run_mm")
    private Integer snakeRunScoremm;//蛇形跑秒
    @Column(name = "snake_run_ms")
    private Integer snakeRunScorems;//蛇形跑毫秒

    private String running;//3公里

    @Column(name = "running_score")
    private Integer runningScore;//3公里成绩

    @Column(name = "running_mm")
    private Integer runningScoremm;//3公里分
    @Column(name = "running_ss")
    private Integer runningScoress;//3公里秒

    @Column(name = "sit_up")
    private Integer sitUp;//仰卧起坐


    @Column(name = "sit_up_score")
    private Integer situpScore;


    @Column(name = "total_score")
    private Integer totalScore;//总分数
    @Column(name = "is_pass")
    private String isPass;//是否合格

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

    public String getBodyType() {
        return bodyType;
    }

    public void setBodyType(String bodyType) {
        this.bodyType = bodyType;
    }

    public String getBodyTypeScore() {
        return bodyTypeScore;
    }

    public void setBodyTypeScore(String bodyTypeScore) {
        this.bodyTypeScore = bodyTypeScore;
    }

    public Integer getPullUp() {
        return pullUp;
    }

    public void setPullUp(Integer pullUp) {
        this.pullUp = pullUp;
    }

    public Integer getPullUpScore() {
        return pullUpScore;
    }

    public void setPullUpScore(Integer pullUpScore) {
        this.pullUpScore = pullUpScore;
    }

    public String getHang() {
        return hang;
    }

    public void setHang(String hang) {
        this.hang = hang;
    }

    public Integer getHangScore() {
        return hangScore;
    }

    public void setHangScore(Integer hangScore) {
        this.hangScore = hangScore;
    }

    public Integer getHangmm() {
        return hangmm;
    }

    public void setHangmm(Integer hangmm) {
        this.hangmm = hangmm;
    }

    public Integer getHangss() {
        return hangss;
    }

    public void setHangss(Integer hangss) {
        this.hangss = hangss;
    }

    public Integer getPushUp() {
        return pushUp;
    }

    public void setPushUp(Integer pushUp) {
        this.pushUp = pushUp;
    }

    public Integer getPushUpScore() {
        return pushUpScore;
    }

    public void setPushUpScore(Integer pushUpScore) {
        this.pushUpScore = pushUpScore;
    }

    public String getSnakeRun() {
        return snakeRun;
    }

    public void setSnakeRun(String snakeRun) {
        this.snakeRun = snakeRun;
    }

    public Integer getSnakeRunScore() {
        return snakeRunScore;
    }

    public void setSnakeRunScore(Integer snakeRunScore) {
        this.snakeRunScore = snakeRunScore;
    }

    public Integer getSnakeRunScoremm() {
        return snakeRunScoremm;
    }

    public void setSnakeRunScoremm(Integer snakeRunScoremm) {
        this.snakeRunScoremm = snakeRunScoremm;
    }

    public Integer getSnakeRunScorems() {
        return snakeRunScorems;
    }

    public void setSnakeRunScorems(Integer snakeRunScorems) {
        this.snakeRunScorems = snakeRunScorems;
    }

    public String getRunning() {
        return running;
    }

    public void setRunning(String running) {
        this.running = running;
    }

    public Integer getRunningScore() {
        return runningScore;
    }

    public void setRunningScore(Integer runningScore) {
        this.runningScore = runningScore;
    }

    public Integer getRunningScoremm() {
        return runningScoremm;
    }

    public void setRunningScoremm(Integer runningScoremm) {
        this.runningScoremm = runningScoremm;
    }

    public Integer getRunningScoress() {
        return runningScoress;
    }

    public void setRunningScoress(Integer runningScoress) {
        this.runningScoress = runningScoress;
    }

    public Integer getSitUp() {
        return sitUp;
    }

    public void setSitUp(Integer sitUp) {
        this.sitUp = sitUp;
    }

    public Integer getSitupScore() {
        return situpScore;
    }

    public void setSitupScore(Integer situpScore) {
        this.situpScore = situpScore;
    }

    public Integer getTotalScore() {
        return totalScore;
    }

    public void setTotalScore(Integer totalScore) {
        this.totalScore = totalScore;
    }

    public String getIsPass() {
        return isPass;
    }

    public void setIsPass(String isPass) {
        this.isPass = isPass;
    }
}
