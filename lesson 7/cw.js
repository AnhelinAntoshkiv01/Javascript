console.log(`Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль їдемо зі швидкістю (максимальна швидкість) на годину;
    -- info () - яка виводить всю інформацію про автомобіль в форматі назва поля - значення поля;
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed;
    -- changeYear (newValue) - змінює рік випуску на значення newValue;
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car.`);

function Car(model, produced, year, maxSpeed, volume) {
    this[`model`] = model;
    this[`produced`] = produced;
    this[`year`] = year;
    this[`maxSpeed`] = maxSpeed;
    this[`volume`] = volume;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину.`);
    }
    this.info = function (){
        for (const key in this) {
            if (typeof this[key] !== `function`) console.log(`${key} - ${this[key]}`);
        }
    }
    this.increaseMaxSpeed = function (newSpeed){
       this[`maxSpeed`] = this[`maxSpeed`] + this[`newSpeed`];
    }
    this.changeYear = function (newValue){
        this.year = newValue;
    }
    this.addDriver = function (driver){
        this[`driver`] = driver;
    }
}
let sportcar = new Car(`Aston Martin DBS Superleggera`, `The Great Britain`, 2018, `340 km/h`, `5.2 l`);

sportcar.drive();
sportcar.info();
sportcar.increaseMaxSpeed(`50 km/h`);
sportcar.changeYear(2020);
sportcar.addDriver([{name: `Hloe`, age: 26, experience: 6}]);
console.log(sportcar);



console.log(`Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль їдемо зі швидкістю (максимальна швидкість) на годину;
    -- info () - яка виводить всю інформацію про автомобіль в форматі назва поля - значення поля;
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed;
    -- changeYear (newValue) - змінює рік випуску на значення newValue;
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car.`);

class Cars {
    constructor(model, produced, year, maxSpeed, volume) {
        this[`model`] = model;
        this[`produced`] = produced;
        this[`year`] = year;
        this[`maxSpeed`] = maxSpeed;
        this[`volume`] = volume;
    }
    drive(){
        console.log(`їдемо зі швидкістю ${this[`maxSpeed`]} на годину.`);
    }
    info(){
        for (const key in this) {
            if (typeof this[key] !== `function`) console.log(`${key} - ${this[key]}`);
        }
    }
    increaseMaxSpeed(newSpeed){
        this[`maxSpeed`] = this[`maxSpeed`] + this[`newSpeed`];
    }
    changeYear(newValue){
        this.year = newValue;
    }
    addDriver(driver){
        this[`driver`] = driver;
    }
}
let addCars = new Cars(`Audi e-tron S Sportback.`, `Germany`, 2021, `210 km/h`, `electrocar`);
addCars.drive();
addCars.info();
addCars.increaseMaxSpeed(`40 km/h`);
addCars.changeYear(2021);
addCars.drive([{name: `Hanna`, age: 25, experience: 3}]);
console.log(addCars);



console.log(`створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.`);

class Cinderella{
    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}
let cinderella1 = new Cinderella(`Rosy`, 19, 25.5);
let cinderella2 = new Cinderella(`Reina`, 18, 25);
let cinderella3 = new Cinderella(`Regina`, 20, 26.5);
let cinderella4 = new Cinderella(`Rimma`, 18, 23.5);
let cinderella5 = new Cinderella(`Irma`, 19, 24);
let cinderella6 = new Cinderella(`Inga`, 18, 25.5);
let cinderella7 = new Cinderella(`Ignes`, 19, 24);
let cinderella8 = new Cinderella(`Inessa`, 17, 23.5);
let cinderella9 = new Cinderella(`Irina`, 21, 25);
let cinderella10 = new Cinderella(`Riana`, 19, 25.5);
let cinderellaArray = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10];
console.log(cinderellaArray);



console.log(`Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.`);

class Prince {
    constructor(name, age, findshoe) {
        this.name = name;
        this.age = age;
        this.findshoe = findshoe;
    }
}
let prince = new Prince(`Hades`, 22, 25.5);
console.log(prince);



console.log(`За допомоги циклу знайти яка попелюшка повинна бути з принцом.`)

let couple = (cinderellaArray, prince) =>{
    for (const cinderellaArrayElement of cinderellaArray) {
        if (cinderellaArrayElement.foot_size === prince.findshoe){
            return `Твоя попелюшка ${cinderellaArrayElement.name}`;
        }
    }
}
console.log(couple(cinderellaArray, prince));



console.log(`Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку`);

console.log(cinderellaArray.find(item => item.foot_size === prince.findshoe));