const userCountry = prompt('Страна проживания?');

if (!userCountry) {
    alert('Введите страну');
}

if (userCountry && !isNaN(+userCountry)){
    alert('Название не может быть числом');
}