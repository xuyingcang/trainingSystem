package com.training.entity;

import sun.dc.pr.PRError;

import javax.persistence.*;

@Entity
@Table(name = "person")
//（id、姓名、性别、出生日期、身高、体重、人员类别、军衔、职务、专业、训练类别）
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id",unique = false)
    private Integer id;//主键

    @Column(name = "naem")
    private String name;//姓名

    @Column(name = "sex")
    private String sex;//性别

    @Column(name = "birthday")
    private String birthday;//出生日期

    @Column(name = "height")
    private double height;//身高

    @Column(name = "weight")
    private double weight;//体重

    @Column(name = "person_type")
    private String person_type;//人员类别

    @Column(name = "military_rank")
    private String military_rank;//军衔

    @Column(name = "duty")
    private String duty;//职务

    @Column(name = "profession")
    private String profession;//专业

    @Column(name = "training_type")
    private String training_type;//训练类别

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public String getPerson_type() {
        return person_type;
    }

    public void setPerson_type(String person_type) {
        this.person_type = person_type;
    }

    public String getMilitary_rank() {
        return military_rank;
    }

    public void setMilitary_rank(String military_rank) {
        this.military_rank = military_rank;
    }

    public String getDuty() {
        return duty;
    }

    public void setDuty(String duty) {
        this.duty = duty;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public String getTraining_type() {
        return training_type;
    }

    public void setTraining_type(String training_type) {
        this.training_type = training_type;
    }

    @Override
    public String toString() {
        return "Person{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", sex='" + sex + '\'' +
                ", birthday='" + birthday + '\'' +
                ", height=" + height +
                ", weight=" + weight +
                ", person_type='" + person_type + '\'' +
                ", military_rank='" + military_rank + '\'' +
                ", duty='" + duty + '\'' +
                ", profession='" + profession + '\'' +
                ", training_type='" + training_type + '\'' +
                '}';
    }
}
