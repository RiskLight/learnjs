//Задание 1
/*
let first = 'hello';

function upToFist (str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

alert(upToFist(first));
*/



//Задание 2
/*
let str = 'Страшно, очень страшно, если бы мы знали, что это такое, но мы не знаем, что это такое!'

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}

alert(truncate(str, 51))
*/



//Задание 3
/*
let userName = 'Иванов Сергей Петрович';

function getShortName(string) {
    const s = string.split(' ');
    return `${s[0]} ${s[1][0]}. ${s[2][0]}.`;
}

alert(getShortName(userName));
*/



//Задание 4
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
        return user.name;
    })
    return filter;
}
console.log(filterArray(users));
*/



//Задание 5
/*
const arrayThree = ['Попка', 'Член', 'Вагина'];
const arrayFour = ['Попка', 'Халупа', 'Вагина'];

function unitedArray (arrayOne, arrayTwo) {
    const unitedArray = arrayOne.concat(arrayTwo);
    return [new Set(unitedArray)];
}

console.log(unitedArray(arrayThree, arrayFour));
*/



//Задание 6
/*
let userSnakeName = 'super_user_name';

function modifyToCamelCase (string) {
    let result = '';
    const a = string.split('_');

    for (let i = 0; i < a.length; i++) {
        if (i === 0) {
            result = result + a[i];
        } else {
            result += a[i][0].toUpperCase() + a[i].slice(1);
        }
    }

    return result;
}

console.log(modifyToCamelCase(userSnakeName));
*/



//Задание 7
// Напишите функцию, которая принимает значение с математическим выражением и возвращает результат его решения.
// Например: calc('5 + 10') // вернет 15

/*
let x = '5+10';

function pop (string) {
    return eval(string);
}

console.log(pop(x));
*/


//Задание 8
/*
const users = [
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
]

function getArrayWithNames(array) {
    return array.map(function (user) {
        return user.name;
    });
}

console.log(getArrayWithNames(users));
*/



//Задание 9
/*
const users = [1, 'John', 20, 'Pete', 40];

function start(array) {
    return array.map(function (item) {
        if (typeof item === 'string') {
            return item.trim().split('');
        }
        return item * 2;
    })
}

console.log(start(users));
*/



// Задание 10
/*
let str = 'жопа жопа жопа член член член джон джон джон';

function checkSpam (sting) {
    const string = sting.trim().split(" ").map(function (item) {
        return item.toLowerCase();
    });
    return checkIfDuplicateExists(string);
}

function checkIfDuplicateExists(array) {
    return new Set(array).size !== array.length;
}

console.log(checkSpam(str));
*/



//Задание 11
/*
const censoredWords = ['Хуй', 'Пиздец', 'Гандон', 'Пизда', 'Пидор'];

let x = 'жопа Хуй';

function checkCensoredWord (str) {
    str = str.toLowerCase()
    for (let item of censoredWords.map(function (items) {
        return items.toLowerCase();
    })) {
        if (str.includes(item)) {
            return true;
        }
    }

    return false;
}

console.log(checkCensoredWord(x));
*/



// Задание 12
/*
const arrayToSentence = ['Привет', 1, null, 'как', {}, 'дела'];

function get (array) {
    return array.filter(function (item) {
        if (typeof item === 'string') {
            return item;
        }
    }).join(' ')
}

console.log(get(arrayToSentence));
*/

//Задание 13
/*
let format = '(xxx) xxx-xxxx';


function createPhoneNumber(numbers){
    let format = numbers;
    numbers = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
    for (let number of numbers) {
        format = format.replace('x', number);
    }

    return format;
}

console.log(createPhoneNumber(format));
*/
