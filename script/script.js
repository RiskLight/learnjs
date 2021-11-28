//Задание 1
/*
const number = prompt('Введите число для проверки');

function isEven(number) {
    return number !== '' && isFinite(+number);
}

alert(isEven(number));
*/

//Задание 2
/*
const firstNum = prompt('Введите первое число');
const secondNum = prompt('Введите второе число');
const thirdNum = prompt('Введите третье  число');

function getAverage () {
    if (isCorrectValue(firstNum) && isCorrectValue(secondNum) && isCorrectValue(thirdNum)) {
        return  +firstNum > +secondNum ? (+firstNum > +thirdNum ? +thirdNum : +firstNum) : (+secondNum > +thirdNum ? +thirdNum : +secondNum);
}  else {
        return 'Какого хуя ты творишь?';
    }
}

function isCorrectValue(value) {
    return value !== '' && isFinite(+value);
}

alert(getAverage(firstNum, secondNum, thirdNum));
*/


//Задание 3
/*const user = {
    // name: 'John',
    age: 30,
    penis: 'undefined'
};

function isEmpty(obj) {
 return 'name' in obj;
}

alert(isEmpty(user))*/

//Задание 4
/*const userTwo = {
    name: 'John',
    surname: 'Penis'
}

function getNameSurname(obj) {
    return `${obj.name} ${obj.surname}`;
    }
alert(getNameSurname(userTwo));*/


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

function modifyObject(object) {
    for (let key in object) {
        if (isFinite(object[key])) {
            object[key] = Math.round(object[key] / 2);
        }
         else if (typeof object[key] === 'string') {
            object[key] = 'Hello, Palmo';
        } else {
            delete object[key];
        }
    }
    return object;
}

console.log(modifyObject(numbers))*/


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
