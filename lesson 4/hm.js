console.log(`створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б`);

function rectangle(a, b){
    let s = a*b;
    return s;
}
console.log(rectangle(10,15));



console.log(`створити функцію яка обчислює та повертає площу кола з радіусом r`);

function round(r){
    const PI = 3.14;
    let s = PI*(r**2);
    return s;
}
console.log(round(5));



console.log(`створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r`);

function cylinder(h, r){
    const PI = 3.14;
    let s = 2*PI*r*h;
    return s;
}
console.log(cylinder(15, 3));



console.log(`створити функцію яка приймає масив та виводить кожен його елемент`);

function dataArray(arr){
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        console.log(arr[i]);
    }
}
dataArray([1, 5, `fly`, true, 8, `go`]);



console.log(`створити функцію яка створює параграф з текстом. Текст задати через аргумент`);

function text(p){
    document.write(`<p>${p}</p>`);
    document.write(`<hr>`);
    document.write(`<p>${p}</p>`);
    for (let i = 0; i < 5; i++) {
        document.write(`<p>${p}</p>`);
    }
    document.write(`<hr>`);
}
text(`Do it!`);



console.log(`створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий`);

function ul(li){
    document.write(`<ul>`);
    document.write(`<li>${li}</li>`);
    document.write(`<li>${li}</li>`);
    document.write(`<li>${li}</li>`);
    document.write(`</ul>`);
    document.write(`<hr>`);
}
ul(`It's Better.`);



console.log(`створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)`);

function ul2(li, length){
    document.write(`<ul>`);
    for (let i = 0; i < length; i++) {
        document.write(`<li>${li}</li>`);
    }
    document.write(`</ul>`);
    document.write(`<hr>`);
}
ul2(`It's Better.`, 5);



console.log(`створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список`);

function list(arr){
    document.write(`<ol>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ol>`);
}
list([1, `cool`, true]);



console.log(`створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.`);

function info(users){
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}
info( [
    {id: 5435465, name: `Eva`, age: 24},
    {id: 5736587, name: `Jane`, age: 21},
    {id: 5876923, name: `Den`, age: 28}]);