function run(){
    setTimeout(() => {
        console.log("first");
    }, 1000);
    
    setTimeout(() => {
        console.log("second");
    }, 3000);
    
    setTimeout(() => {
        console.log("third");
    }, 2000);
}

run()