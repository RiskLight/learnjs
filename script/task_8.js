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
