function show_input(e) {

    pullupOrpushup(e);
    PassLine(e)
}


/**
 * 及格线
 */

function PassLine(e) {
    var age = e.params.data.age;
    var sex = e.params.data.sex;
    var pullUp = $("#pullUp");//单杠
    var pushUp = $("#pushUp");//俯卧撑
    var snakeRun = $("#snakeRun");//蛇形跑
    var running = $("#running");//3千米
    var sitUp = $("#sitUp");//仰卧起坐
    var hang = $("#hang");//曲臂悬垂
    if (age < 40) {
        if (sex == "男") {
            if (age <= 19 || (age <= 27 && age >= 25)) {
                pullUp.attr("placeholder", "10个为及格");
                sitUp.attr("placeholder", "48个为及格");
                snakeRun.attr("placeholder", "21″00为及格");
                running.attr("placeholder", "13′47″为及格");
            } else if (age <= 24 && age >= 20) {
                pullUp.attr("placeholder", "11个为及格");
                sitUp.attr("placeholder", "50个为及格");
                snakeRun.attr("placeholder", "20″70为及格");
                running.attr("placeholder", "13′35″为及格");

            } else if (age <= 30 && age >= 28) {
                pullUp.attr("placeholder", "9个为及格");
                sitUp.attr("placeholder", "46个为及格");
                snakeRun.attr("placeholder", "21″20为及格");
                running.attr("placeholder", "14′23″为及格");

            } else if (age <= 33 && age >= 31) {
                pullUp.attr("placeholder", "8个为及格");
                sitUp.attr("placeholder", "44个为及格");
                snakeRun.attr("placeholder", "21″40为及格");
                running.attr("placeholder", "14′59″为及格");

            } else if (age <= 36 && age >= 34) {
                pullUp.attr("placeholder", "7个为及格");
                sitUp.attr("placeholder", "42个为及格");
                snakeRun.attr("placeholder", "21″80为及格");
                running.attr("placeholder", "15′35″为及格");

            } else if (age <= 39 && age >= 37) {
                pullUp.attr("placeholder", "6个为及格");
                sitUp.attr("placeholder", "40个为及格");
                snakeRun.attr("placeholder", "22″00为及格");
                running.attr("placeholder", "16′11″为及格");

            }
        } else {//四十岁以下的女
            if (age <= 19 || (age <= 27 && age >= 25)) {
                hang.attr("placeholder", "28秒为及格");
                sitUp.attr("placeholder", "39个为及格");
                snakeRun.attr("placeholder", "24″00为及格");
                running.attr("placeholder", "16′18″为及格");
            } else if (age <= 24 && age >= 20) {
                hang.attr("placeholder", "33秒为及格");
                sitUp.attr("placeholder", "42个为及格");
                snakeRun.attr("placeholder", "23″70为及格");
                running.attr("placeholder", "16′05″为及格");

            } else if (age <= 30 && age >= 28) {
                hang.attr("placeholder", "25秒为及格");
                sitUp.attr("placeholder", "37个为及格");
                snakeRun.attr("placeholder", "24″20为及格");
                running.attr("placeholder", "16′57″为及格");

            } else if (age <= 33 && age >= 31) {
                hang.attr("placeholder", "22秒为及格");
                sitUp.attr("placeholder", "35个为及格");
                snakeRun.attr("placeholder", "24″40为及格");
                running.attr("placeholder", "17′36″为及格");

            } else if (age <= 36 && age >= 34) {
                hang.attr("placeholder", "19秒为及格");
                sitUp.attr("placeholder", "33个为及格");
                snakeRun.attr("placeholder", "24″60为及格");
                running.attr("placeholder", "18′15″为及格");

            } else if (age <= 39 && age >= 37) {
                hang.attr("placeholder", "16秒为及格");
                sitUp.attr("placeholder", "31个为及格");
                snakeRun.attr("placeholder", "24″80为及格");
                running.attr("placeholder", "18′54″为及格");

            }
        }
    } else {
        if (sex == "男") {//四十岁以上的男
            if (age <= 42 && age >= 40) {
                pushUp.attr("placeholder", "28个为及格");
                sitUp.attr("placeholder", "38个为及格");
                snakeRun.attr("placeholder", "22″00为及格");
                running.attr("placeholder", "16′47″为及格");

            } else if (age <= 45 && age >= 43) {
                pushUp.attr("placeholder", "27个为及格");
                sitUp.attr("placeholder", "36个为及格");
                snakeRun.attr("placeholder", "22″20为及格");
                running.attr("placeholder", "17′23″为及格");

            } else if (age <= 46 && age >= 48) {
                pushUp.attr("placeholder", "25个为及格");
                sitUp.attr("placeholder", "34个为及格");
                snakeRun.attr("placeholder", "22″40为及格");
                running.attr("placeholder", "17′59″为及格");

            } else if (age <= 49 && age >= 51) {
                pushUp.attr("placeholder", "23个为及格");
                sitUp.attr("placeholder", "32个为及格");
                snakeRun.attr("placeholder", "22″60为及格");
                running.attr("placeholder", "18′35″为及格");

            } else if (age <= 52 && age >= 54) {
                pushUp.attr("placeholder", "20个为及格");
                sitUp.attr("placeholder", "30个为及格");
                snakeRun.attr("placeholder", "22″80为及格");
                running.attr("placeholder", "19′11″为及格");

            } else if (age <= 55 && age >= 57) {
                pushUp.attr("placeholder", "17个为及格");
                sitUp.attr("placeholder", "28个为及格");
                snakeRun.attr("placeholder", "23″00为及格");
                running.attr("placeholder", "19′47″为及格");

            } else if (age <= 58 && age >= 60) {
                pushUp.attr("placeholder", "12个为及格");
                sitUp.attr("placeholder", "26个为及格");
                snakeRun.attr("placeholder", "22″20为及格");
                running.attr("placeholder", "20′23″为及格");

            }
        } else {//四十岁以上的女

            if (age <= 42 && age >= 40) {
                pushUp.attr("placeholder", "9个为及格");
                sitUp.attr("placeholder", "29个为及格");
                snakeRun.attr("placeholder", "25″00为及格");
                running.attr("placeholder", "19′33″为及格");
            } else if (age <= 45 && age >= 43) {
                pushUp.attr("placeholder", "8个为及格");
                sitUp.attr("placeholder", "27个为及格");
                snakeRun.attr("placeholder", "25″40为及格");
                running.attr("placeholder", "20′12″为及格");

            } else if (age <= 46 && age >= 48) {
                pushUp.attr("placeholder", "7个为及格");
                sitUp.attr("placeholder", "25个为及格");
                snakeRun.attr("placeholder", "25″40为及格");
                running.attr("placeholder", "20′51″为及格");

            } else if (age <= 49 && age >= 51) {
                pushUp.attr("placeholder", "6个为及格");
                sitUp.attr("placeholder", "20个为及格");
                snakeRun.attr("placeholder", "25″60为及格");
                running.attr("placeholder", "21′30″为及格");

            } else if (age <= 52 && age >= 54) {
                pushUp.attr("placeholder", "5个为及格");
                sitUp.attr("placeholder", "18个为及格");
                snakeRun.attr("placeholder", "25″80为及格");
                running.attr("placeholder", "22′09″为及格");

            } else if (age <= 55 && age >= 57) {
                pushUp.attr("placeholder", "4个为及格");
                sitUp.attr("placeholder", "16个为及格");
                snakeRun.attr("placeholder", "26″00为及格");
                running.attr("placeholder", "22′48″为及格");

            } else if (age <= 58 && age >= 60) {
                pushUp.attr("placeholder", "3个为及格");
                sitUp.attr("placeholder", "14个为及格");
                snakeRun.attr("placeholder", "26″20为及格");
                running.attr("placeholder", "23′27″为及格");

            }
        }
    }


}


/**
 * 单杠还是俯卧撑
 * @param e
 */
function pullupOrpushup(e) {
    var age = e.params.data.age;
    var sex = e.params.data.sex;
    var pullUp = $("#pullUp");
    var hang = $("#hang");
    var pushUp = $("#pushUp");
    hang.attr("disabled", "disabled");
    pullUp.attr("disabled", "disabled");
    pushUp.attr("disabled", "disabled");
    hang.attr("lay-verify", "required");
    pushUp.attr("lay-verify", "required|number");
    pullUp.attr("lay-verify", "required|number");

    if (sex == "女") {
        if (age > 39) {
            pushUp.removeAttr("disabled");
            pullUp.attr("placeholder", "40岁以上不可填");
            pullUp.attr("lay-verify", "");
            hang.attr("placeholder", "40岁以上不可填");
            hang.attr("lay-verify", "");
        } else {
            hang.removeAttr("disabled");
            pushUp.attr("placeholder", "40岁以下不可填");
            pushUp.attr("lay-verify", "");
            pullUp.attr("placeholder", "女不可填");
            pullUp.attr("lay-verify", "");
        }
    } else {

        if (age > 39) {
            pushUp.removeAttr("disabled");
            pullUp.attr("placeholder", "40岁以上不可填");
            pullUp.attr("lay-verify", "");
            hang.attr("placeholder", "男不可填");
            hang.attr("lay-verify", "");

        } else {
            pullUp.removeAttr("disabled");
            pushUp.attr("placeholder", "40岁以下不可填");
            pushUp.attr("lay-verify", "");
            hang.attr("placeholder", "男不可填");
            hang.attr("lay-verify", "");

        }
    }
}
