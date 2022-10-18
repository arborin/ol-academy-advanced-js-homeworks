let myDate = new Date();

console.log(myDate);

let moment = require('moment');
let uniq = require('uniq');  // უნიკალური ელემენტები

console.log(moment(myDate).format('LL'));


let myList = [1,2,3,3,3,1,1,2,2,23,4,5,5,5,6,6,6];
console.log(uniq(myList).length);

const _ = require('lodash');

const numbers = [32,543,123,45];

_.each(numbers, function(number, i){
  console.log(number);
});