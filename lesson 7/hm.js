console.log(`Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)`);

function User(id, name, surname, email, phone) {
    this[`id`] = id;
    this[`name`] = name;
    this[`surname`] = surname;
    this[`email`] = email;
    this[`phone`] = phone;
}
let user1 = new User(168463, `Jane`, `Collins`, `jC@web.net`, 546656524684);
let user2 = new User(168485, `John`, `Collins`, `jhC@web.net`, 456987221354);
let user3 = new User(165416, `Kate`, `Darklin`, `kD@web.net`, 165465123364);
let user4 = new User(185454, `Den`, `Stuart`, `dS@web.net`, 135465426572);
let user5 = new User(145682, `Ann`, `Stuart`, `aS@web.net`, 165462698987);
let user6 = new User(121354, `Bred`, `Hantington`, `bH@web.net`, 213545462456);
let user7 = new User(124635, `Luis`, `Hantington`, `lH@web.net`, 879567954654);
let user8 = new User(123487, `Joseph`, `Merphy`, `jM@web.net`, 213578798782);
let user9 = new User(184695, `Josy`, `Renking`, `jR@web.net`, 213868725721);
let user10 = new User(156787, `David`, `Torens`, `dT@web.net`, 213679687797);
let userArray = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
console.log(userArray);



console.log(`Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)`);

console.log(userArray.filter(item => {
    if (item.id % 2 === 0){
        return item;
    }}))



console.log(`Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)`);

console.log(userArray.sort((a, b) => a.id - b.id));



console.log(`створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client`);

class Client {
    constructor(id, name, surname, email, phone, order) {
        this[`id`] = id;
        this[`name`] = name;
        this[`surname`] = surname;
        this[`email`] = email;
        this[`phone`] = phone;
        this[`order`] = order;
    }
}
let client1 = new Client(168463, `Jane`, `Collins`, `jC@web.net`, 546656524684, [`bred`, `butter`, `lemon`]);
let client2 = new Client(168485, `John`, `Collins`, `jhC@web.net`, 456987221354, [`apple`, `orange`, `"Sprite"`, `mint`]);
let client3 = new Client(165416, `Kate`, `Darklin`, `kD@web.net`, 165465123364, [`milk`, `bred`, `cheese`]);
let client4 = new Client(185454, `Den`, `Stuart`, `dS@web.net`, 135465426572, [`bred`, `butter`, `lemon`, `sausage`]);
let client5 = new Client(145682, `Ann`, `Stuart`, `aS@web.net`, 165462698987, [`apple`, `orange`, `banana`]);
let client6 = new Client(121354, `Bred`, `Hantington`, `bH@web.net`, 213545462456, [`bred`, `butter`, `milk`]);
let client7 = new Client(124635, `Luis`, `Hantington`, `lH@web.net`, 879567954654, [`milk`, `chocolate`, `ice-cream`]);
let client8 = new Client(123487, `Joseph`, `Merphy`, `jM@web.net`, 213578798782, [`onion`, `carrot`, `potato`]);
let client9 = new Client(184695, `Josy`, `Renking`, `jR@web.net`, 213868725721, [`onion`, `eggs`, `cream`, `cheese`]);
let client10 = new Client(156787, `David`, `Torens`, `dT@web.net`, 213679687797, [`eggs`, `sugar`, `chocolate`, `cream-cheese`, `strawberry`]);
let clientArray = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];
console.log(clientArray);



console.log(`Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)`);

console.log(clientArray.sort((a, b) => a.order.length - b.order.length));