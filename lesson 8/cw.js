console.log(`Взяти файл template_2.html та працювати в ньому
1) Напишіть код, який :
    a) додає клас з назвою групи, елементу з ід main_header`);

console.log(document.getElementById(`main_header`));



console.log(`b) робить шириниу елементу ul 400px`);

let ul = document.getElementsByTagName(`ul`);
ul[0].style.width = `400px`;
ul[0].style.border = `1px solid black`;



console.log(`c) робить шириниу всіх елементів з класом linkList шириною 50%`);

let linkList = document.getElementsByClassName(`linkList`);
for (const linkListElement of linkList) {
    linkListElement.style.width = `50%`;
    linkListElement.style.border = `1px solid red`;
}



console.log(`d) отримує текст який зберігається в елементі з класом listElement2`);

let listElement2 = document.getElementsByClassName(`listElement2`);
console.log(listElement2.innerText);



console.log(`e) отримує всі елементи li та змінює ім колір фону на сірий`);

let li = document.getElementsByTagName(`li`);
for (const liElement of li) {
    liElement.style.background = `gray`;
    liElement.style.margin = `3px`;
}



console.log(`f) отримує всі елементи 'a' та додає їм клас anchor`);

let a = document.getElementsByTagName(`a`);
for (const aElement of a) {
  aElement.classList.add(`anchor`);
}



console.log(`g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів`);

for (const aElement of a) {
    if (aElement.innerText === `link3`){
        aElement.style.fontSize = `40px`;
    }
}



console.log(` h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a`);

for (const aElement of a) {
    let newClass = aElement.innerText;
   aElement.classList.add(`element_${newClass}`);
}



console.log(`i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()`);

let subheader = document.getElementsByClassName(`sub-header`);
console.log(subheader);
for (const subheaderElement of subheader) {
    subheaderElement.style.background = prompt(`Choose background: (blue, green, yellow)`);
}



console.log(` j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()`);

for (const subheaderElement of subheader) {
    if (subheaderElement.innerText === `content 2 segment`){
        subheaderElement.style.color = prompt(`Enter color: (white, red, orange)`);
    }
}



console.log(`k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()`);

let content1 = document.getElementsByClassName(`content_1`);
for (const content1Element of content1) {
    content1Element.innerHTML = prompt(`Enter text`);
}



console.log(`l) отримати елементи p та змінити їм padding на 20px`);

let p = document.getElementsByTagName(`p`);
for (const pElement of p) {
    pElement.style.padding = `20px`;
    pElement.style.border = `1px solid black`;
}



console.log(`m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)`);

let text2 = document.getElementsByClassName(`text2`);
for (const text2Element of text2) {
    text2Element.innerText = `dec-2021`;
}