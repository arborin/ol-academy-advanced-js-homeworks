// მეთოდები არის ჩვეულებრივი ფუნქციები 
// რომლებიც მინიჭებული აქვს ობიექტის პროპერტის

let rebbit = {};

rebbit.speak = function(line){
    console.log(`The rabbit says ${line}`);
}


rebbit.speak("I'm alive");

// ფუნქციას თუ ვიძახებთ როგორც მეთოდს
// this მიმთითებელით ვიღებთ ობიექტის პროპერტიებს

function speak(task){
    console.log(`I can do ${this.type} of ${task}`);
}

let whiteRebbit = {type: "woodworking", speak}

whiteRebbit.speak("box");


speak.call(whiteRebbit, 'table');


// function რეზერვირებული სიტყვით გამოცხადებულ
// ფუნქციას this_მიმთითებელი არ გააჩნია

// ისრიან ფუნქციები არ ებმებიან თავიანთ მიმთითებელს
// მაგარმ ხედავენ თავიანთ სკოპს


let empty = {};

console.log(empty.toString);
console.log(empty.toString());


// პროტოტიპები ვერ გავიგე და უნდა დავუბრუნდე თავიდან


// კლასები

class Person{
    constructor(name, age, pid){
        console.log(`${name} = ${age} = ${age}`);
    }
}


let worker = new Person("Jemali", 40, 1002020202)
console.log(worker);