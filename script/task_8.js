let firstOperand = +prompt('Введите первое число');

if (!firstOperand && isNaN(firstOperand)) {
    alert('Не сработает');
}

let symbolOperator = prompt('Введите действие /, *, -, +');


let secondOperand = +prompt('Введите второе число');

if (!secondOperand && isNaN(secondOperand)) {
    alert('Не сработает')
}



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
