console.log(`Користувач вводить або має два числа.
    Потрібно знайти та вивести максимальне число з тих двох .
    Також потрібно врахувати коли введені рівні числа.`);

let a = parseInt(prompt(`Enter the first number`), 10);
let b = parseInt(prompt(`Enter the second number`), 10);
if (a === b){
    console.log(`This numbers are equal!`)
} else if (a>b){
    console.log(a)
} else if (a<b){
    console.log(b)
}



console.log(`У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
Користувач вводить номер квартири просто в змінні або через prompt('') .
Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.`);

let enter = +prompt(`Size of your flat from 1 to 90`);
if (enter > 0 && enter <= 20) {
    console.log(`It's entrance 1`);
} else if (enter >= 21 && enter <= 48) {
     console.log(`It's entrance 2`)
} else if (enter >= 49 && enter <= 90) {
     console.log(`It's entrance 3`)
}


console.log(`Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО`);
let number = prompt(`Enter number`);
if (number === 10){
    console.log(`True`)
} else if (number !== 10){
    console.log(`False`)
}



console.log(`Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
    якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
якщо в змінну записали щось інше, спрацьовує else`);

let x = +prompt(`Enter value`) || "[]" || prompt(`Enter value`);
if (typeof x === `number`){
    console.log(1)
} else if (typeof x === "string"){
    console.log(2)
} else if (typeof x === "boolean"){
    console.log(3)
} else if (typeof x === "object"){
    console.log(3)
} else {
    console.log(`Else`)
}



console.log(`Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН`);

let t = +prompt(`Enter temperature`);
if (t>=10 && t<=22){
    console.log(`Let's go study in OKTEN!`)
} else{
    console.log(`Stay at home and study online`)
}



console.log(`За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .`);

let key = +prompt(`Enter number from 1 to 5`);
switch (key){
    case 1:
        console.log(`Congratulations, you win smartphone!`);
        break;

    case 2:
        console.log(`Congratulations, you win coupon for 300 UAH!`);
        break;

    case 3:
        console.log(`Congratulations, you win multicooker!`);
        break;

    case 4:
        console.log(`Congratulations, you win coupon for 1000 UAH!`);
        break;

    case 5:
        console.log(`Congratulations, you win car!`);
        break;

    default:
        console.log(`You entered false number!`);
}