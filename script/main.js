document.getElementById('btn').onclick = function () {
    alert('Hello, Palmo!');
}

function changePlaceholder() {
    document.getElementById('inp').placeholder = 'Hello, world';
}

function hh() {
    let input = document.getElementById('val').value;
    console.log(input);
}

function puk() {
    let elem = document.getElementById('one').textContent;
    document.getElementById('one').textContent = document.getElementById('two').textContent;
    document.getElementById('two').textContent = elem;
}


function colors() {
    let col = document.getElementById('par')
    if (col.style.color === 'red') {
        col.style.color = '';
    } else {
        col.style.color = 'red';
    }
}

function changeColors() {
    const redBlock = document.getElementById('red')
    const greenBlock = document.getElementById('green')

    if (redBlock.classList[0] === 'red') {
        redBlock.classList.remove('red');
        redBlock.classList.add('green');


        greenBlock.classList.remove('green');
        greenBlock.classList.add('red');
    } else {
        greenBlock.classList.remove('red');
        greenBlock.classList.add('green');

        redBlock.classList.remove('green');
        redBlock.classList.add('red');
    }
}


let inputius = document.getElementById('disinput');
document.getElementById('forin').onclick = function () {
    if (inputius.disabled === true) {
        return inputius.disabled = false;
    } else {
        inputius.disabled = true;
    }
}


function insert(num) {
    document.form.textView.value = document.form.textView.value + num;
}

document.querySelector('.clean').onclick = function () {
    document.form.textView.value = '';
}

document.querySelector('.back').onclick = function () {
    let exp = document.form.textView.value;
    document.form.textView.value = exp.substring(0, exp.length - 1);
}

document.querySelector('.equal').onclick = function () {
    let exp = document.form.textView.value;
    if (exp) {
        document.form.textView.value = eval(exp);
    }
}

function createList() {
    let list = document.getElementById('list');
    let li = document.createElement('LI');
    li.innerHTML = 'Новый элемент списка';
    list.appendChild(li);
}


function getList() {
    let areaData = document.getElementById('text');
    let listData = areaData.value.split(',');

    let listContainer = document.getElementById('lists');
    let listElem = document.createElement('ol');
    listContainer.appendChild(listElem);

    let numberItems = listData.length;
    let listItem;
    for (let i = 0; i < numberItems; ++i) {
        listItem = document.createElement("li");
        listItem.innerHTML = listData[i];
        listElem.appendChild(listItem);
    }
}


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const login = document.getElementById('login');
const email = document.getElementById('email');
const age = document.getElementById('age');
const password = document.getElementById('password');

const successAlert = document.querySelector('.success-alert');

const formBtn = document.getElementById('butt-form');
const errorLogin = document.querySelector('.error-login');
const errorEmail = document.querySelector('.error-email');
const errorAge = document.querySelector('.error-age');
const errorPassword = document.querySelector('.error-password');


let errors = {};

formBtn.onclick = function () {
    errors = {};

    if (validateForm(login, email, age, password)) {
        successAlert.style.display = 'block';
        successAlert.innerText = 'Успешно!';
        login.value = email.value = age.value = password.value = '';
        login.style.borderColor = email.style.borderColor = age.style.borderColor = password.style.borderColor = '';
    }

}

function validateForm(login, email, age, password) {
    return checkLog(login) && validateEmail(email) && checkAge(age) && checkPassword(password);
}


function checkLog() {
    if ((login.value.length >= 4 && login.value.length <= 20) && isSymbolsEmpty(login.value)) {
        return true;
    }

    errors.login = 'Логин должен быть не менее 4 и не более 20 символов, и не содержать знаки';

    return false;
}

function isSymbolsEmpty(value) {
    if (
        value.includes('.')
        || value.includes('_')
        || value.includes('/')
        || value.includes('\\')
        || value.includes(',')
        || value.includes('|')
    ) {
        return false;
    }

    return true;
}


function updateInputLog() {
    if (checkLog(login) === true) {
        login.style.border = '2px solid green';
        errorLogin.style.display = 'none';

    } else {
        login.style.borderColor = 'red';
        errorLogin.style.display = 'block';
        errorLogin.innerText = errors.login;
    }
}

login.addEventListener('input', updateInputLog);


function validateEmail(value) {
    if (EMAIL_REGEXP.test(value.value)) {
        return true;
    }

    errors.email = 'Некорректный email';

    return false;

}

function updateInputEmail() {
    if (validateEmail(email) === true) {
        email.style.border = '2px solid green';
        errorEmail.style.display = 'none';
    } else {
        email.style.borderColor = 'red';
        errorEmail.style.display = 'block';
        errorEmail.innerText = errors.email;
    }
}

email.addEventListener('input', updateInputEmail);


function checkAge() {
    if (age.value > 0) {
        return true;
    }

    errors.age = 'Возраст должен быть числом и не быть отрицательным';

    return false;
}

function updateInputAge() {
    if (checkAge(age) === true) {
        age.style.border = '2px solid green';
        errorAge.style.display = 'none';
    } else {
        age.style.borderColor = 'red';
        errorAge.style.display = 'block';
        errorAge.innerText = errors.age;
    }
}

age.addEventListener('input', updateInputAge);


function checkPassword(password) {
    password = password.value;
    const uppers = /[A-Z]/.test(password);
    const numbers = /\d/.test(password);
    const onlyLatin = /^[A-Za-z\d]{6,}$/.test(password);

    if (uppers && numbers && onlyLatin) {
        return true;
    }

    errors.password = 'Пароль должен содержать хотя бы одну заглавную букву и одну цифру и быть не менее 6 символов';

    return false;
}


function updateInputPass() {
    if (checkPassword(password) === true) {
        password.style.border = '2px solid green';
        errorPassword.style.display = 'none';
    } else {
        password.style.borderColor = 'red';
        errorPassword.style.display = 'block';
        errorPassword.innerText = errors.password;
    }
}

password.addEventListener('input', updateInputPass);


// Корзина временная как заглушка домашнего задания, когда разберусь сам обновлю

const d = document,
    itemBox = d.querySelectorAll('.item_box'), // блок каждого товара
    cartCont = d.getElementById('cart_content'); // блок вывода данных корзины
// Функция кроссбраузерная установка обработчика событий
function addEvent(elem, type, handler){
    elem.attachEvent = function (s, param2) {
        
    }
    if(elem.addEventListener){
        elem.addEventListener(type, handler, false);
    } else {
        elem.attachEvent('on'+type, function(){ handler.call( elem ); });
    }
    return false;
}
// Получаем данные из LocalStorage
function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
}
// Записываем данные в LocalStorage
function setCartData(o){
    localStorage.setItem('cart', JSON.stringify(o));
    return false;
}
// Добавляем товар в корзину
function addToCart(){
    this.disabled = true; // блокируем кнопку на время операции с корзиной
    let cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
        parentBox = this.parentNode, // родительский элемент кнопки &quot;Добавить в корзину&quot;
        itemId = this.getAttribute('data-id'), // ID товара
        itemTitle = parentBox.querySelector('.item_title').innerHTML, // название товара
        itemPrice = parentBox.querySelector('.item_price').innerHTML; // стоимость товара
    if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
        cartData[itemId][2] += 1;
    } else { // если товара в корзине еще нет, то добавляем в объект
        cartData[itemId] = [itemTitle, itemPrice, 1];
    }
    // Обновляем данные в LocalStorage
    if(!setCartData(cartData)){
        this.disabled = false; // разблокируем кнопку после обновления LS
        // cartCont.innerHTML = 'Товар добавлен в корзину.';
    }
    return false;
}
// Устанавливаем обработчик события на каждую кнопку &quot;Добавить в корзину&quot;
for(let i = 0; i < itemBox.length; i++){
    addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);
}
// Открываем корзину со списком добавленных товаров
function openCart(){

    let cartData = getCartData(), // вытаскиваем все данные корзины
        totalItems = '';
    console.log(JSON.stringify(cartData));
    // если что-то в корзине уже есть, начинаем формировать данные для вывода
    if(cartData !== null){
        totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
        for(let items in cartData){
            totalItems += '<tr>';
            for(let i = 0; i < cartData[items].length; i++){
                totalItems += '<td>' + cartData[items][i] + '</td>';
            }
            totalItems += '</tr>';
        }
        totalItems += '<table>';
        cartCont.innerHTML = totalItems;
    } else {
        // если в корзине пусто, то сигнализируем об этом
        cartCont.innerHTML = 'В корзине пусто!';
    }
    return false;
}
/* Открыть корзину */
addEvent(d.getElementById('checkout'), 'click', openCart);
/* Очистить корзину */
addEvent(d.getElementById('clear_cart'), 'click', function(){
    localStorage.removeItem('cart');
    cartCont.innerHTML = 'Корзина очишена.';
});


// Получить модальный
let modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
let btn = document.getElementById("myBtn");
addEvent(d.getElementById('myBtn'), 'click', openCart);

// Получить элемент <span>, который закрывает модальный
let span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
    modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}