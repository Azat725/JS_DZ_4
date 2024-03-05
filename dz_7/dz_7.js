// function calculator (operation) {
//     return eval(operation);
// }

function calculator () {
    let result;

    let firstNum = promt("Введите первое число -> ");
    let secondNum = promt("Введите второе число -> ");
    
    switch (operation) {
        case "+":
            result = firstNum + secondNum;
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "*":
            result = firstNum * secondNum;
            break;
        case "/":
            result = firstNum / secondNum;
            break;
    }
}