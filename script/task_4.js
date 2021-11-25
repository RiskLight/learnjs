const putNumber = prompt('Введите число от 0 до 100');

if (putNumber) {
    if (!isNaN(+putNumber)) {
        if (putNumber >= 1 && putNumber <= 100) {

            alert(putNumber >= 1 && putNumber <= 25 ? 'Первая четверть' :
                    putNumber >= 26 && putNumber <= 50 ? 'Вторая четверть' :
                        putNumber >=51 && putNumber <= 75 ? 'Вторая четверть' : 'Четвертая четверть'
            );

        }
    } else {
        alert('Значение должно быть числом');
    }
    
} else {
    alert('Значение не может быть пустым');
}