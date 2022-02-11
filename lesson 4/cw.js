console.log(`створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)`);

function numMin(num1, num2, num3){
    if (num1 < num2 && num3){
        console.log(num1);
    } else if (num2 < num1 && num3){
        console.log(num2);
    } else {
        console.log(num3);
    }
}
numMin(5, 8, 6);



console.log(`створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)`);

function numMax(num1, num2, num3){
    if (num1 > num2 && num3){
        console.log(num1);
    } else if (num2 > num3 && num2){
        console.log(num2);
    } else {
        console.log(num3);
    }
}
numMax(8, 8, 6);



console.log(`створити функцію яка повертає найбільше число з масиву`);

function arrayMax(arr){
    let max = arr[0];
    for (const item of arr) {
        if (item > max){
            max = item;
        }
    }
    return max;
}
let array = [123, 56, 89];
console.log(arrayMax(array));



console.log(`створити функцію яка повертає найменьше число з масиву`);

function arrayMin(arr){
    let min = arr[0];
    for (const item of arr) {
        if (item < min){
            min = item;
        }
    }
    return min;
}
console.log(arrayMin(array));



console.log(`створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13`);

function sum(arr){
    let result = 0;
    for (const arrElement of arr) {
        result = result + arrElement;
    }
    return result;
}
console.log(sum(array));



console.log(`створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.`);

function average(nums) {
    let sum = 0;
    for (const num of nums) {
       sum += num;
    }
    return sum/nums.length;
}
console.log(average(array));



console.log(`створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено)`);

function result(fg) {
    let max = arguments[0];
    let min = arguments[0];
    for (const element of arguments) {
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
console.log(result(5, 56, 87, 123));



console.log(`створити функцію яка заповнює масив рандомними числами
(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.`);

function random(length, limit){
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.round(Math.random()*100))
    }
    return array;
}
console.log(random(15, 100));



console.log(`створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.`);

function limit(length, limit){
    let array = [];
    for (let i=0; i<length; i++) {
        array.push(Math.round(Math.random()*limit))
    }
    return array;
}
console.log(limit(11, 55));



console.log(`Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].`);

function reverse(arr){
    let a = [];
    for (let i=0; i<arr.length; i++){
        a[i] = arr[(arr.length - 1) - i]
    }
    return a;
}
console.log(reverse([1, 6, 8]));