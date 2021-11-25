alert('Сыграем в "Камень, ножницы, бумага"?');
let startGame = prompt('Введите камень, ножницы или бумага');
startGame = startGame.toLowerCase();

let rules = {'камень': 'ножницы', 'бумага': 'камень', 'ножницы': 'бумага'};
let choices = Object.keys(rules);

let computerChoice = choices[Math.floor(Math.random() * 3)];

if (choices.indexOf(startGame) < 0) {
    alert('Идиотский выбор');
} else if (startGame === computerChoice) {
    alert('Ничья');

} else {
   let userChoice = rules[startGame]
    if (userChoice === computerChoice) {
        alert(`'Победил игрок ${startGame} против ${computerChoice}`);
    } else {
        alert(`Победил комп ${startGame} против ${computerChoice}`);
    }
}
