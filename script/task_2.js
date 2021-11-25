const firstNumber = prompt('Введите первое число');
const secondNumber = prompt('Введите второе число');

if (firstNumber && secondNumber) {
    if (secondNumber % firstNumber === 0) {
        alert('Кратное');
    } else {
        alert('Не кратное');
    }
} else {
    alert('Заполните оба значения, значения должны быть цифрами');
}