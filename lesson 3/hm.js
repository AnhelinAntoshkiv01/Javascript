console.log(`--створити масив з:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль`);

let array1 = [1, 8, 15, 24,0];
let array2 = [`pink`, `red`, `black`, `blue`, `green`];
let array3 = [1, `red`, true, 24, false];
console.log(array1, array2, array3);


console.log(`Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль`);

let array = [];
array[0] = [`Save`];
array[1] = [`Our`];
array[2] = [`Sons`];
console.log(array);


console.log(`За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині`);

for (let i=0; i<10; i++){
    document.write(`<div>Immortal Souls</div>`);
}


console.log(`За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині`);

for (let i=0; i<10; i++){
    document.write(`<div>${i} Immortal Souls</div>`);
}


console.log(`За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.`);

let j = 0;
while (j<20){
    document.write(`<h1>Stories of memory</h1>`);
    j++;
}


console.log(`За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.`);

let g = 0;
while (g<20){
    document.write(`<h1>${g} Stories of memory</h1>`);
    g++;
}


console.log(`Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.`);

let numbers = [2,17,13,6,22,31,45,66,100,-18];
for (let i=0; i<numbers.length; i++){
    console.log(numbers[i])
}


console.log(`Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.`);

let string = [`pink`, `red`, `black`, `blue`, `green`, `yellow`, `orange`, `white`, `brown`, `gray`];
for (let i=0; i<string.length; i++){
    console.log(string[i]);
}


console.log(`Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.`);

let all = [`pink`, 8, `red`, 15, `black`, 48, `blue`, 3, `green`, 89];
for (let i=0; i<all.length; i++){
    console.log(all[i]);
}


console.log(`Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи`);

let target = [1, `red`, true, 24, false, `red`, 8, `blue`, true, false];
for (let i=0; i<target.length; i++){
    if (typeof target[i] ==="boolean") {
        console.log(target[i]);
    }
}


console.log(`Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи`);

let target2 = [1, `red`, true, 24, false, `red`, 8, `blue`, true, false];
for (let i=0; i<target2.length; i++){
    if (typeof target2[i] ==="number") {
        console.log(target2[i]);
    }
}


console.log(`Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи`);

let target3 = [1, `red`, true, 24, false, `red`, 8, `blue`, true, false];
for (let i=0; i<target3.length; i++){
    if (typeof target3[i] ==="string") {
        console.log(target3[i]);
    }
}


console.log(`Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.`);

let array4 = [];
array4[0] =`If`;
array4[1] = `nothing`;
array4[2] = `works,`;
array4[3] = `I'll`;
array4[4] = `start`;
array4[5] = `it again!`;
array4[6] = true;
array4[7] = 5;
array4[8] = false;
array4[9] = 8;
for (let i=0; i<array4.length; i++){
    console.log(array4[i]);
}


console.log(`Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write`);

for (i=0; i<10; i++){
    console.log(`Step: ' + i + '`);
    document.write(`Step: ' + i + '`);
}


console.log(`Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write`);

for (j=0; j<100; j++){
    console.log(`Step: ' + j + '`);
    document.write(`Step: ' + j + '`);
}


console.log(`Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write`);

for (j=0; j<100; j+=2){
    console.log(`Step: ' + j + '`);
    document.write(`Step: ' + j + '`);
}


console.log(`Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write`);

for (g=0; g<100; g++){
    if (g%2 === 0) {
        console.log(`Step: ' + g + '`);
        document.write(`Step: ' + g + '`);
    }
}


console.log(`Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write`);

for (g=0; g<100; g++){
    if (g%2 !== 0) {
        console.log(`Step: ' + g + '`);
        document.write(`Step: ' + g + '`);
    }
}