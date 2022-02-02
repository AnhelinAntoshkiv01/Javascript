let task1 = `Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
Скласти результат цих чисел в змінній`;
console.log(task1);

//           0  1  2  3  4  5  6  7  8  9
let number =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(number);
let result = number[0]+number[1]+number[2]+number[3]+number[4]+number[5]+number[6]+number[7]+number[8]+number[9];
console.log(result);


let task2 = `Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр`;
console.log(task2);
let book ={
    title: 'Cat',
    quantity: 15,
    genre: 'tale'
}
console.log(book);


let task3 = `Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори`;
console.log(task3);
let book2 ={
    title: 'Cinderella',
    quantity: 15,
    genre: 'tale',
    author: 'brothers Grimm'
}
console.log(book2);



let task4 = `Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт`;
console.log(task4);
let book3 ={
    title: 'Donkey Skin',
    quantity: 15,
    genre: 'tale',
    author: 'brothers Grimm'
}
let product = [book3, book2];
console.log(book3);
console.log(book2);
console.log(product);



let task5 = `Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
   Значення площі зберігати в змінній s.`;
console.log(task5);
let height = 23;
let width = 10;
let s = height*width;
console.log(s);


let task6 = `Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
        результат помістіть у змінну v.`;
console.log(task6);
let heightC = 10;
let dC = 4;
let pi = 3.14159265359;
let v = pi * Math.pow(dC / 2, 2) * heightC;
console.log(v);


let task7 = `У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
       Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).`;
console.log(task7);
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n,2)+Math.pow(m,2))
console.log(k)

