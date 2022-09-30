// CALLBACK EXAMPLE
// =====================================================================
function counting(number, alert){
    
    for(let i=0; i<number; i++){
        console.log(i);
    }
    
    alert();
}


function alert(){
    console.log("job done!")
}

// counting(5000, alert);


// =====================================================================


function printString(string){
    setTimeout(
        () => {
            for(let i=0; i<5; i++){
                console.log(string);
            } 
        },
        Math.floor(Math.random() * 100) +1
    );
}

function printAll(){
    printString("A");
    printString("B");
    printString("C");
}

printAll();
  

// PROMISES
function printString(string){
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(string);
            res();
        }, Math.floor(Math.random()*100) +1 );
    })
}