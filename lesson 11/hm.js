console.log(`створити форму з інпутами для name та age.
При відправці форми записати об'єкт в localstorage`);

let form = document.createElement(`form`);
form.style.margin = `10px`;
let input1 = document.createElement(`input`);
input1.setAttribute(`name`, `input1`);
input1.style.margin = `5px`;
let input2 = document.createElement(`input`);
input2.setAttribute(`age`, `input2`);
form.append(input1, input2);

let btn = document.createElement(`button`);
btn.innerText = `Send`;
btn.onclick = function () {
    let result = [input1.value, input2.value];
    localStorage.setItem(`key1`, JSON.stringify(result))
}

document.body.append(form, btn);

console.log(`створити форму з інпутами для model,type та volume автівки.
при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.`);

let form1 = document.createElement(`form`);
form1.style.margin = `10px`;
let input3 = document.createElement(`input`);
input3.setAttribute(`model`, `input3`);
input3.style.margin = `5px`;
let input4 = document.createElement(`input`);
input4.setAttribute(`type`, `input4`);
input4.style.margin = `5px`;
let input5 = document.createElement(`input`);
input5.setAttribute(`volume`, `input5`);
form1.append(input3, input4, input5);

let btn1 = document.createElement(`button`);
btn1.innerText = `Send`;
btn1.onclick = function () {
    let result1 = [input3.value, input4.value, input5.value];
    localStorage.setItem(`key2`, JSON.stringify(result1));
}
document.body.append(form1, btn1);