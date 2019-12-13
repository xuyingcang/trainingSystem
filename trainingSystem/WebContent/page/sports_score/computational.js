var age = null;
var height = null;
var weight = null;
var sex = null;

function bodyType(e) {
    age = e.params.data.age;
    height = e.params.data.height;
    weight = e.params.data.weight;
    sex = e.params.data.sex;
    var BMI = weight / ((height / 100) * (height / 100));
    //判断你体型是否合格

    if (isBodyQualified(sex, age, BMI) == false) {
        $("#bodyType-tip").html("<font color='red'>不合格</font>");
        $("#bodyTypeScore").val("不合格");
    } else {
        $("#bodyType-tip").html("合格");
        $("#bodyTypeScore").val("合格");

    }
    //展示结果
    $("#bodyType").val(BMI.toFixed(1));

}

function isBodyQualified(sex, age, BMI) {
    var isPass = false;
    if (sex == "男") {
        if (age <= 24 && BMI >= 18.5 && BMI <= 25.9) {
            isPass = true;
        } else if (age <= 29 && age >= 25 && BMI >= 18.5 && BMI <= 26.9) {
            isPass = true;
        } else if (age <= 39 && age >= 30 && BMI >= 18.5 && BMI <= 27.9) {
            isPass = true;
        } else if (age <= 49 && age >= 40 && BMI >= 18.5 && BMI <= 28.9) {
            isPass = true;
        } else if (age <= 59 && age >= 50 && BMI >= 18.5 && BMI <= 29.4) {
            isPass = true;
        } else if (age <= 60 && BMI >= 18.5 && BMI <= 29.9) {
            isPass = true;
        }
    } else {
        if (age <= 24 && BMI >= 18.5 && BMI <= 23.9) {
            isPass = true;
        } else if (age <= 29 && age >= 25 && BMI >= 18.5 && BMI <= 24.9) {
            isPass = true;
        } else if (age <= 39 && age >= 30 && BMI >= 18.5 && BMI <= 25.9) {
            isPass = true;
        } else if (age <= 49 && age >= 40 && BMI >= 18.5 && BMI <= 26.9) {
            isPass = true;
        } else if (age <= 59 && age >= 50 && BMI >= 18.5 && BMI <= 27.4) {
            isPass = true;
        } else if (age <= 60 && BMI >= 18.5 && BMI <= 27.4) {
            isPass = true;
        }
    }
    return isPass;
}

/*----------------------------------------------------------男单杠---------------------------------------------------*/

function MypullUpScore() {
    var number = parseInt($("#pullUp").val());

    if (sex == "男") {
        if (age <= 19 || (age <= 27 && age >= 25)) {
            getResult(number);
        } else if (age <= 24 && age >= 20) {
            if (number > 35) {
                result = 100 + number - 35;
            } else if (number < 10) {
                result = 0;
            } else {

                switch (number) {

                    case 10:
                        result = 55;
                        break;
                    case 11:
                        result = 60;
                        break;
                    case 12:
                        result = 65;
                        break;
                    case 13:
                        result = 68;
                        break;
                    case 14:
                        result = 70;
                        break;
                    case 15:
                        result = 71;
                        break;
                    case 16:
                        result = 73;
                        break;
                    case 17:
                        result = 74;
                        break;
                    case 18:
                        result = 75;
                        break;
                    case 19:
                        result = 77;
                        break;
                    case 20:
                        result = 80;
                        break;
                    case 21:
                        result = 82;
                        break;
                    case 22:
                        result = 85;
                        break;
                    case 23:
                        result = 86;
                        break;
                    case 24:
                        result = 87;
                        break;
                    case 25:
                        result = 88;
                        break;
                    case 26:
                        result = 90;
                        break;
                    case 27:
                        result = 92;
                        break;
                    case 28:
                        result = 93;
                        break;
                    case 29:
                        result = 94;
                        break;
                    case 30:
                        result = 95;
                        break;
                    case 31:
                        result = 96;
                        break;
                    case 32:
                        result = 97;
                        break;
                    case 33:
                        result = 98;
                        break;
                    case 34:
                        result = 99;
                        break;
                    case 35:
                        result = 100;
                        break;
                }
            }
        } else if (age <= 30 && age >= 28) {
            if (number == 30) {
                result = getResult(number + 2);
            } else {
                result = getResult(number + 1);
            }
        } else if (age <= 33 && age >= 31) {
            if (number > 28) {
                result = 100 + number - 28;
            } else if (number < 7) {
                result = 0;
            } else {

                switch (number) {
                    case 7 :
                        result = 55;
                        break;
                    case 8 :
                        result = 60;
                        break;
                    case 9 :
                        result = 65;
                        break;
                    case 10:
                        result = 70;
                        break;
                    case 11:
                        result = 74;
                        break;
                    case 12:
                        result = 77;
                        break;
                    case 13:
                        result = 80;
                        break;
                    case 14:
                        result = 82;
                        break;
                    case 15:
                        result = 85;
                        break;
                    case 16:
                        result = 86;
                        break;
                    case 17:
                        result = 87;
                        break;
                    case 18:
                        result = 88;
                        break;
                    case 19:
                        result = 90;
                        break;
                    case 20:
                        result = 92;
                    case 21:
                        result = 93;
                        break;
                    case 22:
                        result = 94;
                        break;
                    case 23:
                        result = 95;
                        break;
                    case 24:
                        result = 96;
                        break;
                    case 25:
                        result = 97;
                        break;
                    case 26:
                        result = 98;
                        break;
                    case 27:
                        result = 99;
                        break;
                    case 28:
                        result = 100;
                        break;
                }
            }
        } else if (age <= 36 && age >= 34) {
            if (number > 26) {
                result = 100 + number - 26;
            } else if (number < 6) {
                result = 0;

            } else {

                switch (number) {


                    case 6:
                        result = 55;
                        break;
                    case 7:
                        result = 60;
                        break;
                    case 8:
                        result = 65;
                        break;
                    case 9:
                        result = 70;
                        break;
                    case 10:
                        result = 74;
                        break;
                    case 11:
                        result = 77;
                        break;
                    case 12:
                        result = 80;
                        break;
                    case 13:
                        result = 85;
                        break;
                    case 14:
                        result = 86;
                        break;
                    case 15:
                        result = 87;
                        break;
                    case 16:
                        result = 88;
                        break;
                    case 17:
                        result = 90;
                        break;
                    case 18:
                        result = 92;
                        break;
                    case 19:
                        result = 93;
                        break;
                    case 20:
                        result = 94;
                        break;
                    case 21:
                        result = 95;
                        break;
                    case 22:
                        result = 96;
                        break;
                    case 23:
                        result = 97;
                        break;
                    case 24:
                        result = 98;
                        break;
                    case 25:
                        result = 99;
                        break;
                    case 26:
                        result = 100;
                        break;
                }

            }
        } else if (age <= 39 && age >= 37) {
            if (number > 24) {
                result = 100 + number - 24
            } else if (number < 5) {
                result = 0;
            } else {

                switch (number) {
                    case 5:
                        result = 55;
                        break;
                    case 6:
                        result = 60;
                        break;
                    case 7:
                        result = 65;
                        break;
                    case 8:
                        result = 70;
                        break;
                    case 9:
                        result = 73;
                        break;
                    case 10:
                        result = 75;
                        break;
                    case 11:
                        result = 80;
                        break;
                    case 12:
                        result = 85;
                        break;
                    case 13:
                        result = 87;
                        break;
                    case 14:
                        result = 90;
                        break;
                    case 15:
                        result = 92;
                        break;
                    case 16:
                        result = 93;
                        break;
                    case 17:
                        result = 94;
                        break;
                    case 19:
                        result = 95;
                        break;
                    case 20:
                        result = 96;
                        break;
                    case 21:
                        result = 97;
                        break;
                    case 22:
                        result = 98;
                        break;
                    case 23:
                        result = 99;
                        break;
                    case 24:
                        result = 100;
                        break;
                }
            }
        }
    }
    $("#pullUpScore").val(result);
    $("#pullUp-tip").html("分数：" + result);


}


function getResult(number) {
    if (number > 32) {
        result = 100 + number - 32;
    } else if (number < 9) {
        result = 0;
    } else {
        switch (number) {
            case 9:
                result = 55;
                break;
            case 10:
                result = 60;
                break;
            case  11:
                result = 65;
                break;
            case 12:
                result = 70;
                break;
            case 13:
                result = 73;
                break;
            case 14:
                result = 75;
                break;
            case 15:
                result = 77;
                break;
            case 16:
                result = 80;
                break;
            case 17:
                result = 82;
                break;
            case 18:
                result = 85;
                break;
            case 19:
                result = 86;
                break;
            case 20:
                result = 87;
                break;
            case 21:
                result = 88;
                break;
            case 22:
                result = 90;
                break;
            case 23:
                result = 92;
                break;
            case 24:
                result = 93;
                break;
            case 25:
                result = 94;
                break;
            case 26:
                result = 95;
                break;
            case 27:
                result = 96;
                break;
            case 28:
                result = 97;
                break;
            case 29:
                result = 98;
                break;
            case 30:
                result = 99;
                break;
            case 32:
                result = 100;
                break;
        }
    }
}

//----------------------------------------------俯卧撑-------------------------------------------------------//
function MypushUpScore() {
    var number = parseInt($("#pushUp").val());
    if (sex == "男") {
        if (age <= 42 && age >= 40) {
            if (number > 70) {
                result = 100 + number - 70;
            } else {
                if (number > 24 && number < 28) {
                    result = 55;
                } else if (number > 27 && number < 31) {
                    result = 60;
                } else if (number > 30 && number < 33) {
                    result = 65;
                } else if (number > 32 && number < 35) {
                    result = 68;
                } else if (number == 35) {
                    result = 70;
                } else if (number > 35 && number < 38) {
                    result = 71;
                } else if (number == 38) {
                    result = 73;
                } else if (number == 39) {
                    result = 74;
                } else if (number > 39 && number < 42) {
                    result = 75;
                } else if (number > 41 && number < 44) {
                    result = 77;
                } else if (number > 43 && number < 46) {
                    result = 80;
                } else if (number > 45 && number < 48) {
                    result = 82;
                } else if (number > 47 && number < 50) {
                    result = 85;

                } else if (number > 49 && number < 52) {
                    result = 86;
                } else if (number == 52) {
                    result = 87;
                } else if (number > 52 && number < 55) {
                    result = 88;
                } else if (number > 54 && number < 57) {
                    result = 90;
                } else if (number == 57) {
                    result = 92;
                } else if (number == 58) {
                    result = 93;
                } else if (number == 59) {
                    result = 94;
                } else if (number > 59 && number < 62) {
                    result = 95;
                } else if (number > 61 && number < 64) {
                    result = 96;
                }
                else if (number > 63 && number < 66) {
                    result = 97;
                } else if (number > 65 && number < 68) {
                    result = 98;
                } else if (number > 67 && number < 70) {
                    result = 99;
                } else if (number == 70) {
                    result = 100;
                } else {
                    result = 0;

                }
            }

        } else if (age <= 45 && age >= 43) {
            if (number > 66) {
                result = 100 + number - 66;
            } else {
                if (number > 23 && number < 27) {
                    result = 55;
                } else if (number > 26 && number < 30) {
                    result = 60;
                } else if (number > 29 && number < 32) {
                    result = 65;
                } else if (number == 32) {
                    result = 68;
                } else if (number == 33) {
                    result = 70;
                } else if (number > 33 && number < 36) {
                    result = 71;
                } else if (number > 35 && number < 37) {
                    result = 73;
                } else if (number == 37) {
                    result = 74;
                } else if (number > 37 && number < 40) {
                    result = 75;
                } else if (number > 39 && number < 42) {
                    result = 77;
                } else if (number == 42) {
                    result = 80;
                } else if (number > 42 && number < 45) {
                    result = 82;
                } else if (number == 45) {
                    result = 85;
                } else if (number == 46) {
                    result = 86;
                } else if (number == 47) {
                    result = 87;
                } else if (number > 47 && number < 50) {
                    result = 88;
                } else if (number > 49 && number < 52) {
                    result = 90;
                } else if (number == 52) {
                    result = 92;
                } else if (number > 52 && number < 55) {
                    result = 93;
                } else if (number == 55) {
                    result = 94;
                } else if (number > 55 && number < 58) {
                    result = 95;
                } else if (number > 57 && number < 60) {
                    result = 96;
                } else if (number > 59 && number < 62) {
                    result = 97;
                } else if (number > 61 && number < 64) {
                    result = 98;
                } else if (number > 63 && number < 66) {
                    result = 99;
                } else if (number == 66) {
                    result = 100;
                } else {
                    result = 0;

                }
            }

        } else if (age <= 46 && age >= 48) {
            if (number > 62) {
                result = 100 + number - 62;
            } else {
                if (number > 21 && number < 25) {
                    result = 55;
                } else if (number > 24 && number < 27) {
                    result = 60;
                } else if (number > 26 && number < 29) {
                    result = 65;
                } else if (number > 28 && number < 32) {
                    result = 68;
                } else if (number == 32) {
                    result = 70;
                } else if (number == 33) {
                    result = 71;
                } else if (number == 34) {
                    result = 73;
                } else if (number == 35) {
                    result = 74;
                } else if (number == 36) {
                    result = 75;
                } else if (number == 37) {
                    result = 77;
                } else if (number == 38) {
                    result = 80;
                } else if (number == 39) {
                    result = 82;
                } else if (number == 40) {
                    result = 85;
                } else if (number == 41) {
                    result = 86;
                } else if (number == 42) {
                    result = 87;
                } else if (number > 42 && number < 45) {
                    result = 88;
                } else if (number > 44 && number < 47) {
                    result = 90;
                } else if (number == 47) {
                    result = 92;
                } else if (number > 47 && number < 50) {
                    result = 93;
                } else if (number > 49 && number < 52) {
                    result = 94;
                } else if (number > 51 && number < 54) {
                    result = 95;
                } else if (number > 53 && number < 56) {
                    result = 96;
                } else if (number > 55 && number < 58) {
                    result = 97;
                } else if (number > 57 && number < 60) {
                    result = 98;
                } else if (number > 59 && number < 62) {
                    result = 99;
                } else if (number == 62) {
                    result = 100;
                } else {
                    result = 0;

                }
            }

        } else if (age <= 49 && age >= 51) {
            if (number > 58) {
                result = 100 + number - 58;
            } else {
                if (number > 19 && number < 23) {
                    result = 55;
                } else if (number > 22 && number < 25) {
                    result = 60;
                } else if (number > 24 && number < 27) {
                    result = 65;
                } else if (number == 27) {
                    result = 68;
                } else if (number == 28) {
                    result = 70;
                } else if (number == 29) {
                    result = 71;
                } else if (number == 30) {
                    result = 73;
                } else if (number == 31) {
                    result = 74;
                } else if (number > 31 && number < 34) {
                    result = 75;
                } else if (number == 34) {
                    result = 77;
                } else if (number == 35) {
                    result = 80;
                } else if (number == 36) {
                    result = 82;
                } else if (number == 37) {
                    result = 85;
                } else if (number == 38) {
                    result = 87;
                } else if (number == 39) {
                    result = 88;
                } else if (number > 39 && number < 42) {
                    result = 90;
                } else if (number == 42) {
                    result = 92;
                } else if (number > 42 && number < 45) {
                    result = 93;
                } else if (number > 44 && number < 47) {
                    result = 94;
                } else if (number > 46 && number < 49) {
                    result = 95;
                } else if (number > 48 && number < 51) {
                    result = 96;
                } else if (number > 50 && number < 53) {
                    result = 97;
                } else if (number > 52 && number < 55) {
                    result = 98;
                } else if (number > 54 && number < 58) {
                    result = 99;
                } else if (number == 58) {
                    result = 100;
                } else {
                    result = 0;

                }
            }
        } else if (age <= 52 && age >= 54) {
            if (number > 54) {
                result = 100 + number - 54;
            } else {
                if (number > 17 && number < 20) {
                    result = 55;
                } else if (number > 19 && number < 23) {
                    result = 60;
                } else if (number == 23) {
                    result = 65;
                } else if (number == 24) {
                    result = 68;
                } else if (number == 25) {
                    result = 70;
                } else if (number == 26) {
                    result = 73;
                } else if (number == 27) {
                    result = 74;
                } else if (number == 28) {
                    result = 75;
                } else if (number == 29) {
                    result = 77;
                } else if (number > 29 && number < 32) {
                    result = 80;
                } else if (number == 32) {
                    result = 82;
                } else if (number == 33) {
                    result = 86;
                } else if (number == 34) {
                    result = 88;
                } else if (number > 34 && number < 37) {
                    result = 90;
                } else if (number == 37) {
                    result = 92;
                } else if (number > 37 && number < 40) {
                    result = 93;
                } else if (number > 39 && number < 42) {
                    result = 94;
                } else if (number > 41 && number < 44) {
                    result = 95;
                } else if (number > 43 && number < 46) {
                    result = 96;
                } else if (number > 45 && number < 48) {
                    result = 97;
                } else if (number > 47 && number < 51) {
                    result = 98;
                } else if (number > 50 && number < 54) {
                    result = 99;
                } else if (number == 54) {
                    result = 100;
                } else {
                    result = 0;

                }
            }
        } else if (age <= 55 && age >= 57) {
            if (number > 50) {
                result = 100 + number - 50;
            } else {
                if (number == 16) {
                    result = 55;
                } else if (number == 17) {
                    result = 60;
                } else if (number == 18) {
                    result = 65;
                } else if (number == 19) {
                    result = 68;
                } else if (number == 20) {
                    result = 70;
                } else if (number == 21) {
                    result = 71;
                } else if (number == 22) {
                    result = 73;
                } else if (number == 23) {
                    result = 75;
                } else if (number == 24) {
                    result = 77;
                } else if (number == 25) {
                    result = 80;
                } else if (number == 26) {
                    result = 85;
                } else if (number == 27) {
                    result = 86;
                } else if (number == 28) {
                    result = 87;
                } else if (number == 29) {
                    result = 88;
                } else if (number > 29 && number < 33) {
                    result = 90;
                } else if (number == 33) {
                    result = 92;
                } else if (number == 34) {
                    result = 93;
                } else if (number > 34 && number < 37) {
                    result = 94;
                } else if (number > 36 && number < 40) {
                    result = 95;
                } else if (number > 39 && number < 42) {
                    result = 96;
                } else if (number > 41 && number < 44) {
                    result = 97;
                } else if (number > 43 && number < 47) {
                    result = 98;
                } else if (number > 46 && number < 50) {
                    result = 99;
                } else if (number == 50) {
                    result = 100;
                } else {
                    esult = 0;

                }
            }
        } else if (age <= 58 && age >= 60) {
            if (number > 44) {
                result = 100 + number - 44;
            } else {
                if (number > 9 && number < 12) {
                    result = 55;
                } else if (number == 12) {
                    result = 60;
                } else if (number == 13) {
                    result = 65;
                } else if (number == 14) {
                    result = 68;
                } else if (number == 15) {
                    result = 70;
                } else if (number == 16) {
                    result = 73;
                } else if (number == 17) {
                    result = 74;
                } else if (number == 18) {
                    result = 75;
                } else if (number == 19) {
                    result = 77;
                } else if (number == 20) {
                    result = 80;
                } else if (number == 21) {
                    result = 82;
                } else if (number == 22) {
                    result = 85;
                } else if (number == 23) {
                    result = 87;
                } else if (number == 24) {
                    result = 88;
                } else if (number > 24 && number < 27) {
                    result = 90;
                } else if (number > 26 && number < 29) {
                    result = 92;
                } else if (number > 28 && number < 31) {
                    result = 93;
                } else if (number > 30 && number < 33) {
                    result = 94;
                } else if (number > 32 && number < 35) {
                    result = 95;
                } else if (number > 34 && number < 38) {
                    result = 96;
                } else if (number > 37 && number < 40) {
                    result = 97;
                } else if (number > 39 && number < 42) {
                    result = 98;
                } else if (number > 41 && number < 44) {
                    result = 99;
                } else if (number == 44) {
                    result = 100;
                } else {
                    result = 0;

                }
            }

        }
    } else {

        if (age <= 42 && age >= 40) {
            woman(number);

        } else if (age <= 45 && age >= 43) {
            woman(number + 1);

        } else if (age <= 46 && age >= 48) {
            woman(number + 2);
        } else if (age <= 49 && age >= 51) {
            woman(number + 3);
        } else if (age <= 52 && age >= 54) {
            woman(number + 4);

        } else if (age <= 55 && age >= 57) {

            woman(number + 5);
        } else if (age <= 58 && age >= 60) {
            woman(number + 6);

        }
    }

    $("#pushUp-tip").html("分数：" + result);
    $("#pushUpScore").val(result);
}

function woman(number) {
    if (number > 21) {
        result = 100 + number - 21;
    } else if (number < 8) {
        result = 0;

    } else {
        switch (number) {
            case 8:
                result = 55;
                break;
            case 9:
                result = 60;
                break;
            case 10:
                result = 65;
                break;
            case 11:
                result = 70;
                break;
            case 12:
                result = 75;
                break;
            case 13:
                result = 80;
                break;
            case 14:
                result = 85;
                break;
            case 15:
                result = 90;
                break;
            case 16:
                result = 95;
                break;
            case 17:
                result = 96;
                break;
            case 18:
                result = 97;
                break;
            case 19:
                result = 98;
                break;
            case 20:
                result = 99;
                break;
            case 21:
                result = 100;
                break;
        }
    }

}

//---------------------------------曲臂悬垂----------------------------------------------------------------------------------//

function MyhangScore() {
    var array = $("#hang").val().split(":");
    var mm = parseInt(array[0]);
    var ss = parseInt(array[1]);
    var duration = mm * 60 + ss;
    if (sex == "女") {
        if (age <= 19 || (age <= 27 && age >= 25)) {
            getHangScore(duration + 5);

        } else if (age <= 24 && age >= 20) {
            getHangScore(duration);

        } else if (age <= 30 && age >= 28) {
            if (duration <= 28) {

                getHangScore(duration + 8);
            } else if (duration <= 53 && duration > 28) {
                getHangScore(duration + 7);
            } else if (duration == 54) {

                getHangScore(duration + 8);
            } else if (duration == 55) {
                getHangScore(duration + 9);
            } else if (duration == 56) {
                getHangScore(duration + 10);
            } else if (duration == 57) {
                getHangScore(duration + 11);
            } else if (duration == 58) {
                getHangScore(duration + 12);
            } else if (duration == 59) {
                getHangScore(duration + 13);
            } else if (duration == 60) {
                getHangScore(duration + 14);
            } else if (duration == 62) {
                getHangScore(duration + 14);
            } else if (duration == 63) {
                getHangScore(duration + 15);
            } else if (duration == 64) {
                getHangScore(duration + 16);
            }
        } else if (age <= 33 && age >= 31) {
            if (duration <= 22) {

                getHangScore(duration + 22);
            } else if (duration <= 50 && duration > 22) {
                getHangScore(duration + 10);
            } else if (duration == 51) {

                getHangScore(duration + 11);
            } else if (duration == 52) {
                getHangScore(duration + 12);
            } else if (duration == 53) {
                getHangScore(duration + 13);
            } else if (duration == 54) {
                getHangScore(duration + 14);
            } else if (duration == 55) {
                getHangScore(duration + 15);
            } else if (duration == 56) {
                getHangScore(duration + 16);
            } else if (duration == 57) {
                getHangScore(duration + 17);
            } else if (duration == 58) {
                getHangScore(duration + 18);
            } else if (duration == 59) {
                getHangScore(duration + 19);
            } else if (duration == 60) {
                getHangScore(duration + 20);
            }

        } else if (age <= 36 && age >= 34) {
            if (duration <= 19) {

                getHangScore(duration + 14);
            } else if (duration <= 47 && duration > 19) {
                getHangScore(duration + 13);
            } else if (duration == 48) {

                getHangScore(duration + 14);
            } else if (duration == 49) {
                getHangScore(duration + 15);
            } else if (duration == 50) {
                getHangScore(duration + 16);
            } else if (duration == 51) {
                getHangScore(duration + 17);
            } else if (duration == 52) {
                getHangScore(duration + 18);
            } else if (duration == 53) {
                getHangScore(duration + 19);
            } else if (duration == 54) {
                getHangScore(duration + 20);
            } else if (duration == 55) {
                getHangScore(duration + 21);
            } else if (duration == 56) {
                getHangScore(duration + 22);
            } else if (duration == 57) {
                getHangScore(duration + 23);
            }
        } else if (age <= 39 && age >= 37) {
            if (duration <= 16) {

                getHangScore(duration + 17);
            } else if (duration <= 44 && duration > 16) {
                getHangScore(duration + 16);
            } else if (duration == 45) {

                getHangScore(duration + 17);
            } else if (duration == 46) {
                getHangScore(duration + 18);
            } else if (duration == 47) {
                getHangScore(duration + 19);
            } else if (duration == 48) {
                getHangScore(duration + 20);
            } else if (duration == 49) {
                getHangScore(duration + 21);
            } else if (duration == 50) {
                getHangScore(duration + 22);
            } else if (duration == 51) {
                getHangScore(duration + 23);
            } else if (duration == 52) {
                getHangScore(duration + 24);
            } else if (duration == 53) {
                getHangScore(duration + 25);
            } else if (duration == 54) {
                getHangScore(duration + 26);
            }
        }
    }
    $("#hang-tip").html("成绩：" + result);
    $("#hangScore").val(result);
}

function getHangScore(duration) {

    if (duration > 80) {
        result = (100 + (duration - 80) / 3).toFixed(0);
    } else if (duration < 30) {
        result = 0;

    } else {
        switch (duration) {
            case 30:
                result = 55;
                break;
            case 33:
                result = 60;
                break;
            case 35:
                result = 65;
                break;
            case 36:
                result = 66;
                break;
            case 37:
                result = 67;
                break;
            case 38:
                result = 68;
                break;
            case 39:
                result = 69;
                break;
            case 40:
                result = 70;
                break;
            case 41:
                result = 71;
                break;
            case 42:
                result = 72;
                break;
            case 43:
                result = 73;
                break;
            case 44:
                result = 74;
                break;
            case 45:
                result = 75;
                break;
            case 46:
                result = 76;
                break;
            case 47:
                result = 77;
                break;
            case 48:
                result = 78;
                break;
            case 49:
                result = 79;
                break;
            case 50:
                result = 80;
                break;
            case 51:
                result = 81;
                break;
            case 52:
                result = 82;
                break;
            case 53:
                result = 83;
                break;
            case 54:
                result = 84;
                break;
            case 55:
                result = 85;
                break;
            case 56:
                result = 86;
                break;
            case 57:
                result = 87;
                break;
            case 58:
                result = 88;
                break;
            case 59:
                result = 89;
                break;
            case 60:
                result = 90;
                break;
            case 62:
                result = 91;
                break;
            case 64:
                result = 92;
                break;
            case 66:
                result = 93;
                break;
            case 68:
                result = 94;
                break;
            case 70:
                result = 95;
                break;
            case 72:
                result = 96;
                break;
            case 74:
                result = 97;
                break;
            case 76:
                result = 98;
                break;
            case 78:
                result = 99;
                break;
            case 80:
                result = 100;
                break;
        }
    }

}

//----------------------------------------------------------------------仰卧起坐---------------------------------------------------------------------------//

function MysitUpScore() {
    var number = parseInt($("#sitUp").val());
    if (sex == "男") {
        if (age <= 19 || (age <= 27 && age >= 25)) {
            if (number == 45) {
                getSitUpScore(number + 1);
            } else {
                getSitUpScore(number + 2);
            }
        } else if (age <= 24 && age >= 20) {
            getSitUpScore(number);
        } else if (age <= 30 && age >= 28) {
            getSitUpScore(number + 4);
        } else if (age <= 33 && age >= 31) {
            getSitUpScore(number + 6);
        } else if (age <= 36 && age >= 34) {
            getSitUpScore(number + 8);
        } else if (age <= 39 && age >= 37) {
            getSitUpScore(number + 10);
        } else if (age <= 42 && age >= 40) {
            getSitUpScore(number + 12);
        } else if (age <= 45 && age >= 43) {
            getSitUpScore(number + 14);
        } else if (age <= 48 && age >= 46) {
            getSitUpScore(number + 16);
        } else if (age <= 51 && age >= 49) {
            getSitUpScore(number + 18);
        } else if (age <= 54 && age >= 52) {
            getSitUpScore(number + 20);
        } else if (age <= 57 && age >= 55) {
            getSitUpScore(number + 22);
        } else if (age <= 60 && age >= 58) {
            getSitUpScore(number + 24);
        }

    } else {//女
        if (age <= 19 || (age <= 27 && age >= 25)) {

            getWomanSitUpScore(number + 3);

        } else if (age <= 24 && age >= 20) {

            getWomanSitUpScore(number);
        } else if (age <= 30 && age >= 28) {

            getWomanSitUpScore(number + 5);

        } else if (age <= 33 && age >= 31) {

            getWomanSitUpScore(number + 7);

        } else if (age <= 36 && age >= 34) {

            getWomanSitUpScore(number + 9);

        } else if (age <= 39 && age >= 37) {

            getWomanSitUpScore(number + 11);

        } else if (age <= 42 && age >= 40) {

            getWomanSitUpScore(number + 13);

        } else if (age <= 45 && age >= 43) {
            getWomanSitUpScore(number + 15);

        } else if (age <= 48 && age >= 46) {

            getWomanSitUpScore(number + 17);

        } else if (age <= 51 && age >= 49) {
            getWomanSitUpScore(number + 22);

        } else if (age <= 54 && age >= 52) {
            getWomanSitUpScore(number + 24);

        } else if (age <= 57 && age >= 55) {
            getWomanSitUpScore(number + 26);

        } else if (age <= 60 && age >= 58) {
            getWomanSitUpScore(number + 28);

        }
    }
    $("#sitUp-tip").html("成绩:" + result);
    $("#situpScore").val(result);
    myTotalScore();
}

function getSitUpScore(number) {

    if (number > 80) {
        result = (100 + (number - 80) / 2).toFixed(0);
    } else if (number < 46) {
        result = 0;
    } else {
        switch (number) {
            case 46:
                result = 55;
                break;
            case 47:
                result = 55;
                break;
            case 48:
                result = 55;
                break;
            case 49:
                result = 55;
                break;
            case 50:
                result = 60;
                break;
            case 51:
                result = 60;
                break;
            case 52:
                result = 60;
                break;
            case 53:
                result = 60;
                break;
            case 54:
                result = 65;
                break;
            case 55:
                result = 65;
                break;
            case 56:
                result = 65;
                break;
            case 57:
                result = 65;
                break;
            case 58:
                result = 70;
                break;
            case 59:
                result = 72;
                break;
            case 60:
                result = 74;
                break;
            case 61:
                result = 75;
                break;
            case 62:
                result = 76;
                break;
            case 63:
                result = 78;
                break;
            case 64:
                result = 80;
                break;
            case 65:
                result = 82;
                break;
            case 66:
                result = 84;
                break;
            case 67:
                result = 85;
                break;
            case 68:
                result = 86;
                break;
            case 69:
                result = 88;
                break;
            case 70:
                result = 90;
                break;
            case 71:
                result = 91;
                break;
            case 72:
                result = 92;
                break;
            case 73:
                result = 93;
                break;
            case 74:
                result = 94;
                break;
            case 75:
                result = 95;
                break;
            case 76:
                result = 96;
                break;
            case 77:
                result = 97;
                break;
            case 78:
                result = 98;
                break;
            case 79:
                result = 99;
                break;
            case 80:
                result = 100;
                break;


        }
    }
}

function getWomanSitUpScore(number) {

    if (number > 67) {
        result = (100 + (number - 67) / 2).toFixed(0);
    } else if (number < 41) {
        result = 0;
    } else {

        switch (number) {
            case 41:
                result = 55;
                break;
            case 42:
                result = 60;
                break;
            case 43:
                result = 65;
                break;
            case 44:
                result = 66;
                break;
            case 45:
                result = 67;
                break;
            case 46:
                result = 68;
                break;
            case 47:
                result = 70;
                break;
            case 48:
                result = 72;
                break;
            case 49:
                result = 74;
                break;
            case 50:
                result = 75;
                break;
            case 51:
                result = 78;
                break;
            case 52:
                result = 80;
                break;
            case 53:
                result = 82;
                break;
            case 54:
                result = 84;
                break;
            case 55:
                result = 85;
                break;
            case 56:
                result = 88;
                break;
            case 57:
                result = 90;
                break;
            case 58:
                result = 91;
                break;
            case 59:
                result = 92;
                break;
            case 60:
                result = 93;
                break;
            case 61:
                result = 94;
                break;
            case 62:
                result = 95;
                break;
            case 63:
                result = 96;
                break;
            case 64:
                result = 97;
                break;
            case 65:
                result = 98;
                break;
            case 66:
                result = 99;
                break;
            case 67:
                result = 100;
                break;

        }
    }

}

//--------------------------------------------------------------------------------蛇形跑-----------------------------------------------

function MysnakeRunScore() {
    var snakeRunarray = $("#snakeRun").val().split(":");
    var ss = parseInt(snakeRunarray[0]);
    var ms = parseInt(snakeRunarray[1]);
    var dms = ms + ss * 100;

    if (sex == "男") {
        if (age <= 19 || (age <= 27 && age >= 25)) {
            if (dms == 2150) {

                getSnakeRunScore(dms - 50);
            } else if (dms == 2100) {
                getSnakeRunScore(dms - 30);

            } else {
                getSnakeRunScore(dms - 20);

            }
        } else if (age <= 24 && age >= 20) {
            getSnakeRunScore(dms);
        } else if (age <= 30 && age >= 28) {
            if (dms == 2170) {

                getSnakeRunScore(dms - 70);
            } else if (dms == 2120) {
                getSnakeRunScore(dms - 50);

            } else {
                getSnakeRunScore(dms - 40);

            }
        } else if (age <= 33 && age >= 31) {
            if (dms == 2190) {

                getSnakeRunScore(dms - 90);
            } else if (dms == 2140) {
                getSnakeRunScore(dms - 70);

            } else {
                getSnakeRunScore(dms - 60);

            }
        } else if (age <= 36 && age >= 34) {
            if (dms == 2210) {

                getSnakeRunScore(dms - 110);
            } else if (dms == 2100) {
                getSnakeRunScore(dms - 90);

            } else {
                getSnakeRunScore(dms - 80);

            }
        } else if (age <= 39 && age >= 37) {
            if (dms == 2230) {

                getSnakeRunScore(dms - 130);
            } else if (dms == 2180) {
                getSnakeRunScore(dms - 110);

            } else {
                getSnakeRunScore(dms - 100);

            }

        } else if (age <= 42 && age >= 40) {
            if (dms == 2250) {

                getSnakeRunScore(dms - 150);
            } else if (dms == 2200) {
                getSnakeRunScore(dms - 130);

            } else {
                getSnakeRunScore(dms - 120);

            }
        } else if (age <= 45 && age >= 43) {
            if (dms == 2270) {

                getSnakeRunScore(dms - 170);
            } else if (dms == 2200) {
                getSnakeRunScore(dms - 150);

            } else {
                getSnakeRunScore(dms - 140);

            }
        } else if (age <= 48 && age >= 46) {
            if (dms == 2290) {

                getSnakeRunScore(dms - 190);
            } else if (dms == 2240) {
                getSnakeRunScore(dms - 170);

            } else {
                getSnakeRunScore(dms - 160);

            }
        } else if (age <= 51 && age >= 49) {
            if (dms == 2310) {

                getSnakeRunScore(dms - 210);
            } else if (dms == 2260) {
                getSnakeRunScore(dms - 190);

            } else {
                getSnakeRunScore(dms - 180);

            }
        } else if (age <= 54 && age >= 52) {
            if (dms == 2330) {

                getSnakeRunScore(dms - 230);
            } else if (dms == 2280) {
                getSnakeRunScore(dms - 210);

            } else {
                getSnakeRunScore(dms - 200);

            }
        } else if (age <= 57 && age >= 55) {
            if (dms == 2350) {

                getSnakeRunScore(dms - 250);
            } else if (dms == 2300) {
                getSnakeRunScore(dms - 230);

            } else {
                getSnakeRunScore(dms - 220);

            }
        } else if (age <= 60 && age >= 58) {
            if (dms == 2370) {

                getSnakeRunScore(dms - 270);
            } else if (dms == 2320) {
                getSnakeRunScore(dms - 250);

            } else {
                getSnakeRunScore(dms - 240);

            }
        }

    } else {//女
        dms = dms - 300;
        if (age <= 19 || (age <= 27 && age >= 25)) {

            if (dms == 2150) {

                getSnakeRunScore(dms - 50);
            } else if (dms == 2100) {
                getSnakeRunScore(dms - 30);

            } else {
                getSnakeRunScore(dms - 20);

            }
        } else if (age <= 24 && age >= 20) {
            getSnakeRunScore(dms);
        } else if (age <= 30 && age >= 28) {
            if (dms == 2170) {

                getSnakeRunScore(dms - 70);
            } else if (dms == 2120) {
                getSnakeRunScore(dms - 50);

            } else {
                getSnakeRunScore(dms - 40);

            }
        } else if (age <= 33 && age >= 31) {
            if (dms == 2190) {

                getSnakeRunScore(dms - 90);
            } else if (dms == 2140) {
                getSnakeRunScore(dms - 70);

            } else {
                getSnakeRunScore(dms - 60);

            }
        } else if (age <= 36 && age >= 34) {
            if (dms == 2210) {

                getSnakeRunScore(dms - 110);
            } else if (dms == 2100) {
                getSnakeRunScore(dms - 90);

            } else {
                getSnakeRunScore(dms - 80);

            }
        } else if (age <= 39 && age >= 37) {
            if (dms == 2230) {

                getSnakeRunScore(dms - 130);
            } else if (dms == 2180) {
                getSnakeRunScore(dms - 110);

            } else {
                getSnakeRunScore(dms - 100);

            }

        } else if (age <= 42 && age >= 40) {
            if (dms == 2250) {

                getSnakeRunScore(dms - 150);
            } else if (dms == 2200) {
                getSnakeRunScore(dms - 130);

            } else {
                getSnakeRunScore(dms - 120);

            }
        } else if (age <= 45 && age >= 43) {
            if (dms == 2270) {

                getSnakeRunScore(dms - 170);
            } else if (dms == 2200) {
                getSnakeRunScore(dms - 150);

            } else {
                getSnakeRunScore(dms - 140);

            }
        } else if (age <= 48 && age >= 46) {
            if (dms == 2290) {

                getSnakeRunScore(dms - 190);
            } else if (dms == 2240) {
                getSnakeRunScore(dms - 170);

            } else {
                getSnakeRunScore(dms - 160);

            }
        } else if (age <= 51 && age >= 49) {
            if (dms == 2310) {

                getSnakeRunScore(dms - 210);
            } else if (dms == 2260) {
                getSnakeRunScore(dms - 190);

            } else {
                getSnakeRunScore(dms - 180);

            }
        } else if (age <= 54 && age >= 52) {
            if (dms == 2330) {

                getSnakeRunScore(dms - 230);
            } else if (dms == 2280) {
                getSnakeRunScore(dms - 210);

            } else {
                getSnakeRunScore(dms - 200);

            }
        } else if (age <= 57 && age >= 55) {
            if (dms == 2350) {

                getSnakeRunScore(dms - 250);
            } else if (dms == 2300) {
                getSnakeRunScore(dms - 230);

            } else {
                getSnakeRunScore(dms - 220);

            }
        } else if (age <= 60 && age >= 58) {
            if (dms == 2370) {

                getSnakeRunScore(dms - 270);
            } else if (dms == 2320) {
                getSnakeRunScore(dms - 250);

            } else {
                getSnakeRunScore(dms - 240);

            }
        }

    }
    $("#snakeRun-tip").html("成绩:" + result);
    $("#snakeRunScore").val(result);
}

function getSnakeRunScore(ms) {
    if (ms < 1800) {
        result = (100 + (1800 - ms) / 10).toFixed(0);
    } else if (ms > 2100) {
        result = 0;

    } else {
        switch (ms) {
            case 2100:
                result = 55;
                break;
            case 2090:
                result = 55;
                break;
            case 2080:
                result = 55;
                break;
            case 2070:
                result = 60;
                break;
            case 2060:
                result = 60;
                break;
            case 2050:
                result = 65;
                break;
            case 2040:
                result = 66;
                break;
            case 2030:
                result = 67;
                break;
            case 2020:
                result = 68;
                break;
            case 2010:
                result = 69;
                break;
            case 2000:
                result = 70;
                break;
            case 1990:
                result = 71;
                break;
            case 1980:
                result = 72;
                break;
            case 1970:
                result = 73;
                break;
            case 1960:
                result = 74;
                break;
            case 1950:
                result = 75;
                break;
            case 1940:
                result = 76;
                break;
            case 1930:
                result = 77;
                break;
            case 1920:
                result = 78;
                break;
            case 1910:
                result = 79;
                break;
            case 1900:
                result = 80;
                break;
            case 1890:
                result = 82;
                break;
            case 1880:
                result = 84;
                break;
            case 1870:
                result = 86;
                break;
            case 1860:
                result = 88;
                break;
            case 1850:
                result = 90;
                break;
            case 1840:
                result = 92;
                break;
            case 1830:
                result = 94;
                break;
            case 1820:
                result = 96;
                break;
            case 1810:
                result = 98;
                break;
            case 1800:
                result = 100;
                break;
        }

    }

}

//--------------------------------------------三公里-------------------------------------------------------------------

function MyrunningScore() {
    var runningArray = $("#running").val().split(":");
    var mm = parseInt(runningArray[0]);
    var ss = parseInt(runningArray[1]);
    var times = ss + mm * 60;
    if (sex == "男") {
        if (age <= 19 || (age <= 27 && age >= 25)) {
            getrunningScore(times - 12);
        } else if (age <= 24 && age >= 20) {
            getrunningScore(times);
        } else if (age <= 30 && age >= 28) {
            getrunningScore(times - 48);

        } else if (age <= 33 && age >= 31) {
            getrunningScore(times - 84);

        } else if (age <= 36 && age >= 34) {
            getrunningScore(times - 120);

        } else if (age <= 39 && age >= 37) {
            getrunningScore(times - 156);

        } else if (age <= 42 && age >= 40) {
            getrunningScore(times - 192);

        } else if (age <= 45 && age >= 43) {
            getrunningScore(times - 228);

        } else if (age <= 48 && age >= 46) {
            getrunningScore(times - 264);

        } else if (age <= 51 && age >= 49) {
            getrunningScore(times - 300);

        } else if (age <= 54 && age >= 52) {
            getrunningScore(times - 336);

        } else if (age <= 57 && age >= 55) {
            getrunningScore(times - 372);

        } else if (age <= 60 && age >= 58) {
            getrunningScore(times - 408);

        }

    } else {//女
        times = times - 150;
        if (age <= 19 || (age <= 27 && age >= 25)) {
            getrunningScore(times - 13);

        } else if (age <= 24 && age >= 20) {

            getrunningScore(times);

        } else if (age <= 30 && age >= 28) {
            getrunningScore(times - 52);
        } else if (age <= 33 && age >= 31) {
            getrunningScore(times - 91);
        } else if (age <= 36 && age >= 34) {
            getrunningScore(times - 130);
        } else if (age <= 39 && age >= 37) {
            getrunningScore(times - 169);

        } else if (age <= 42 && age >= 40) {
            getrunningScore(times - 208);
        } else if (age <= 45 && age >= 43) {
            getrunningScore(times - 247);
        } else if (age <= 48 && age >= 46) {
            getrunningScore(times - 286);
        } else if (age <= 51 && age >= 49) {
            getrunningScore(times - 325);
        } else if (age <= 54 && age >= 52) {
            getrunningScore(times - 364);
        } else if (age <= 57 && age >= 55) {
            getrunningScore(times - 403);
        } else if (age <= 60 && age >= 58) {
            getrunningScore(times - 442);
        }

    }
    $("#runningScore").val(result);
    $("#running-tip").html("成绩:" + result);

}

function getrunningScore(times) {
    if (times == 0) {
            result =0;
    } else if (times < 690) {
        result = (100 + (690 - times) / 5).toFixed(0);
    } else if (times >= 690 && times < 695) {
        result = 100;
    } else if (times >= 695 && times < 700) {
        result = 99;
    } else if (times >= 700 && times < 705) {
        result = 98;
    } else if (times >= 705 && times < 710) {
        result = 97;
    } else if (times >= 710 && times < 715) {
        result = 96;
    } else if (times >= 715 && times < 718) {
        result = 95;
    } else if (times >= 718 && times < 721) {
        result = 94;
    } else if (times >= 721 && times < 724) {
        result = 93;
    } else if (times >= 721 && times < 727) {
        result = 92;
    } else if (times >= 727 && times < 730) {
        result = 91;
    } else if (times >= 730 && times < 733) {
        result = 90;
    } else if (times >= 733 && times < 736) {
        result = 89;
    } else if (times >= 736 && times < 739) {
        result = 88;
    } else if (times >= 739 && times < 742) {
        result = 87;
    } else if (times >= 742 && times < 745) {
        result = 86;
    } else if (times >= 745 && times < 748) {
        result = 85;
    } else if (times >= 748 && times < 751) {
        result = 84;
    } else if (times >= 751 && times < 754) {
        result = 83;
    } else if (times >= 754 && times < 757) {
        result = 82;
    } else if (times >= 757 && times < 760) {
        result = 81;
    } else if (times >= 760 && times < 763) {
        result = 80;
    } else if (times >= 763 && times < 766) {
        result = 79;
    } else if (times >= 766 && times < 769) {
        result = 78;
    } else if (times >= 769 && times < 772) {
        result = 77;
    } else if (times >= 772 && times < 775) {
        result = 76;
    } else if (times >= 775 && times < 778) {
        result = 75;
    } else if (times >= 778 && times < 781) {
        result = 74;
    } else if (times >= 781 && times < 784) {
        result = 73;
    } else if (times >= 784 && times < 787) {
        result = 72;
    } else if (times >= 787 && times < 790) {
        result = 71;
    } else if (times >= 790 && times < 794) {
        result = 70;
    } else if (times >= 794 && times < 798) {
        result = 69;
    } else if (times >= 798 && times < 802) {
        result = 68;
    } else if (times >= 802 && times < 806) {
        result = 67;
    } else if (times >= 806 && times < 810) {
        result = 66;
    } else if (times >= 810 && times < 815) {
        result = 65;
    } else if (times >= 815 && times < 820) {
        result = 60;
    } else if (times == 820) {
        result = 55;
    }

}

//计算总成绩

function myTotalScore() {
    var hang = parseInt($("#hangScore").val());
    var sitUp = parseInt($("#situpScore").val());
    var running = parseInt($("#runningScore").val());
    var snakeRun = parseInt($("#snakeRunScore").val());
    var pushUp = parseInt($("#pushUpScore").val());
    var pullUp = parseInt($("#pullUpScore").val());

    if (isNaN(hang)) {
        hang = 0;
    }
    if (isNaN(sitUp)) {
        sitUp = 0;
    }
    if (isNaN(running)) {
        running = 0;
    }
    if (isNaN(snakeRun)) {
        snakeRun = 0;
    }
    if (isNaN(pushUp)) {
        pushUp = 0;
    }
    if (isNaN(pullUp)) {
        pullUp = 0;
    }


    $("#totalScore").val(hang + sitUp + running + snakeRun + pushUp + pullUp);
}