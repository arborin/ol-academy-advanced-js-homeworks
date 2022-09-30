function counting(number, alert){
    
    for(let i=0; i<number; i++){
        console.log(i);
    }
    
    alert();
}


function alert(){
    console.log("job done!")
}


counting(5000, alert);