function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.owners = [];
    
    this.getCarInfo = () => {
        return this.make + " " + this.model + " released in " + this.year; 
    }
    
    this.addOwner = (owner) => {
        this.owners.push(owner);
    }
    
    this.removeOwner = (owner) => {
        this.owners.filter(item => item !== owner)
    }
    
    this.getOwnersCount = () => {
        return this.owners.length;
    }
    
    this.getOwnerNames = () => {
        return this.owners.map(person => person.fullName());
    }
    
    this.getFullInfo = () => {
        // Tesla Model S from 2015. 2 person owns this car. These are - Daniel Barbakadze, Elon Musk.
        return "FULL INFO";
    }
}


function Person(name, surname, age, gender, cars = []){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.cars = cars;
    
    this.fullName = () => {
        return this.name + " " + this.surname;
    }
    
    this.countCars = () => {
        return this.cars.length;
    }
    
    this.buysCar = (car) => {
        this.cars.push(car)
        car.addOwner(this)
    }
    
    this.sellsCar = (car) => {
        return "REMOVE CAR";
    }
    
    this.getAllCarsInfo = () => {
        // Daniel owns these cars: Tesla Model S released in 2015, BMW M2 released in 2019.
    }
}








