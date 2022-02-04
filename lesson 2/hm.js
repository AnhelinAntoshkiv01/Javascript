console.log(`Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).`);

let time = prompt(`Enter time from 0 to 59`);
if (time>=0 && time<=14){
    console.log(`It's first part of hour`)
} else if (time>=15 && time<=30){
    console.log(`It's second part of hour`)
} else if (time>=31 && time<=46){
    console.log(`It's third part of hour`)
} else if (time>=47 && time<=59){
    console.log(`It's fourth part of hour`)
}



console.log(`У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).`);

let day =prompt(`Enter date from 1 to 31`);
if (day>=1 && day<=10){
    console.log(`It's first decade of mounth`)
} else if (day>=11 && day<=20){
    console.log(`It's second decade of mounth`)
} else if (day>=21 && day<=31){
    console.log(`It's third decade of mounth`)
}



console.log(`У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)`);

let test = `jfhldsj`;
if (test ===true){
    console.log(`True`)
} else {
    console.log(`False`)
}

(prompt(`Test`)) ? console.log(`True`) : console.log(`False`);



console.log(`Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3`);

let a = prompt(`Enter number 1, 0 or -3`);
if (a !== 0){
    console.log(`True`)
} else {
    console.log(`False`)
}

(prompt(`Enter number 1, 0 or -3`)) ? console.log(`True`) : console.log(`False`);



console.log(`Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.`);

let dayofWeek = +prompt(`Enter someday of week from 1 to 7`);
switch (dayofWeek){
    case 1:
        console.log(`Work. Going to the cinema.`);
        break;

    case 2:
        console.log(`Work. Meeting with friends at 20 o'clock.`);
        break;

    case 3:
        console.log(`Work.`);
        break;

    case 4:
        console.log(`Work. Going to the Fitnesscenter.`);
        break;

    case 5:
        console.log(`Work. Meeting with friends and going to the club.`);
        break;

    case 6:
        console.log(`Rest. Sleep 10 hours`);
        break;

    case 7:
        console.log(`Nothing doing!!!`);
        break;

    default:
        console.log(`You entered false number of day!`);
}



console.log(`Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.`);

prompt(`Enter year`);
function isLeapYear(d){
    let y = d.getFullYear();
    return (y%4 === 0 && y%100 !== 0);
}
let date = new Date()
if (isLeapYear(date)){
    console.log(`It's a leap year.`)
} else {
    console.log(`It's not a leap year.`)
}



console.log(`Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!`);

let name = prompt(`What is the "official" name of JavaScript?`);
if (name === `ECMAScript`){
    console.log(`True`)
} else {
    console.log(`Don't you know? It's ECMAScript!`)
}