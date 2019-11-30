package com.training.entity;

import javax.persistence.*;

@Entity
@Table(name = "user")
//id、用户名、密码、姓名、用户类型、登录时间
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = false)
    private Integer id;//主键

    @Column(name = "username")
    private String username;//用户名

    @Column(name = "password")
    private String password;//密码

    @Column(name = "name")
    private String name;//姓名

    @Column(name = "usertype")
    private String usertype;//用户类型

    @Column(name = "logintime")
    private String logintime;//登录时间

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsertype() {
        return usertype;
    }

    public void setUsertype(String usertype) {
        this.usertype = usertype;
    }

    public String getLogintime() {
        return logintime;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLogintime(String logintime) {
        this.logintime = logintime;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", usertype='" + usertype + '\'' +
                ", logintime='" + logintime + '\'' +
                '}';
    }
}
