const money = +prompt('Введи бабло игроман');
const numberOne = +prompt('Первое число для игры');
const numberTwo = +prompt('Второе число для игры');
if (money && numberOne && numberTwo ) {
    if (Number.isInteger(numberOne) && Number.isInteger(numberTwo) && Number.isInteger(money)) {
        const winner = (numberTwo - numberOne) * 0.1 + money;

        if (numberOne && numberTwo) {
            alert(`Вы можете выиграть ${winner}`);
        }

        const putNumber = +prompt('Введите число, чтобы сыграть');

        if (putNumber >= numberOne && putNumber <= numberTwo) {
            const random = rand(numberOne, numberTwo);

            if (putNumber !== random) {
                alert(`Лажа, компьютер выбрал ${random}, вы проиграли ${winner} долларов`);
            } else {
                alert(`Поздравляю, вы выиграли ${winner}! не долларов`);
            }
        }
    }

} else {
    alert('Иди на хуй!');
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
