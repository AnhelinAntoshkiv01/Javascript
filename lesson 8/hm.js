console.log(`Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
- Напишіть код,  котрий :
    -- отримує текст з параграфа з id "content"`);

let content = document.getElementById(`content`);
console.log(content.innerText);



console.log(`-- отримує текст з блоку з id "rules"`);

let rules = document.getElementById(`rules`);
console.log(rules.innerText);



console.log(`-- замініть текст параграфа з id 'content' на будь-який інший`);

content.innerText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae, exercitationem modi mollitia omnis`;



console.log(`-- замініть текст параграфа з id 'rules' на будь-який інший`);

rules.innerText = `Blanditiis cupiditate deleniti
    molestias mollitia pariatur porro saepe! Dolorem eaque earum eligendi, iste maxime molestias quam vitae.
    Dolore hic in quae sed.`;



console.log(`-- змініть кожному елементу колір фону на червоний`);

let children = document.body.children;
for (const el of children) {
    el.style.background = `red`;
}



console.log(`-- змініть кожному елементу колір тексту на синій`);

for (const el of children) {
    el.style.color = `blue`;
}



console.log(`-- отримати весь список класів елемента з id=rules і вивести їх в console.log`);

console.log(rules.classList);



console.log(`-- поміняти колір тексту у всіх елементів fc_rules на червоний`);

let fcRules = document.getElementsByClassName(`fc_rules`);
for (const fcRule of fcRules) {
    fcRule.style.color = `darkred`;
}