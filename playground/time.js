var _ = require('lodash');

// var moment = require('moment');

// // var date = new Date();
// // var months = ['Jan', 'Feb']
// // console.log(date.getMonth());

// // var date = moment();
// // date.add(100, 'year').subtract(9, 'months');
// // console.log(date.format('MMM Do, YYYY'));

// new Date().getTime();
// var someTimestamp = moment().valueOf();
// console.log(someTimestamp);

// var createdAt = 1234;
// var date = moment(createdAt);
// console.log(date.format('h:mm a'));

var array1 = ['kollikissa1', 'kollikoira2', 'joonalol'];

var array2 = array1.slice();

_.pullAt(array1, 1);

console.log('Array 1');
console.log(array1);
console.log('Array 2');
console.log(array2);