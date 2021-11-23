//Задание 1
let num = 10;
console.log(num);

//Задание 2
let first = 5;
let second = 10;
console.log(`sum = ${first+second}, diff = ${first-second}`);
console.log(`mult = ${first*second}, div = ${first/second}`);

//Задание 3
let a = 3;
let b = 10;
let result = a + b;
console.log(`let result = ${result}`);

//Задание 4
let bar = 20;
let qwerty = 5;
let res = bar - qwerty - 10;
let end = res - qwerty;
console.log(`let end = ${end}`);

//Задание 4
let str = "Hello, Palmo";
alert(str);

//Задание 5
let name = "Олег";
let age = "27";
alert(`Я ${name} мне ${age} лет`);

//Задание 6
const daysCurrentMonth = new Date(new Date().getFullYear(), new Date().getMonth()+1, 0).getDate();
const hourMinutes = 60;
const secondsMinutes = 60;
const dayHours = 24;

const hourSeconds = hourMinutes * secondsMinutes
console.log(`In hour ${hourSeconds} seconds`);

const daySeconds = hourMinutes * secondsMinutes * dayHours;
console.log(`In day ${daySeconds} seconds`);

const monthSeconds = hourMinutes * hourMinutes * dayHours * daysCurrentMonth;
let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
forDate = new Date();
let month = monthNames[forDate.getMonth()];
console.log(`In current month ${month} ${monthSeconds} seconds`);

const hourSecondsPage = document.getElementById('hour_seconds').textContent = `In hour ${hourSeconds} seconds`;
const daySecondsPage = document.getElementById('day_seconds').textContent = `In day ${daySeconds} seconds`;
const monthSecondsPage = document.getElementById('month_seconds').textContent = `In current month ${month} ${monthSeconds} seconds`;

//Задание 7
let q = 3
q=Math.pow(q,2);

//Задание 8
let d = 8;
let n = Math.pow(d,2);
let x = Math.pow(d,3);
console.log(`let n = ${n}, let x = ${x}`);