const money = +prompt('Бабло');
const numberOne = +prompt('Первое число для игры');
const numberTwo = +prompt('Второе число для игры');
const winner = (numberTwo - numberOne) * 0.1 + money;

if (numberOne && numberTwo) {
    alert(`Вы можете выиграть ${winner}`);
}

const putNumber = +prompt('Введите число, чтобы сыграть');

if (putNumber >= numberOne && putNumber <= numberTwo) {
    const random = rand(numberOne, numberTwo);

    if (putNumber !== random) {
        alert(`Лажа, компьютер выбрал ${random}, вы проиграли ${winner}`);
    } else {
        alert(`Поздравляю, вы выиграли ${winner}!`);
    }

} else {
    alert('Иди на хуй!');
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
