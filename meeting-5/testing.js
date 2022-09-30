
// CALLBACK EXAMPLE
// =====================================================================
function counting(number, alert) {

    for (let i = 0; i < number; i++) {
        console.log(i);
    }

    alert();
}


function alert() {
    console.log("job done!")
}

// counting(5000, alert);


// =====================================================================


function printString1(string) {
    setTimeout(
        () => {
            for (let i = 0; i < 5; i++) {
                console.log(string);
            }
        },
        Math.floor(Math.random() * 100) + 1
    );
}

function printAll1() {
    printString1("A1");
    printString1("B1");
    printString1("C1");
}

// printAll1();


// PROMISES
function printString(string) {

    // აბრუნებს პრომის ობიექტს

    return new Promise((res, rej) => {
        setTimeout(() => {
            for (let i = 0; i < 5; i++) {
                console.log(string);
            }
            res();
        }, Math.floor(Math.random() * 100) + 1);
    })
}

function printAll() {
    printString("AA")
        .then(() => {
            return printString("BB");
        })
        .then(() => {
            return printString("CC");
        })
}

// printAll();



function getUsers(onSuccess) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Handle resolve and reject in the asynchronous API
            if (onSuccess) {
                resolve([
                    { id: 1, name: 'Jerry' },
                    { id: 2, name: 'Elaine' },
                    { id: 3, name: 'George' },
                ])
            } else {
                reject('Failed to fetch data!')
            }
        }, 1000)
    })
}


// getUsers(false)
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.error('ERROR: ' + error)
//     })
    

    

    
async function printLine(string){
    for(let i = 0; i<100; i++){
        console.log(string);
    }
}


// printLine('111');
// printLine('222');
// printLine('333');
// printLine('444');



function result(result){
    console.log(result);
}

function callMe(a, b, callback){
    console.log(`${a} + ${b} = `);
    callback(a+b);
}


callMe(2, 3, (data) => {
    console.log(data); 
});


callMe(2, 3, result);



