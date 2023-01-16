const firstNum = document.querySelector("#firstNum");
const secondNum = document.querySelector("#secondNum");
const sign = document.querySelector("#sign");
const buttons = document.querySelectorAll("button");
let isExpressionClear = true;
let isOperationDefined = false;

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        actionHandler(btn.dataset.label);
    });
})

function actionHandler(data) {
    switch (data) {
        case 'C':
            clearHandler();
            break;
        case 'bsp':
            bspHandler();
            break;
        case '=':
            equalHandler();
            break;
        default:
            inputHandler(data);
    }
}

function clearHandler() {
    firstNum.innerText = "0";
    sign.innerText = "";
    secondNum.innerText = "";
    isExpressionClear = true;
    isOperationDefined = false;
    firstNum.style.color = "#000000";
    sign.style.color = "#000000";
}

function bspHandler() {
    if (secondNum.innerText != "") {
        secondNum.innerText = secondNum.innerText.substring(0, secondNum.innerText.length - 1);
    } else if (isOperationDefined) {
        sign.innerText = "";
        isOperationDefined = false
    } else {
        firstNum.innerText = firstNum.innerText.substring(0, firstNum.innerText.length - 1);
    }

    if (firstNum.innerText == '') {
        clearHandler();
    }
}

function equalHandler() {
    const result = eval(firstNum.innerText + sign.innerText + secondNum.innerText);
    clearHandler();
    firstNum.innerText = result;
    isExpressionClear = false;
}


function inputHandler(char) {
    if (isExpressionClear) {
        firstNum.innerText = "";
        isExpressionClear = false;
        if (!isNumber(char)) {
            firstNum.innerText = "0";
        }
    }

    if (isNumber(char)) {                                           // на вход идет цифра
        if (!isOperationDefined) {                                  // это цифра в первом цисле
            firstNum.innerText = firstNum.innerText + char;
        } else {                                                    // это цифра во втором числе 
            secondNum.innerText = secondNum.innerText + char;
            sign.style.color = "#acacac";
        }
    } else if (!isOperationDefined) {                               // введо только первое число
        if (char == "." && !firstNum.innerText.includes(".")) {     // на вход идет первая точка для первого числа
            firstNum.innerText = firstNum.innerText + char;
        } else {                                                    // на вход идет первый знак опрерации
            firstNum.style.color = "#acacac";
            sign.innerText = "\xa0" + char + "\xa0";
            isOperationDefined = true;
        }
    } else {                                                        // операция определена, на вход идет не цифра
        if (char == "." && !secondNum.innerText.includes(".")) {    // на вход идет первая точка для второго числа
            secondNum.innerText = secondNum.innerText + char;
        } else {                                                    // на вход идет новая операция  
            equalHandler();
            firstNum.style.color = "#acacac";
            sign.innerText = "\xa0" + char + "\xa0";
            isOperationDefined = true;
        }
    }
}

function isNumber(char) {
    if (char >= '0' && char <= '9') {
        return true;
    } else {
        return false;
    }
}