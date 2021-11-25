const money = +prompt('Бабло');
const numberOne = +prompt('Первое число для игры');
const numberTwo = +prompt('Второе число для игры');
const winner = (numberTwo - numberOne) * 0.1 + money;

if (numberOne && numberTwo) {
    alert(`Вы можете выиграть ${winner}`);
}

let putNumber = +prompt('Введите число, чтобы сыграть');

if (putNumber >= numberOne && putNumber <= numberTwo) {
    function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let random = rand(numberOne, numberTwo)
    if (putNumber !== random) {
        alert(`Лажа, компьютер выбрал ${random}`);
    } else {
        alert('Поздравляю, вы победили!');
    }

} else {
    alert('Иди на хуй!')
}