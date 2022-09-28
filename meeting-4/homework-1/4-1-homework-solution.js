const carMethods = {
    getCarInfo() { return `${this.make} ${this.model} released in ${this.year}`; },

    addOwner(owner) { this.owners.push(owner); },

    removeOwner(owner) { this.owners = this.owners.filter(item => item.name !== owner.name && item.surname !== owner.surname); },

    getOwnersCount() { return this.owners.length; },

    getOwnerNames() { return this.owners.map(person => person.fullName()); },

    getFullInfo() { return this.make + " " + this.model + " from " + this.year + ". " + this.getOwnersCount() + " person owns this car. These are - " + this.getOwnerNames().join(' ,'); }
};


function createCar(make, model, year) {

    let car = Object.create(carMethods);

    car.make = make;
    car.model = model;
    car.year = year;
    car.owners = [];

    console.log(car);
    return car;
}


const personMethods = {

    fullName() { return `${this.name} ${this.surname}` },

    countCars() { return this.cars.length; },

    buysCar(car) {
        this.cars.push(car);
        car.addOwner(this);
    },
    sellsCar(car) {
        car.removeOwner(this);
        this.cars = this.cars.filter(item => item.make !== car.make && item.model !== car.model);
    },
    getAllCarsInfo() { return `${this.name} owns these cars: ${this.cars.map(car => car.getCarInfo()).join(', ')}` }

}

function createPerson(name, surname, age, gender, cars = []) {

    let person = Object.create(personMethods);

    person.name = name;
    person.surname = surname;
    person.age = age;
    person.gender = gender;
    person.cars = cars;

    return person;
}




let daniel916 = createPerson("Daniel", "Barbakadze", 21, "M", []);
let ilona = createPerson("Elon", "Musk", 30, "M");
let duti_picoti = createCar("BMW", "525", "1999");
let stodevianosto = createCar("Mercedes", "E190", 1991);



daniel916.buysCar(duti_picoti); // adds passed car
daniel916.buysCar(stodevianosto); // adds passed car
daniel916.sellsCar(duti_picoti); // removes passed car
ilona.buysCar(stodevianosto); // adds passed car
ilona.buysCar(duti_picoti); // adds passed car

console.log({
    daniel: {
        fullName: daniel916.fullName(),
        countCars: daniel916.countCars(),
        getAllCarsInfo: daniel916.getAllCarsInfo(),
    },
    elon: {
        fullName: ilona.fullName(),
        countCars: ilona.countCars(),
        getAllCarsInfo: ilona.getAllCarsInfo(),
    },
    duti_picoti: {
        getOwnersCount: duti_picoti.getOwnersCount(),
        getOwnerNames: duti_picoti.getOwnerNames(),
        getFullInfo: duti_picoti.getFullInfo(),
        getCarInfo: duti_picoti.getCarInfo(),
    },
    stodevianosto: {
        getOwnersCount: stodevianosto.getOwnersCount(),
        getOwnerNames: stodevianosto.getOwnerNames(),
        getFullInfo: stodevianosto.getFullInfo(),
        getCarInfo: stodevianosto.getCarInfo(),
    },
});


