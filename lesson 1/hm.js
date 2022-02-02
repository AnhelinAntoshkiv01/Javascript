let hm1 = `Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
  Вивести кожну змінну за допомогою: console.log , alert, document.write`;
console.log(hm1);
let one = `hello`;
let two = `owu`;
let three = `com`;
let four = `ua`;
let five = 1;
let six = 10;
let seven = -999;
let eight = 123;
let PI = 3.14;
let nine = 2.7;
let ten = 16;
let yyy = true;
let xxx = false;
console.log(one);
// alert(one);
// document.write(`<div>${one}</div>`);
console.log(two);
// alert(two);
// document.write(`<div>${two}</div>`);
console.log(three);
// alert(three);
// document.write(`<div>${three}</div>`);
console.log(four);
// alert(four);
// document.write(`<div>${four}</div>`);
console.log(five);
// alert(five);
// document.write(`<div>${five}</div>`);
console.log(six);
// alert(six);
// document.write(`<div>${six}</div>`);
console.log(seven);
// alert(seven);
// document.write(`<div>${seven}</div>`);
console.log(eight);
// alert(eight);
// document.write(`<div>${eight}</div>`);
console.log(PI);
// alert(PI);
// document.write(`<div>${PI}</div>`);
console.log(nine);
// alert(nine);
// document.write(`<div>${nine}</div>`);
console.log(ten);
// alert(ten);
// document.write(`<div>${ten}</div>`);
console.log(yyy);
// alert(yyy);
// document.write(`<div>${yyy}</div>`);
console.log(xxx);
// alert(xxx);
// document.write(`<div>${xxx}</div>`);



let hm2 = `Переприсвоїти кожній змінній з завдання значення на довільне.
  Вивести кожну змінну за допомогою: console.log , alert, document.write`;
console.log(hm2);
one = 5;
two = 8;
three = 3;
four = 7;
console.log(one);
// alert(one);
// document.write(`<div>${one}</div>`);
console.log(two);
// alert(two);
// document.write(`<div>${two}</div>`);
console.log(three);
// alert(three);
// document.write(`<div>${three}</div>`);
console.log(four);
// alert(four);
// document.write(`<div>${four}</div>`);


let hm3 = `Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)`;
console.log(hm3);
let firstName = `Anhelina`;
let middleName = `Volodimirivna`;
let lastName = `Antoshkiv`;
let person = (`${firstName}, ${middleName}, ${lastName}`);
console.log(person);



let hm4 = `За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
    Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".`;
console.log(hm4);
let hi = `Hello Anhelina?`;
let hi2 = `Hello Anhelina Volodimirivna?`;
let hi3 = `Are you 21 years old?`;
prompt(hi);
prompt(hi2);
prompt(hi3);


let hm5 = `За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
  let a = 100; let b = '100'; let c = true;`;
console.log(hm5);
let a = 100;
let b = `100`;
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);



let hm6 = `Визначити відповідний оператор в виразах що б вийшов відповідний результат.
В однакових виразах не використовувати однакові оператори!!!
  5 ? 6 -> true
  5 ? 6 -> false
  5 ? 6 -> false
  5 ? 6 -> false
  10 ? 10 -> true
  10 ? 10 -> true
  10 ? 10 -> false
  10 ? 10 -> false
  10 ? 10 -> false
  123 ? '123' -> false
  123 ? '123' -> true`;
console.log(hm6);
console.log(5<6);
console.log(5>6);
console.log(5>=6);
console.log(5===6);
console.log(10===10);
console.log(10==10);
console.log(10<10);
console.log(10>10);
console.log(10!==10);
console.log(123<`123`);
console.log(123!==`123`);



let hm7 = `Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    let str = "20";
     let a = 5;
     document.write(str + a + "<br/>");
     document.write(str - a + "<br/>");
     document.write(str * "2" + "<br/>");
     document.write(str / 2 + "<br/>");`;
console.log(hm7);
let str = "20";
let y = 5;
document.write(`<div>${str + y + "<br/>"}</div>`);
console.log(str + y + "<br/>");
let w = `результат 205, так як 20 - стрічковий елемент,а 5 число`;
console.log(w);
document.write(`<div>${str - y + "<br/>"}</div>`);
console.log(str - y + "<br/>");
let q = `результат 15, так як 20 - стрічковий елемент при множенні, діленні і відніманні переводиться у число`;
console.log(q);
document.write(`<div>${str * "2" + "<br/>"}</div>`);
console.log(str * "2" + "<br/>");
let t = `результат 40, так як 20 - стрічковий елемент при множенні, діленні і відніманні переводиться у число`;
console.log(t);
document.write(`<div>${str / 2 + "<br/>"}</div>`);
console.log(str / 2 + "<br/>");
let p = `результат 10, так як 20 - стрічковий елемент при множенні, діленні і відніманні переводиться у число`;
console.log(p);



