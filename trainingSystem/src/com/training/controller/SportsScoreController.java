package com.training.controller;

import com.training.dao.PersonDao;
import com.training.dao.SportsScoreDao;
import com.training.entity.SportsScore;
import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Map;

@Controller
public class SportsScoreController {


    public static final int SUCCESS=200;
    public static final int FAIL=400;

    @Autowired
    SportsScoreDao sportsScoreDao;

    @RequestMapping(value = "/addSportScore.do")
    public void addSportScore(SportsScore sportsScore,HttpServletResponse response)  {

        PrintWriter writer = null;
        try {
            writer = response.getWriter();
            sportsScoreDao.addSportsScore(sportsScore);
            writer.print(SUCCESS);
            writer.flush();
            writer.close();
        } catch (IOException e) {
            writer.print(FAIL);
            e.printStackTrace();
        }
    }


    @RequestMapping(value = "/getSportScore.do", produces = {"application/json; charset=UTF-8"})
    @ResponseBody
    public List getSportScore(){
        List<SportsScore> sportsScore = sportsScoreDao.getSportsScore();
        int i = 1;
        for (SportsScore score : sportsScore) {
           score.setId(i++);
        }

        return sportsScore;

    }
}
