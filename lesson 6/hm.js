console.log(`Знайти та вивести довижину настипних стрінгових значень
    'hello world', 'lorem ipsum', 'javascript is cool'`);

let str1 = 'hello world';
console.log(str1.length);
let str2 = 'lorem ipsum';
console.log(str2.length);
let str3 = 'javascript is cool';
console.log(str3.length);



console.log(`Перевести до великого регістру наступні стрінгові значення`);

console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());



console.log(`Перевести до нижнього регістру настипні стрінгові значення`);

console.log(str1.toLowerCase());
console.log(str2.toLowerCase());
console.log(str3.toLowerCase());



console.log(`Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.`);

let strDirty = ' dirty string   ';
console.log(strDirty.trim());



console.log(`Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Каждый охотник желает знать';
    let arr = stringToarray(str);
    document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']`);

let stringToarray = (str) => {
    return str.split(' ');
}
let str = 'Каждый охотник желает знать';
let arr = stringToarray(str);
console.log(arr);
document.writeln(arr);



console.log(`Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
    let str = 'Каждый охотник желает знать';
    document.writeln(delete_characters(str, 7)); // Каждый`);

let delete_characters = (str, length) => {
    return str.substring(0, length);
}
document.writeln(delete_characters(str, 7));



console.log(`Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
   let str = "HTML JavaScript PHP";
   document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'`);

let strInsert = "HTML JavaScript PHP";
let insert_dash = (strInsert) => {
    return strInsert.toUpperCase().replaceAll(` `, `-`);
}
document.writeln(insert_dash(strInsert));



console.log(`Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.`);

let strArg = 'Каждый охотник желает знать';
let arg = strArg;
let argumentsUpper = (arg) => {
    arg[0].toUpperCase();
    return arg;
}
document.writeln(argumentsUpper(arg));



console.log(`Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.`);

let capitalize = (str) => {
    return str.split(` `).map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(` `);
}
document.writeln(capitalize(`But without the dark we'd never see the stars.`));