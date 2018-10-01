'use strict';

var promise = new Promise(function(fulfill,reject){
    setTimeout(function(){
        reject(new Error('REJECTED!'));
    },300);
});
promise.then(null,onRejected);

function onRejected(error){
    console.log(error.message);
}