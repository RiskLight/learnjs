//Задание 1
/*function isEven() {
    let x = +prompt('Введите число для проверки');
    if (isFinite(x) && x) {
        return true;
    } else {
        return false;
    }

}

alert(isEven())*/

//Задание 2

/*function getAverage () {
    let firstNum = +prompt('Введите первое число')
    let secondNum = +prompt('Введите второе число')
    let thirdNum = +prompt('Введите третье  число')
    if ((isFinite(firstNum) && isFinite(secondNum) && isFinite(thirdNum)) && (firstNum && secondNum && thirdNum)) {
        return  firstNum > secondNum ? (firstNum > thirdNum ? thirdNum : firstNum) : (secondNum > thirdNum ? thirdNum : secondNum);
    } else {
        return 'Какого хуя ты творишь?';
    }
}

alert(getAverage());*/


//Задание 3
/*const user = {
    // name: 'John',
    age: 30,
    penis: 'undefined'
};

function isEmpty() {
 return user.hasOwnProperty('name');
}

alert(isEmpty())*/

//Задание 4
/*const userTwo = {
    name: 'John',
    surname: 'Penis'
}

function nameSurname() {
    return `${userTwo.name} ${userTwo.surname}`
    }
alert(nameSurname())*/


//Задание 5
/*const object = {
    name1: 200,
    name2: 500,
    name3: 400
};

function sumInObject() {
    let sum = 0;
    for (let key in object) {
        sum += object[key];
    }
        alert(sum);
}

sumInObject();*/


//Задание 6
/*const numbers = {
    name: 'John',
    number1: 25,
    number2: 160,
    number3: 130,
    surname: undefined
}

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] /= 2;
            if (!Number.isInteger(obj[key])) {
                obj[key] = Math.round(obj[key]);
            }
        } else if (typeof obj[key] == 'string') {
            obj[key] = 'Hello, Palmo';
        } else {
            delete obj[key];
        }
    }
    return obj;
}

console.log(multiplyNumeric(numbers))*/


//Задание 7
/*
const gameQuiz = {
    '1. Наш президент наркоман?': '"Да"',
    '2. Политики петухи?': 'Да',
    '3. Что будет? 6 / "3"': '2',
    '4. Что будет? "2" * "3"': '6',
    '5. Что будет? true + false': '1',
    '6. Что будет? "$" + 4 + 5': '"$45"',
    '7. Что будет? "5px" - 2': 'NaN',
    '8. Что будет? 2 / 0': 'infinity',
    '9. Что будет? "-5" - 5': '-10',
    '10. Что будет? null + 1': '1',
}

function startGame (obj) {
    let sum = 0;
    for (let key in obj) {

        const answer = prompt(key);

        if (answer === obj[key]) {
            sum ++
        }
    }
    return alert(`Правильных ответов: ${sum}`);
}

startGame(gameQuiz);*/
