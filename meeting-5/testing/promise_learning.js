/*
ჯავასკრიპტში პრომისები გამოიყენება ასინქრონული ოპერაციებისთვის.
ამის საშუალებით ჩვენ ვიგებთ ასინქრონული ოპერაციები დასრულდა თუ არა.

პრომისებს აქვს 3 სტატუსი:

* pending
* fulfilled
* rejected

დეფაულტად აქვს pending სტატუსი, და ნიშნავს რომ პროცესი არ შესრულებულა.
თუ პროცესი წარმატებით დასრულდა მაშინ გადავა fulfilled სტატუში
თუ შეცდომა მოხდა მაშინ rejected სტატუსს მიიღებს.

თუ მონაცემები მოდის სერვერიდან პრომისის საშუალებით, მაშინ სტატუსი აქვ
pending, წარმატებით დასრულების შემდეგ fulfilled, შეცდომა rejected

*/


// CREATE PROMICE
// პრომისის კონსტრუქტორი იღებს ფუნქციას არგუმენტად
// ეს ფუნქცია თავის მხრივ იღებს 2 არგუმენტს.

const count = true;

let promise = new Promise(function(resolve, reject) {
    if(count){
        resolve("THERE IS COUNT VALUE");
    }else{
        reject("TEHRE IS NOT COUNT VALUE");
    }
});


console.log(promise);