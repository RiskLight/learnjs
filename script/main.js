let countryUser = prompt('Введите страну');

if (countryUser === '') {
    alert('Вы не ввели страну');
} else if (!isNaN(countryUser)) {
    alert('Цифры - не страна!');
}

/*
let countryUser = prompt('Введите страну');

while (countryUser === null || !isNaN(countryUser)) {
    countryUser = prompt("Введите страну");
    if (!isNaN(countryUser)){
        alert('Название не может быть числом')
    }
}


*/


//
// let firstNumber = prompt('Введите первое число')
// let secondNumber = prompt('Введите второе число')
// if (firstNumber % secondNumber === 0) {
//     alert('Кратное');
// } else {
//     alert('Не кратное');
// }

//3. С помощью prompt попросите пользователя ввести число.
// Сделать проверку на пустую строку
// и если значение является НЕ числом.В результате вывести
// пользователю каким является число (четное или нечетное);
let firstNumber = prompt('Введите первое число')
if (isNaN(firstNumber) || firstNumber === '') {
    do {
        alert('Не число')
        firstNumber = prompt('Введите первое число')
    } while (isNaN(firstNumber) || firstNumber === '' )
}
let secondNumber = prompt('Введите второе число')
if (isNaN(secondNumber ) || secondNumber === '') {
    do {
        alert('Не число')
        secondNumber  = prompt('Введите второе число')
    } while (isNaN(secondNumber ) || secondNumber === '')
}
if (firstNumber % secondNumber === 0) {
    alert('Кратное');
} else {
    alert('Не кратное');
}


/*
let countryUser = prompt('Введите страну');
if (countryUser === '') {
    do {
        alert('Вы не ввели страну');
        countryUser = prompt('Введите страну');
    } while (countryUser === '');
}
*/


/*

let i = 0;
for (i = 2, i <=500, i++) {
    if (i %)
}
*/


let n = 500;

for (let i = 2; i <= n ; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(i);
}
