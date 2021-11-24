//Преобразовать строку “12345” в число.
let str = '12345';
let num = Number(str);
alert(typeof num);

//Преобразовать значение true в строку.
let value = true;
value = String(value);
alert(typeof  value);

//Преобразовать значение null в логический тип.
alert(Boolean(null));

//Преобразовать пустую строку в логический тип.
let unStr = '';
alert(Boolean(unStr));

//Создайте страницу, которая спрашивает имя у пользователя и выводит его.
let name = prompt('Ваше имя?', '');
alert(`Поздравляем Ваше имя ${name}`);

//Создайте любой вопрос и выведите результат через функцию alert
let result = confirm('Я студент?');
alert(result);


//Создать сообщение “Hello, Palmo!”, использую 3 типа кавычек. (Используя обратные кавычки “Palmo” поместить в переменную);
let palmo = "Palmo";
alert(`Hello, ${palmo}`);
