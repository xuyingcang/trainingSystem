package com.training.controller;

import com.training.dao.MajorScoreDao;
import com.training.dao.SportsScoreDao;
import com.training.entity.MajorScore;
import com.training.entity.SportsScore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@Controller
public class MajorScoreController {

    public static final int SUCCESS=200;
    public static final int FAIL=400;

    @Autowired
    MajorScoreDao majorScoreDao;

    @RequestMapping(value = "/addMAjorScore.do")
    public void addMagorScore(MajorScore majorScore, HttpServletResponse response)  {
        PrintWriter writer = null;
        try {
            writer = response.getWriter();
            majorScoreDao.addMajorScore(majorScore);
            writer.print(SUCCESS);
            writer.flush();
            writer.close();
        } catch (IOException e) {
            writer.print(FAIL);
            e.printStackTrace();
        }
    }


    @RequestMapping(value = "/getMajorScore.do", produces = {"application/json; charset=UTF-8"})
    @ResponseBody
    public List getMajorScore(){
        List<MajorScore> majorScore = majorScoreDao.getMajorScore();
        int i = 1;
        for (MajorScore score : majorScore) {
           score.setNumber(i++);
        }

        return majorScore;

    }

    @RequestMapping(value = "/deleteMajorScore.do")
    public void deleteMajorScore(Integer id,HttpServletResponse response) {
        PrintWriter writer = null;
        try {
            writer = response.getWriter();
            majorScoreDao.deleteMajorScore(majorScoreDao.getMajorScoreToId(id));
            writer.print(SUCCESS);
            writer.flush();
            writer.close();
        } catch (Exception e) {
            writer.print(FAIL);
            e.printStackTrace();
        }
    }

    @RequestMapping(value = "/updateMajorScore.do")
    public void updateMajorScore(MajorScore majorScore, HttpServletResponse response) {
        PrintWriter writer = null;
        try {
            writer = response.getWriter();
            majorScoreDao.updateMajorScore(majorScore);
            writer.print(SUCCESS);
            writer.flush();
            writer.close();
        } catch (Exception e) {
            writer.print(FAIL);
            e.printStackTrace();
        }
    }
}
