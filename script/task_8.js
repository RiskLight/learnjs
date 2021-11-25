const firstOperand = +prompt('Введите первое число');
const symbolOperator = prompt('Введите действие /, *, -, +');
const secondOperand = +prompt('Введите второе число');
const operandsIsCorrect = (firstOperand !== '' && !isNaN(firstOperand)) && (secondOperand !== '' && !isNaN(firstOperand));

if (operandsIsCorrect) {
    if (symbolOperator === '+') {
        alert(firstOperand + secondOperand);
    } else if (symbolOperator === '-') {
        alert(firstOperand - secondOperand);
    } else if (symbolOperator === '*') {
        alert(firstOperand * secondOperand);
    } else if (symbolOperator === '/') {
        if (secondOperand === 0) {
            alert('На ноль делить нельзя');
        } else {
            alert(firstOperand / secondOperand);
        }
    } else {
        alert('Неправильный знак');
    }
} else {
    alert('Не сработает');
}

/*
let firstOperand = +prompt('Введите первое число');

if (!firstOperand && isNaN(firstOperand)) {
    alert('Не сработает');
}

let symbolOperator = prompt('Введите действие /, *, -, +');


let secondOperand = +prompt('Введите второе число');

if (!secondOperand && isNaN(secondOperand)) {
    alert('Не сработает')
}


/!*if (!firstOperand && isNaN(firstOperand) ||!secondOperand && isNaN(secondOperand)) {
    alert('Не сработает')
}*!/


switch (symbolOperator) {
    case '+':
        alert(firstOperand + secondOperand);
        break;
    case '-':
        alert(firstOperand - secondOperand);
        break;
    case '/':
        alert(firstOperand / secondOperand);
        break;
    case '*':
        alert(firstOperand * secondOperand);
        break;
}
*/
