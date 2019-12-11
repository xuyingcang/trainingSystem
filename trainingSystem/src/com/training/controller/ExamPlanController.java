package com.training.controller;

import com.training.dao.ExamPlanDao;
import com.training.entity.ExamPlan;
import com.training.entity.Person;
import com.training.service.ExamPlanService;
import com.training.util.GetAge;
import org.apache.commons.beanutils.BeanUtils;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.InvocationTargetException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

@Controller
public class ExamPlanController {


    public static final int SUCCESS=200;
    public static final int FAIL=400;

    @Autowired
    ExamPlanDao examPlanDao;

    @Autowired
    ExamPlanService examPlanService;

    @RequestMapping(value = "/addExamPlan.do")
    private void addExamPlan(ExamPlan examPlan,HttpServletResponse response) throws Exception {

        PrintWriter writer = null;
        try {
            writer = response.getWriter();
            examPlanDao.addExamPlan(examPlan);
            writer.print(SUCCESS);
            writer.flush();
            writer.close();
        } catch (IOException e) {
            writer.print(FAIL);
            e.printStackTrace();
        }

    }

    /**
     * 用于前台展示
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/getExamplan.do", produces = {"application/json; charset=UTF-8"})
    @ResponseBody
    private List getExamPlanlistAll() throws Exception {
        int i =1;//计数器
        List<ExamPlan> examPlans = examPlanDao.getExamPlan();
        for (ExamPlan examPlan : examPlans) {

            examPlan.setNumber(i++);
            String time = examPlan.getTime();

            examPlan.setTime( time.substring(0,10));
        }
        return examPlans;
    }

    @RequestMapping(value = "/getExamPlanList.do", produces = {"application/json; charset=UTF-8"})
    @ResponseBody
    private List getExamPlanlist() throws ParseException {
        List<Person> list = null;
        list = examPlanService.getExamPlanList();
        return list;
    }

    @RequestMapping(value = "/updateExamPlan.do")
    public void updateExamPlan(ExamPlan examPlan, HttpServletResponse response) {
        PrintWriter writer = null;
        try {
            writer = response.getWriter();
            examPlanDao.updateExamPlan(examPlan);
            writer.print(SUCCESS);
            writer.flush();
            writer.close();
        } catch (Exception e) {
            writer.print(FAIL);
            e.printStackTrace();
        }
    }

    @RequestMapping(value = "/deleteExamPlan.do")
    public void deleteExamPlan(Integer id,HttpServletResponse response) {
        PrintWriter writer = null;
        try {
            writer = response.getWriter();
            examPlanDao.deleteExamPlan(examPlanDao.getExamPlanListToId(id));
            writer.print(SUCCESS);
            writer.flush();
            writer.close();
        } catch (Exception e) {
            writer.print(FAIL);
            e.printStackTrace();
        }
    }
    @RequestMapping(value = "/getExamPlanToId.do")
    public void getExamPlanToId(Integer id,HttpServletResponse response) {

        ExamPlan examPlanListToId = examPlanDao.getExamPlanListToId(id);

        try {
            response.getWriter().print(examPlanListToId.getPercent());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
