function makeUppercase(value){
    console.log(value.toUpperCase());
}

// makeUppercase('niko');

function reverseString(value){
    console.log(value.split('').reverse().join(''));
}

// reverseString("niko");


function handleName(name, cb){
    const fullname = `${name} kobaidze`;
    cb(fullname);
}


handleName('nika', makeUppercase);
handleName('nika', reverseString);


handleName('jemali', function(value){
    console.log("+++ " + value + " +++");
});