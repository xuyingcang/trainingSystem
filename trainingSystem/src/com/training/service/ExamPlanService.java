package com.training.service;

import com.training.dao.ExamPlanDao;
import com.training.entity.ExamPlan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class ExamPlanService {

    @Autowired
    ExamPlanDao examPlanDao;

    public List getExamPlanList(){
        List<ExamPlan> examPlan = examPlanDao.getExamPlan();
        List<Map> list = new ArrayList<Map>();
        for (ExamPlan plan : examPlan) {
            Map<String, String> map = new HashMap<String, String>();
            map.put("id",plan.getId().toString());
            map.put("text",plan.getContent());
            list.add(map);
        }
        return list;
    }
}
