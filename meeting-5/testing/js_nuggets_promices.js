// pending, rejected, fulfilled

const promise = new Promise((resolve, reject) => {
    resolve([1,2,3]);
    // reject('there was error');
});


promise.then((data)=>{
    console.log("DATA " + data);
}).catch((err) => {
    console.log(err);
});