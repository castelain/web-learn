require('es6-promise');

var promise = new Promise(function(fulfill,reject){
    setTimeout(function(){
        fulfill('FULFILLED!');
    },300);
});
// promise.then(function(value){
//     console.log(value);
// });
promise.then(console.log);