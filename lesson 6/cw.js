console.log(`- Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'`);

let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
console.log(n1.replace(`..`, ` `));
console.log(n2.replace(`---`, ` `));
console.log(n3.replace(`__`, ` `));



console.log(`створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.`);

let random = (length, num) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        const arrElement = arr[i];
        arr.push(Math.floor(Math.random() * num));
    }
    return arr;
}
console.log(random(15,100));



console.log(`створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort`);

let sortArr = random(15, 100);
console.log(sortArr.sort((a, b) => a-b));



console.log(`створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа`);

let filter = (length, num) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        const arrElement = arr[i];
        arr.push(Math.floor(Math.random() * num));
    }
    return arr.filter(value => value % 2 === 0);
}
console.log(filter(15,100));



console.log(`створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.`);

let map = (length, num) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        const arrElement = arr[i];
        arr.push(Math.floor(Math.random() * num));
    }
    return arr.map(value => value.toString());
}
console.log(map(15,100));



console.log(`створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums('ascending') // [3,11,21]
sortNums('descending') // [21,11,3]`);

let sortNums = (arr, direction) =>{
    if (direction === `ascending`) return arr.sort((a,b) => a-b);
    if (direction === `descending`) return arr.sort((a,b) => b-a);
}
console.log(sortNums([1, 5, 23, 45, 15, 89], `ascending`));
console.log(sortNums([1, 5, 23, 45, 15, 89], `descending`));



console.log(`є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 відсортувати його за спаданням за monthDuration`);

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));



console.log(`відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців`);

console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));