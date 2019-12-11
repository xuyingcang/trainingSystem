var age = null;
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
    } else {
        $("#bodyType-tip").html("合格");

    }
    //展示结果
    $("#bodyType").val(result.toFixed(1));

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

/*-----------------------------------------------------------------------------------------------------------------------*/

//计算单杠的成绩

function pullUpScore() {
    var number = $("#pullUp").val();
    if (sex == 男) {
        if (age <= 19 || (age <= 27 && age >= 25)) {
            getResult(number);
        } else if (age <= 24 && age >= 20) {
            if (number > 35) {
                result = 100 + number - 35;
            } else {

                switch (number) {

                    case 10:
                        result = 55;
                        break;
                    case 11:
                        result = 60;
                        break;
                    case   12:
                        result = 65;
                        break;
                    case 13:
                        result = 68;
                        break;
                    case 14:
                        result = 70;
                        break;
                    case   15:
                        result = 71;
                        break;
                    case  16:
                        result = 73;
                        break;
                    case 17:
                        result = 74;
                        break;
                    case     18:
                        result = 75;
                        break;
                    case     19:
                        result = 77;
                        break;
                    case      20:
                        result = 80;
                        break;
                    case       21:
                        result = 82;
                        break;
                    case      22:
                        result = 85;
                        break;
                    case     23:
                        result = 86;
                        break;
                    case    24:
                        result = 87;
                        break;
                    case     25:
                        result = 88;
                        break;
                    case    26:
                        result = 90;
                        break;
                    case    27:
                        result = 92;
                        break;
                    case    28:
                        result = 93;
                        break;
                    case   29:
                        result = 94;
                        break;
                    case  30:
                        result = 95;
                        break;
                    case   31:
                        result = 96;
                        break;
                    case   32:
                        result = 97;
                        break;
                    case   33:
                        result = 98;
                        break;
                    case   34:
                        result = 99;
                        break;
                    case   35:
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
            } else {

                switch (number) {
                    case  7 :
                        result = 55;
                        break;
                    case 8 :
                        result = 60;
                        break;
                    case  9 :
                        result = 65;
                        break;
                    case   10:
                        result = 70;
                        break;
                    case    11:
                        result = 74;
                        break;
                    case    12:
                        result = 77;
                        break;
                    case   13:
                        result = 80;
                        break;
                    case   14:
                        result = 82;
                        break;
                    case   15:
                        result = 85;
                        break;
                    case  16:
                        result = 86;
                        break;
                    case   17:
                        result = 87;
                        break;
                    case   18:
                        result = 88;
                        break;
                    case   19:
                        result = 90;
                        break;
                    case   20:
                        result = 92;
                        break;
                    case   21:
                        result = 93;
                        break;
                    case   22:
                        result = 94;
                        break;
                    case      23:
                        result = 95;
                        break;
                    case       24:
                        result = 96;
                        break;
                    case    25:
                        result = 97;
                        break;
                    case    26:
                        result = 98;
                        break;
                    case     27:
                        result = 99;
                        break;
                    case     28:
                        result = 100;
                        break;
                }
            }
        } else if (age <= 36 && age >= 34) {
            if (number > 26) {
                result = 100 + number - 26;
            } else {

                switch (number) {


                    case 6:
                        result = 55;
                        break;
                        case7: result = 60;
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
                    case  12:
                        result = 80;
                        break;
                        case13: result = 85;
                        break;
                    case 14:
                        result = 86;
                        break;
                    case  15:
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
                    case  20:
                        result = 94;
                        break;
                    case  21:
                        result = 95;
                        break;
                    case   22:
                        result = 96;
                        break;
                    case  23:
                        result = 97;
                        break;
                    case  24:
                        result = 98;
                        break;
                    case   25:
                        result = 99;
                        break;
                    case  26:
                        result = 100;
                        break;
                }

            }
        } else if (age <= 39 && age >= 37) {
            if (number > 24) {
                result = 100 + number - 24
            } else {

                switch (number) {
                    case    5:
                        result = 55;
                        break;
                    case   6:
                        result = 60;
                        break;
                    case  7:
                        result = 65;
                        break;
                    case    8:
                        result = 70;
                        break;
                    case  9:
                        result = 73;
                        break;
                    case 10:
                        result = 75;
                        break;
                    case   11:
                        result = 80;
                        break;
                    case   12:
                        result = 85;
                        break;
                    case   13:
                        result = 87;
                        break;
                    case    14:
                        result = 90;
                        break;
                    case  15:
                        result = 92;
                        break;
                    case  16:
                        result = 93;
                        break;
                    case 17:
                        result = 94;
                        break;
                    case 19:
                        result = 95;
                        break;
                    case  20:
                        result = 96;
                        break;
                    case  21:
                        result = 97;
                        break;
                    case  22:
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

}


function getResult(number) {
    if (number > 32) {
        result = 100 + number - 32;
    } else {
        switch (number) {
            case 9:
                result = 55;
                break;
            case  10:
                result = 60;
                break;
            case   11:
                result = 65;
                break;
            case    12:
                result = 70;
                break;
            case   13:
                result = 73;
                break;
            case  14:
                result = 75;
                break;
            case   15:
                result = 77;
                break;
            case   16:
                result = 80;
                break;
            case 17:
                result = 82;
                break;
            case  18:
                result = 85;
                break;
            case 19:
                result = 86;
                break;
            case  20:
                result = 87;
                break;
            case    21:
                result = 88;
                break;
            case    22:
                result = 90;
                break;
            case   23:
                result = 92;
                break;
            case    24:
                result = 93;
                break;
            case   25:
                result = 94;
                break;
            case   26:
                result = 95;
                break;
            case  27:
                result = 96;
                break;
            case   28:
                result = 97;
                break;
            case 29:
                result = 98;
                break;
            case 30:
                result = 99;
                break;
            case   32:
                result = 100;
                break;


        }
    }
}