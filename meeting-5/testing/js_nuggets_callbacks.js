function makeUppercase(value){
    console.log(value.toUpperCase());
}

makeUppercase('niko');



function handleName(name, cb){
    const fullname = `${name} kobaidze`;
    cb(fullname);
}


handleName('nika', makeUppercase);