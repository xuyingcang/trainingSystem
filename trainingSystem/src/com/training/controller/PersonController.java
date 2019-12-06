package com.training.controller;

import java.sql.Date;
import java.text.ParseException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.training.dao.PersonDao;
import com.training.util.GetAge;
import org.apache.commons.beanutils.BeanUtils;
import org.aspectj.weaver.ast.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.training.entity.Person;
import com.training.service.PersonService;


@Controller
public class PersonController {
    @Autowired
    PersonService personService;
    @Autowired
    PersonDao personDao;

    public static final int SUCCESS = 200;
    public static final int FAIL = 400;


    @RequestMapping(value = "/getPersonList.do", produces = {"application/json; charset=UTF-8"})
    @ResponseBody
    private List getPersonlist() throws ParseException {
        List<Person> list = null;
        list = personService.getPersonList("test");
        return list;
    }

    /**
     * 用于前台展示
     *
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/getPersonList1.do", produces = {"application/json; charset=UTF-8"})
    @ResponseBody
    private List getPersonlist1() throws Exception {
        int i = 1;//计数器
        List<Person> personList = personDao.getPersonListAll();
        for (Person person : personList) {
            person.setId(i++);
            person.setHeight(person.getHeight() + "cm");
            person.setWeight(person.getWeight() + "kg");
            person.setAge(GetAge.getAge(person.getBirthday()));
        }
        return personList;
    }

    /**
     * 添加人员
     *
     * @throws Exception
     */
    @RequestMapping(value = "/addPerson.do")
    public void addPerson(Person person) throws Exception {
        personDao.save(person);
    }

    @RequestMapping(value ="vaildPerson.do")
    public void isSuccess(Person person,HttpServletResponse response) throws  Exception {
        List persons = personDao.getPersonListToId(person);
        if (persons.size()>0) {
            response.getWriter().write(SUCCESS);
        } else {
            response.getWriter().write(FAIL);
        }
    }

}
