console.log(`створити функцію яка приймає три числа та виводить найменьше.`);

const minNum = (a, b, c) => {
    if (a < b && c){
        console.log(a);
    } else if (b < a && c){
        console.log(b);
    } else {
        console.log(c);
    }
}
minNum(4, 8, 6);




console.log(`створити функцію яка приймає три числа та виводить найбільше.`);

const numMax = (a, b, c) => {
    if (a > b && c){
        console.log(a);
    } else if (b > a && c){
        console.log(b);
    } else {
        console.log(c);
    }
}
numMax(6, 8, 3);



console.log(`створити функцію яка повертає найбільше число з масиву`);

const maxArr = (arr) => {
    let max = arr[0];
    for (const item of arr) {
        if (item > max){
            max = item;
        }
    }
    return max;
}
document.write(`<h4>The max of array - ${maxArr([4, 5, 8, 65])}`);



console.log(`створити функцію яка повертає найменьше число з масиву`);

const minArr = (arr) => {
    let min = arr[0];
    for (const item of arr) {
        if (item < min){
            min = item;
        }
    }
    return min;
}
document.write(`<h4>The min of array - ${minArr([4, 5, 8, 65])}`);



console.log(`створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13`);

const sum = (arr) => {
    let result = 0;
    for (const arrElement of arr) {
        result = result + arrElement;
    }
    return result;
}
document.write(`<h4>Sum numbers of array - ${sum([4, 5, 8, 65])}`);



console.log(`створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.`);

const average = (nums) => {
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    return sum/nums.length;
}
document.write(`<h4>Average number of array - ${average([4, 5, 8, 65])}`);



console.log(`створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);`);

const result = (...arg) => {
    let max = arg[0];
    let min = arg[0];
    for (const element of arg) {
        if (element > max){
            max = element;
        }
        if (element < min){
            min = element;
        }
    }
    console.log(max);
    return min;
}
document.write(`<h4>The min number - ${result(4, 5, 8, 65)}`);



console.log(`створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.`);

const random = (length, limit) => {
    let array = [];
    for (let i=0; i<length; i++) {
        array.push(Math.round(Math.random()*100))
    }
    return array;
}
document.write(`<h4>Array of random numbers - ${random(24, 100)}`);



console.log(`створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.`);

const limitRandom = (length, limit) => {
    let array = [];
    for (let i=0; i<length; i++) {
        array.push(Math.round(Math.random()*limit))
    }
    return array;
}
document.write(`<h4>Array of random numbers with limit - ${limitRandom(8, 55)}`);



console.log(`Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].`);

const reverse = (arr) => {
    let a = [];
    for (i=0; i<arr.length; i++){
        a[i] = arr[(arr.length - 1) - i]
    }
    return a;
}
document.write(`<h4>Reverse array - ${reverse([8, 55, 12])}`);