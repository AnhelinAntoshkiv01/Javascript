console.log(`створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.`);

let form1 = document.createElement(`form`);
form1.style.margin = `10px`;
let input1 = document.createElement(`input`);
input1.setAttribute(`name`, `Cesar`);
input1.style.margin = `5px`;
let input2 = document.createElement(`input`);
input2.setAttribute(`surname`, `Keishan`);
form1.append(input1, input2);

let form2 = document.createElement(`form`);
form2.style.margin = `10px`;
let input3 = document.createElement(`input`);
input3.setAttribute(`name`, `Helen`);
input3.style.margin = `5px`;
let input4 = document.createElement(`input`);
input4.setAttribute(`surname`, `Reynold`);
form2.append(input3, input4);

let btn = document.createElement(`button`);
btn.innerText = `Go`;
btn.onclick = function () {
    console.log(document.forms)
}

document.body.append(form1, form2, btn);



console.log(`Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
(Додатковачастина для завдання)`);

let div = document.createElement(`div`);
div.style.marginTop = `20px`;
let input5 = document.createElement(`input`);
let input6 = document.createElement(`input`);
let input7 = document.createElement(`input`);
let btn1 = document.createElement(`button`);
btn1.innerText = `Create list`;
btn1.onclick = function () {
    let tr = input5.value;
    let td = input6.value;
    let innerText = input7.value;

    function tableGeneration(tr, td, etc) {
        let table = document.createElement(`table`);
        table.style.border = `1px solid red`;
        document.body.append(table);
        for (let i = 0; i < tr; i++) {
            let tr = document.createElement(`tr`);
            for (let j = 0; j < td; j++) {
                let td = document.createElement(`td`);
                td.innerText = `${etc}`;
                tr.append(td);
                table.append(tr);
            }
        }
    }
    tableGeneration(tr, td, innerText);
}
div.append(input5, input6, input7, btn1);
document.body.append(div);




console.log(`Сворити масив не цензцрних слів. Сворити інпут текстового типу. Якщо людина вводить слово і воно міститься в масиві не цензурних слів
кинути алерт з попередженням. Перевірку робити при натисканні на кнопку`);

let arrayWTF = [`wtf`, `maroon`, `stupid`, `shiet`, `bitch`, `bastard`, `ass`, `asshole`];
let divWTF = document.createElement(`div`);
let input = document.createElement(`input`);
let btn2 = document.createElement(`button`);
btn2.innerText = `Audit`;
btn2.onclick = function () {
    let value = input.value;
    for (let str of arrayWTF) {
        if (str === value) {
            alert (`Be obedient with me!`);
            input.value = ``;
            return;
        }
    }
    if (value) {
        alert (`Well done!`);
        input.value = ``;
        return;
    }
}
divWTF.append(input, btn2);
document.body.append(divWTF);
