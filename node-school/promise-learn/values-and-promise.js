'use struct';

function attachTitle(value){
    return 'DR. ' + value;
}

var promise = Promise.resolve('MANHATTAN');
promise.then(attachTitle)
       .then(console.log);