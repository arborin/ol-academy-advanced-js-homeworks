
const carMethods = {
    getCarInfo:     function() { return this.make + " " + this.model + " released in " + this.year; },
    addOwner:       function(owner) { this.owners.push(owner); },
    removeOwner:    function(owner) { this.owners = this.owners.filter(item => item.name !== owner.name && item.surname !== owner.surname); },
    getOwnersCount: function() { return this.owners.length; },
    getOwnerNames:  function() { return this.owners.map(person => person.fullName()); },
    getFullInfo:    function() { return this.make + " " + this.model + " from " +  this.year + ". " + this.getOwnersCount() + " person owns this car. These are - " + this.getOwnerNames().join(' ,'); }
};



function createCar(make, model, year){
    
    let owners = [];
    
    let methods = Object.create(carMethods);
       
    return {
        getCarInfo: carMethods.getCarInfo,
        addOwner: carMethods.addOwner,
        removeOwner: carMethods.removeOwner,
        getOwnersCount: carMethods.getOwnersCount,
        getOwnerNames: carMethods.getOwnerNames,
        getFullInfo: carMethods.getFullInfo
    }
}


const personMethods = {
    
    fullName: function() { return this.name + " " + this.surname; },
    countCars: function() { return this.cars.length; },
    buysCar: function(car) {
                        this.cars.push(car);
                        car.addOwner(this);
                    },
    sellsCar: function(car) {
                car.removeOwner(this);
                this.cars = this.cars.filter(item => item.make !== car.make && item.model !== car.model);
            },
    getAllCarsInfo: function() { return this.name + " owns these cars: " + this.cars.map(car => car.getCarInfo()).join(', ') }

} 

function createPerson(name, surname, age, gender, cars = []){
    
    let methods = Object.create(personMethods);
    
    return {
        fullName: methods.fullName,
        countCars: methods.countCars,
        buysCar: methods.buysCar,
        sellsCar: methods.sellsCar,
        getAllCarsInfo: methods.getAllCarsInfo,
        getAllCarsInfo: methods.getAllCarsInfo
    }
}




let daniel916 = createPerson("Daniel", "Barbakadze", 21, "M", []);
// let ilona = createPerson("Elon", "Musk", 30, "M");
// let duti_picoti = createCar("BMW", "525", "1999");
// let stodevianosto = createCar("Mercedes", "E190", 1991);


console.log(daniel916.fullName());
// console.log(duti_picoti);

// daniel916.buysCar(duti_picoti); // adds passed car
// daniel916.buysCar(stodevianosto); // adds passed car
// daniel916.sellsCar(duti_picoti); // removes passed car
// ilona.buysCar(stodevianosto); // adds passed car
// ilona.buysCar(duti_picoti); // adds passed car

// console.log({
//   daniel: {
//     fullName: daniel916.fullName(),
//     countCars: daniel916.countCars(),
//     getAllCarsInfo: daniel916.getAllCarsInfo(),
//   },
//   elon: {
//     fullName: ilona.fullName(),
//     countCars: ilona.countCars(),
//     getAllCarsInfo: ilona.getAllCarsInfo(),
//   },
//   duti_picoti: {
//     getOwnersCount: duti_picoti.getOwnersCount(),
//     getOwnerNames: duti_picoti.getOwnerNames(),
//     getFullInfo: duti_picoti.getFullInfo(),
//     getCarInfo: duti_picoti.getCarInfo(),
//   },
//   stodevianosto: {
//     getOwnersCount: stodevianosto.getOwnersCount(),
//     getOwnerNames: stodevianosto.getOwnerNames(),
//     getFullInfo: stodevianosto.getFullInfo(),
//     getCarInfo: stodevianosto.getCarInfo(),
//   },
// });


