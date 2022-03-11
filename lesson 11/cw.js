console.log(`є масив. створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.`);

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let favKey = `favorites`
localStorage.setItem(favKey, JSON.stringify([]))
let div = document.createElement(`div`);

users.forEach(user => {
    let divUser = document.createElement(`div`);
    divUser.innerText = `${user.name} ${user.age} ${user.status}`;
    let btn = document.createElement(`button`);
    btn.innerText = `Give to favorites`;
    btn.onclick = () => {
       let favorites = JSON.parse(localStorage.getItem(favKey));
       favorites.push(user);
       localStorage.setItem(favKey, JSON.stringify(favorites));
       btn.disabled = true;
   }
   div.append(divUser, btn);
   document.body.append(div);
})

let a = document.createElement(`a`);
a.innerHTML = `<a href = "./favorites.html">Favorites</a>`;
document.body.append(a);