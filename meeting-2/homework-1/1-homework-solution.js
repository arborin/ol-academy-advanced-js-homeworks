function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.owners = [];
    
    this.getCarInfo = () => {
        // DONE
        return this.make + " " + this.model + " released in " + this.year; 
    }
    
    this.addOwner = (owner) => {
        // DONE
        this.owners.push(owner);
    }
    
    this.removeOwner = (owner) => {
        // DONE
        // Simple filter
        this.owners = this.owners.filter(item => item.name !== owner.name && item.surname !== owner.surname);
    }
    
    this.getOwnersCount = () => {
        // DONE
        return this.owners.length;
    }
    
    this.getOwnerNames = () => {
        // DONE
        return this.owners.map(person => person.fullName());
    }
    
    this.getFullInfo = () => {
        // DONE
        // Tesla Model S from 2015. 2 person owns this car. These are - Daniel Barbakadze, Elon Musk.
        return this.make + " " + this.model + " from " +  this.year + ". " + this.getOwnersCount() + " person owns this car. These are - " + this.getOwnerNames().join(' ,');
    }
}


function Person(name, surname, age, gender, cars = []){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.cars = cars;
    
    this.fullName = () => {
        // DONE
        return this.name + " " + this.surname;
    }
    
    this.countCars = () => {
        // DONE
        return this.cars.length;
    }
    
    this.buysCar = (car) => {
        // DONE
        this.cars.push(car);
        car.addOwner(this);
    }
    
    this.sellsCar = (car) => {
        // DONE
        car.removeOwner(this);
        // Simple Filter
        this.cars = this.cars.filter(item => item.make !== car.make && item.model !== car.model);
    }
    
    this.getAllCarsInfo = () => {
        // DONE
        // Daniel owns these cars: Tesla Model S released in 2015, BMW M2 released in 2019.
        return this.name + " owns these cars: " + this.cars.map(car => car.getCarInfo()).join(', ')
    }
}




let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
let ilona = new Person("Elon", "Musk", 30, "M");

let duti_picoti = new Car("BMW", "525", "1999");
let stodevianosto = new Car("Mercedes", "E190", 1991);

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
  }
  ,
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