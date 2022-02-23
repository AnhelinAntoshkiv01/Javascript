console.log(`Все робити за допомоги js.
- створити блок,
- додати йому класи wrap, collapse, alpha, beta
- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
- додати цей блок в body.
- клонувати його повністю, та додати клон в body.`);

let wrap = document.createElement(`div`);
wrap.classList.add(`wrap`, `collapse`, `alpha`, `beta`);
wrap.style.background = `silver`;
wrap.style.color = `red`;
wrap.style.fontSize = `20px`;
document.body.append(wrap);

document.body.append(wrap.cloneNode(true));



console.log(`Є масив. Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
Завдання робити через цикли.`);

let menus = document.getElementsByClassName(`menu`);
let menu = menus[0];
let ul = document.createElement(`ol`);
menu.append(ul);
let array = ['Main','Products','About us','Contacts'];
// for (const string of array) {
//     let arrayScript = document.createElement(`li`);
//     arrayScript.innerText = string;
//     ul.append(string);
// }

for (let i = 0; i < array.length; i++) {
    const arrayElement = array[i];
    let arrayScript = document.createElement(`li`);
    arrayScript.innerText = arrayElement;
    ul.append(arrayElement);
}



console.log(`Є масив. Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.`);

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const element of coursesAndDurationArray) {
    let title = document.createElement(`div`);
    title.innerText = `${element.title}`;
    let monthDuration = document.createElement(`div`);
    monthDuration.innerText = `${element.monthDuration}`;
    monthDuration.style.margin = `20px`;

    document.body.append(title, monthDuration);
}



console.log(`Є масив. За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
Завдання робити через цикли.`);

for (const element of coursesAndDurationArray) {
    let item = document.createElement(`div`);
    item.classList.add(`item`);
    let heading = document.createElement(`h2`);
    heading.classList.add(`heading`);
    heading.innerText = `${element.title}`;
    let description = document.createElement(`p`);
    description.classList.add(`description`);
    description.innerText = `${element.monthDuration}`;
    description.style.marginLeft = `40px`;

    document.body.append(item, heading, description);
}