let MyPromise = require('./my-promise');

// let p = new MyPromise(function(fulfill,reject){
//     // fulfill('my-fulfill-value');
//     reject('my-rejected-reason');
// });
// p.then(console.log).catch(console.error);

// let p = MyPromise.resolve('my-promise-value');
// p.then(function(value){
//     console.log(value + ' by jasmine');
// })
//     .then(console.log)
//     .catch(console.log);

let p1 = new MyPromise(function(fulfill,reject){
    fulfill(1);
});
let p2 = new MyPromise(function(fulfill,reject){
    // fulfill(2);
    reject('ERROR');
});
let p3 = new MyPromise(function(fulfill,reject){
    fulfill(3);
    // reject(3);
});

MyPromise.all([p1,p2,p3]).then(console.log).catch(console.log);
MyPromise.race([p1,p2,p3]).then(console.log).catch(console.log);