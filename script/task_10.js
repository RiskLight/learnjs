alert('Сыграем в "Камень, ножницы, бумага"?');
const startGame = prompt('Введите камень, ножницы или бумага').toLowerCase();

const rules = {
    'камень': 'ножницы',
    'бумага': 'камень',
    'ножницы': 'бумага'
};

const choices = Object.keys(rules);

let computerChoice = choices[Math.floor(Math.random() * 3)];

if (choices.indexOf(startGame) < 0) {
    alert('Идиотский выбор');
} else if (startGame === computerChoice) {
    alert('Ничья');
} else {
   const userChoice = rules[startGame];

    if (userChoice === computerChoice) {
        alert(`Победил игрок ${startGame} против ${computerChoice}`);
    } else {
        alert(`Победил комп ${startGame} против ${computerChoice}`);
    }
}
