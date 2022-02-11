console.log(`створити функцію яка обчислює та повертає площу прямокутника`);

const rectangle = (a, b) => a*b;
document.write(`<h4>Square of rectangle - ${rectangle(5, 8)}</h4>`);



console.log(`створити функцію яка обчислює та повертає площу кола`);

const PI = 3.14;
const round = (r) => PI*(r**2);
document.write(`<h4>Square of round - ${round(8)}</h4>`);



console.log(`створити функцію яка обчислює та повертає площу циліндру`);

const cylinder = (h, r) => 2*PI*r*h;
document.write(`<h4>Square of cylinder - ${cylinder(8, 7)}</h4>`);



console.log(`створити функцію яка приймає масив та виводить кожен його елемент`);

const dataArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        document.write(`<h4>Element of array - ${arr[i]}</h4>`);
    }
}
dataArray([8, 7, 5, 6, 9]);



console.log(`створити функцію яка  створює параграф з текстом. Текст задати через аргумент`);

const text = (p) => {
    document.write(`<p>${p}</p>`);
    document.write(`<hr>`);
    document.write(`<p>${p}</p>`);
    for (let i = 0; i < 5; i++) {
        document.write(`<p>${p}</p>`);
    }
    document.write(`<hr>`);
}
text(`But without the dark we'd never see the stars.`);



console.log(`створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий`);

const ul = (li) => {
    document.write(`<ul>`);
    document.write(`<li>${li}</li>`);
    document.write(`<li>${li}</li>`);
    document.write(`<li>${li}</li>`);
    document.write(`</ul>`);
    document.write(`<hr>`);
}
ul(`Dirty dancing in the moonlight!`);



console.log(`створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)`);

const ul2 = (li, length) => {
    document.write(`<ul>`);
    for (let i = 0; i < length; i++) {
        document.write(`<li>${li}</li>`);
    }
    document.write(`</ul>`);
    document.write(`<hr>`);
}
ul2(`Huston be have a problem!`, 5);



console.log(`створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список`);

const list = (arr) => {
    document.write(`<ol>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ol>`);
}
list([5, `tall`, true, 12, false, `strong`]);



console.log(`створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.`);

const info = (users) => {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}
info( [
    {id: 5435465, name: `Eva`, age: 24},
    {id: 5736587, name: `Jane`, age: 21},
    {id: 5876923, name: `Den`, age: 28}]);