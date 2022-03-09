console.log(`Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".`);

let one = document.getElementById(`text`);
let btn = document.createElement(`button`);
btn.innerText = `Onclick`;
btn.onclick = function () {
    one.style.display = `none`;
}
document.body.append(btn);



console.log(`Создайте кнопку, при клике на которую, она будет скрывать сама себя.`);

let btn1 = document.createElement(`button`);
btn1.innerText = `Click`;
btn1.onclick = function (){
    btn1.style.display = `none`;
}
document.body.append(btn1);




console.log(`створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача`);

let age = document.createElement(`input`)
let btn2 = document.createElement(`button`);
btn2.innerText = `Audit`;
btn2.onclick = function () {
    if (age.value >= 18){
        alert (`It's OK!`);
        age.value = ``;
    } else {
        alert (`You're so small. Sorry!`);
        age.value = ``;
    }
}
document.body.append(age, btn2);



console.log(`Создайте меню, которое раскрывается/сворачивается при клике`);

let menu = document.createElement(`ol`);
menu.innerText = `Menu`;
let arrayMenu = [`americano`, `latte`, `tea`, `espresso`];
for (let i = 0; i < arrayMenu.length; i++) {
    const arr = arrayMenu[i];
    let menuEl = document.createElement(`li`);
    menuEl.innerText = `${arr}`;
    menu.append(menuEl);
}
menu.onclick = function () {
    menu.classList.toggle(`hidden`);
}
document.body.append(menu);



console.log(`Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
Вывести список комментариев в документ, каждый в своем блоке. Добавьте каждому комментарию по кнопке для сворачивания его body.`);

let comments = [
    {title: `hi`, body: `kdfjg'prfoj xifghud'f igfjud'p`},
    {title: `by`, body: `edjhr;w lrfkjyi'e;tr`},
    {title: `dry`, body: `rtuokim[,m sr;oti'emdfg ngujk`},
    {title: `go`, body: `;l'ker'p`},
];

let div = document.createElement(`div`);
for (const element of comments) {
    let divComment = document.createElement(`div`);
    let h4 = document.createElement(`h4`);
    h4.innerText = element.title;
    let p = document.createElement(`p`);
    p.innerText = element.body;
    let btn3 = document.createElement(`button`);
    btn3.innerText = `Close`;
    btn3.onclick = () =>{
        p.classList.add(`pHidden`);
    }
    divComment.append(h4, p, btn3);
    div.append(divComment);
}
document.body.append(div);