function run(){
    setTimeout(() => {
        console.log("first");
        setTimeout(() => {
            console.log("second");
            setTimeout(() => {
                console.log("third");
            }, 2000);
        }, 3000);
    }, 1000);
    
    
    
   
}

run()