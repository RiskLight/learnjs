//Задание 1
// Напишите функцию upFirst(str), которая возвращает строку str с заглавным первым символом,
// остальные символы должны быть в нижнем регистре (пример: upFirst("иванов"),
// должно вернуть "Иванов", up_first("ИВАНОВ"), должно вернуть "Иванов")

/*let first = 'hello';

function upToFist (str) {
    return str[0].toUpperCase() + str.slice(1);
}

alert(upToFist(first));*/


//Задание 2
//Напишите функцию truncate(str, maxlength), которая проверяет длину строки str,
// и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength

/*let str = 'Страшно, очень страшно, если бы мы знали, что это такое, но мы не знаем, что это такое!'

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}

alert(truncate(str, 51))*/


//Задание 3
//Напишите функцию getShortName(fullName), которая преобразует полное ФИО fullName в краткое.
// Например getShortName("Иванов Сергей Петрович"), функция должна вернуть "Иванов С.П."
/*let userName = 'Иванов Сергей Петрович';

function getShortName(string) {
    const s = string.split(' ');
    return `${s[0]} ${s[1][0]}. ${s[2][0]}.`;
}

alert(getShortName(userName));*/


//Задание 4
//Напишите функцию, которая принимает массив объектов.
// Функция должна вернуть массив только с теми объектами, у которых есть свойство name
/*
const users = [
    {
        name: 'John',
        age: 20
    },
    {
        name: 'Kira',
        age: 50
    },
    {
        surname: 'Baba',
        age: 35
    }
]

function filterArray (array) {
    let filter = array.filter(function (user) {
        return user.name
    })
    return filter
}
console.log(filterArray(users));
*/


//Задание 5
//Напишите функцию, которая принимает два массива. Функция должна вернуть результат
// объединения этих массивов без дубликатов
/*const arrayThree = ['Попка', 'Член', 'Вагина'];
const arrayFour = ['Попка', 'Халупа', 'Вагина'];

function unitedArray (arrayOne, arrayTwo) {
    const unitedArray = arrayOne.concat(arrayTwo);
    return [new Set(unitedArray)];
}

console.log(unitedArray(arrayThree, arrayFour));*/


//Задание 6
// Напишите функцию, которая преобразует строки snake_case в camelCase.
// Например modifyString('super-user-name') // вернуть 'superUserName
/*
let userSnakeName = 'super_user_name';

function modifyToCamelCase (string) {
    let a = string.split('_');
    return a[0] + a[1][0].toUpperCase() + a[1].slice(1) + a[2][0].toUpperCase() + a[2].slice(1)
}


console.log(initSnake(userSnakeName));*/


//Задание 7
// Напишите функцию, которая принимает значение с математическим выражением и возвращает результат его решения.
// Например: calc('5 + 10') // вернет 15

/*
let x = '5+10'

function pop (string) {
    // let z = string.split('+')
    // return parseFloat(z[0]) + parseFloat(z[1])
    return eval(string)
}

console.log(pop(x));
*/


//Задание 8
//Напишите функцию, которая принимает объект с пользователями и возвращает массив имён.
//Функция должна вернуть ['John', 'Marry', 'Poll']
/*const users = [
    {
        id: 1,
        name: 'John',
        age: 20
    },
    {
        id: 2,
        name: 'Marry',
        age: 22
    },
    {
        id: 3,
        name: 'Poll',
        age: 25
    },
];

function getArrayWithNames(array) {
    let newArray = array.map(function (user) {
        return user.name
    })
    return newArray
}

console.log(getArrayWithNames(users));*/


//Задание 9
// Напишите функцию, которая принимает массив. Каждый элемент массива, который является числом - умножить на 2,
// строки - преобразовать в массив, где каждый символ - отдельный элемент массива. Функция должна вернуть измененный объект

/*const users = [1, 'John', 20, 'Pete', 40];

function start(array) {
    return array.map(function (item) {
        if (typeof item === 'string') {
            return item.trim().split('')
        }
        return item * 2;
    })
}

console.log(start(users));*/

// Задание 10
// Напишите функцию, которая проверяет строку на спам. Функция должна возвращать true,
// если в строке есть 2 одинаковых слова,
// и false - если все слова уникальны

/*
let str = 'жопа жопа жопа член член член джон джон джон'

function checkSpam (sting) {
    let string = sting.trim().split(" ")
    return checkIfDuplicateExists(string)
}

function checkIfDuplicateExists(array){
    return new Set(array).size !== array.length
}

console.log(checkSpam(str));
*/

// const censoredWords = ['Хуй', 'Пиздец', 'Гандон', 'Пизда', 'Пидор']


// 12. Напишите функцию, которая принимает массив. Функция должна вернуть предложение только из строковых значений массива.
//     Например:
const arrayToSentence = ['Привет', 1, null, 'как', '{}', 'дела'] // вернуть Привет как дела

