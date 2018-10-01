'use strict';

function all(p1, p2){
    var counter = 0;
    var values = [];
    var promise = new Promise(function(fulfill,reject){

        p1.then(function(value){
            counter ++;
            values.push(value);
        });
        p2.then(function(value){
            counter ++;
            values.push(value);
        });

        if(counter >= 2){
            fulfill(values);
        }
    });
    return promise;
}
var promise1 = getPromise1();
var promise2 = getPromise2();
all(promise1,promise2).then(console.log);