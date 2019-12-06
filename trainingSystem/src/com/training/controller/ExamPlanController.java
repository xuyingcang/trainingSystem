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
import java.lang.reflect.InvocationTargetException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

@Controller
public class ExamPlanController {

    @Autowired
    ExamPlanDao examPlanDao;

    @Autowired
    ExamPlanService examPlanService;

    @RequestMapping(value = "/addExamPlan.do")
    private void addExamPlan(ExamPlan examPlan) throws Exception {
        examPlanDao.addExamPlan(examPlan);

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

            examPlan.setId(i++);
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

}
