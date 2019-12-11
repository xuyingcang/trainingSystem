package com.training.util;

import com.training.entity.Person;

public class SportUtils {
    /**
     * 计算单杠成绩
     */
    public static int pullUpScore(Person person, int number) throws Exception {

        int result = 0;
        //获得年龄
        int age = GetAge.getAge(person.getBirthday());
        //获得性别
        String sex = person.getSex();
        //计算得分
        if (sex.equals("男")) {
            if (age <= 19 || (age<= 27 &&age>=25)) {
                result = getResult(number);
            } else if (age <= 24 && age>=20) {
                if (number == 10) result = 55;
                if (number == 11) result = 60;
                if (number == 12) result = 65;
                if (number == 13) result = 68;
                if (number == 14) result = 70;
                if (number == 15) result = 71;
                if (number == 16) result = 73;
                if (number == 17) result = 74;
                if (number == 18) result = 75;
                if (number == 19) result = 77;
                if (number == 20) result = 80;
                if (number == 21) result = 82;
                if (number == 22) result = 85;
                if (number == 23) result = 86;
                if (number == 24) result = 87;
                if (number == 25) result = 88;
                if (number == 26) result = 90;
                if (number == 27) result = 92;
                if (number == 28) result = 93;
                if (number == 29) result = 94;
                if (number == 30) result = 95;
                if (number == 31) result = 96;
                if (number == 32) result = 97;
                if (number == 33) result = 98;
                if (number == 34) result = 99;
                if (number == 35) result = 100;
            } else if (age <= 30 && age >= 28) {
                if (number == 30) {
                    result = getResult(number + 2);
                }else {
                    result = getResult(number + 1);
                }
            } else if (age <= 33 && age >= 31) {
                if (number > 28) {
                    result = 100 + number - 28;
                }else {

                    if (number == 7) result = 55;
                    if (number == 8) result = 60;
                    if (number == 9) result = 65;
                    if (number == 10) result = 70;
                    if (number == 11) result = 74;
                    if (number == 12) result = 77;
                    if (number == 13) result = 80;
                    if (number == 14) result = 82;
                    if (number == 15) result = 85;
                    if (number == 16) result = 86;
                    if (number == 17) result = 87;
                    if (number == 18) result = 88;
                    if (number == 19) result = 90;
                    if (number == 20) result = 92;
                    if (number == 21) result = 93;
                    if (number == 22) result = 94;
                    if (number == 23) result = 95;
                    if (number == 24) result = 96;
                    if (number == 25) result = 97;
                    if (number == 26) result = 98;
                    if (number == 27) result = 99;
                    if (number == 28) result = 100;
                }
            } else if (age <= 36 && age >= 34) {
                if (number > 26) {
                    result = 100 + number - 26;

                }else {
                    if (number == 6) result = 55;
                    if (number == 7) result = 60;
                    if (number == 8) result = 65;
                    if (number == 9) result = 70;
                    if (number == 10) result = 74;
                    if (number == 11) result = 77;
                    if (number == 12) result = 80;
                    if (number == 13) result = 85;
                    if (number == 14) result = 86;
                    if (number == 15) result = 87;
                    if (number == 16) result = 88;
                    if (number == 17) result = 90;
                    if (number == 18) result = 92;
                    if (number == 19) result = 93;
                    if (number == 20) result = 94;
                    if (number == 21) result = 95;
                    if (number == 22) result = 96;
                    if (number == 23) result = 97;
                    if (number == 24) result = 98;
                    if (number == 25) result = 99;
                    if (number == 26) result = 100;
                }
            } else if (age <= 39 && age >= 37) {

                if (number > 24) {
                    result = 100 + number - 24;
                } else {
                    if (number == 5) result = 55;
                    if (number == 6) result = 60;
                    if (number == 7) result = 65;
                    if (number == 8) result = 70;
                    if (number == 9) result = 73;
                    if (number == 10) result = 75;
                    if (number == 11) result = 80;
                    if (number == 12) result = 85;
                    if (number == 13) result = 87;
                    if (number == 14) result = 90;
                    if (number == 15) result = 92;
                    if (number == 16) result = 93;
                    if (number == 17) result = 94;
                    if (number == 19) result = 95;
                    if (number == 20) result = 96;
                    if (number == 21) result = 97;
                    if (number == 22) result = 98;
                    if (number == 23) result = 99;
                    if (number == 24) result = 100;
                }
            }
        }

        return result;
    }

    private static int getResult(int number) {
        int result = 0;
        if (number > 32) {
            result = 100 + number - 32;
        }else {

            if (number == 9) result = 55;
            if (number == 10) result = 60;
            if (number == 11) result = 65;
            if (number == 12) result = 70;
            if (number == 13) result = 73;
            if (number == 14) result = 75;
            if (number == 15) result = 77;
            if (number == 16) result = 80;
            if (number == 17) result = 82;
            if (number == 18) result = 85;
            if (number == 19) result = 86;
            if (number == 20) result = 87;
            if (number == 21) result = 88;
            if (number == 22) result = 90;
            if (number == 23) result = 92;
            if (number == 24) result = 93;
            if (number == 25) result = 94;
            if (number == 26) result = 95;
            if (number == 27) result = 96;
            if (number == 28) result = 97;
            if (number == 29) result = 98;
            if (number == 30) result = 99;
            if (number == 32) result = 100;
        }
        return result;
    }

}
