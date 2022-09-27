//
// https://github.com/DanielBarbakadze/Advanced-JS-and-React-Basics/tree/master/Meeting-4
//
// CALLBACK FUNCTIONS
/*

ქოლბექ ფუნქციები არგუმენტებად გადაეცემა სხვა ფუნქციას.
რომლებიც სრულდება ამ ფუნქციაში.

*/

function display(some){
    console.log(`Answer: ${some}`);
}


function myCalculator(num1, num2, myCallback){
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, display);


// CLOSURES
/*
closures _ არის ფუნქციების კომბინაცია, რომელიც საშუალებას გვაძლევს
შიდა ფუნქციდან მივწვდეთ გარე ფუნქცის scopes.

javascript_ში closure_იქმნება ყოველთვის როდესაც ვქმნით ფუნქციას

*/

function init(){
    let name = 'Mozila';
    
    function displayName(){
        console.log(`BROWSER: ${name}`);
        // Nested functions have access to variables declared in their outer scope.
    }
    
    displayName();
}


init();

/*
    Global scope: 
        Variables declared outside of all functions are known as global variables and in the global scope. 
        Global variables are accessible anywhere in the program.
    
    Function scope: 
        Variables that are declared inside a function are called local variables and in the function scope. 
        Local variables are accessible anywhere inside the function.
          
    Block scope: 
        Variable that is declared inside a specific block & can’t be accessed outside of that block. 
        In order to access the variables of that specific block, we need to create object for it.
        
*/


// BACK TO CLOSURE
// Closure is a function that closes over another function.

function makeFunc(){
    let name = 'Mozila';
    
    function displayName(){
        console.log(`The Best Browser is: ${name}`);
    }
    
    return displayName; // უნდა აბრუნდებდეს ფუნქციის რეფერენსს
}


var myFunc = makeFunc();
myFunc();


// =====================================================================
// FACTORY FUNCTIONS
/*
The Factory Function is similar to constructor functions/class functions, 
but instead of using new to create an object, factory functions simply creates an object and returns it.
*/
function makeAdder(x){
    return function(y){
        return x + y;
    }
}


var add5 = makeAdder(10);
console.log("ADDER FACTORY FUNCTION: " + add5(5));


// Emulating private methods with closures
var counter = (function(){
    let privateCounter = 0;
    
    function changeBy(val){
        privateCounter += val;
    }
    
    
    return {
        // Those three public functions are closures
        // that share the same lexical environment. 
        // Thanks to JavaScript's lexical scoping, 
        // they each have access to the privateCounter variable and the changeBy function.
        
        increment: function(){
            changeBy(1);
        },
        
        decrement: function(){
            changeBy(-1);
        },
        
        value: function(){
            console.log(privateCounter);
        }
    } 
})();


console.log(counter.value());  // 0.

counter.increment();
counter.increment();
console.log(counter.value());  // 2.

counter.decrement();
console.log(counter.value());  // 1.


// CLOSURE SCOPE CHAIN
// Every closure has three scopes:
//     Local Scope (Own scope)
//     Outer Functions Scope
//     Global Scope

// global scope


let test = (function temp(a){
    return function(b){
        return a+b;
    }
})(5)(8)

console.log('SUM=' + test);



var e = 10;
function sum(a){
    
    return function(b){
        
        return function(c){
            
            // outer functions scope
            return function(d){
                
                // local scope
                return a + b + c + d + e;
            }
        }
    }
}

console.log(sum(1)(2)(3)(4));



//======================================================================
// FACTORY FUNCTIONS
// A factory function is any function which is not a class or constructor that returns an object.

let john = {
    firstName: 'John',
    lastName: 'Doe',
    
    getFullName(){
        return this.firstName + ' ' + this.lastName;
    }
}

console.log(john.getFullName());

// to avoid copying the same code all over again and again, 
// you can develop a function that creates the person object:

function createPerson(firstName, lastName){
    return {
        firstName: firstName,
        lastName: lastName,
        
        getFullName(){
            return this.firstName + ' ' + this.lastName;
        }
    }
}

// !!! When a function creates an object, it is called a factory function. 
// !!! The createPerson() is a factory function because it returns a new person object.

let p1 = createPerson('John', 'Doe');
let p2 = createPerson('Jane', 'Doe');

console.log(p1.getFullName()); // John Doe
console.log(p2.getFullName()); // Jane Doe


// ====================================================================
// To avoid repeating the same getFullName() function in the memory, 
// you can remove the getFullName() method from the person object:

const behavior = {
    getFullName: function(){
        return this.firstName + this.lastName;
    }
}

function personCreate(firstName, lastName){
    return {
        firstName, lastName, fullName: behavior
    }
}

p1 = personCreate("niko", "kobaidze");
console.log("==========================================")
console.log(p1);
console.log("==========================================")




