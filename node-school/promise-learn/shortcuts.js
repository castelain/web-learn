'use struct';

var promise1 = Promise.resolve('I AM FULFILLED!');
promise1.then(console.log);
var promise2 = Promise.reject(new Error('I AM REJECTED!'));
promise2.catch(function(error){
    console.log(error.message);
});
console.log('MAIN PROGRAM');