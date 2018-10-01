'use strict';

function alwaysThrows(){
    throw new Error('OH NOES');
}
function iterate(value){
    console.log(value);
    return Number(value) + 1;
}
Promise.resolve(1)
       .then(iterate)
       .then(iterate)
       .then(iterate)
       .then(iterate)
       .then(iterate)
       .then(alwaysThrows)
       .then(iterate)
       .then(iterate)
       .then(iterate)
       .then(iterate)
       .then(iterate)
       .catch(onReject);
function onReject(error){
    console.log(error.message);

}