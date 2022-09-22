class Vehicle{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
}



class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model);
        this.year = year;
    }
    
    owners = [];
    
    getCarInfo = () => {
        // DONE
        return this.make + " " + this.model + " released in " + this.year; 
    }
    
    addOwner = (owner) => {
        // DONE
        this.owners.push(owner);
    }
    
    removeOwner = (owner) => {
        // DONE
        // Simple filter
        this.owners = this.owners.filter(item => item.name !== owner.name && item.surname !== owner.surname);
    }
    
    getOwnersCount = () => {
        // DONE
        return this.owners.length;
    }
    
    getOwnerNames = () => {
        // DONE
        return this.owners.map(person => person.fullName());
    }
    
    getFullInfo = () => {
        // DONE
        // Tesla Model S from 2015. 2 person owns this car. These are - Daniel Barbakadze, Elon Musk.
        return this.make + " " + this.model + " from " +  this.year + ". " + this.getOwnersCount() + " person owns this car. These are - " + this.getOwnerNames().join(' ,');
    }
}

