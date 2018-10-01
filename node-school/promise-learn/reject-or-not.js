'use strict';

var promise = new Promise(function(fulfill,reject){
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});
promise.then(console.log,onRejected);

function onRejected(error){
    console.log(error.message);
}