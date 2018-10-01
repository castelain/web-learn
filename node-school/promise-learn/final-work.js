var http = require('q-io/http');

http.read('http://127.0.0.1:7000')
    .then(function(value){
        return http.read('http://127.0.0.1:7001/' + value);
    })
    .then(function(value){
        console.log(JSON.parse(value));
    })
    .catch(function(reason){
        console.log('Fail in return object');
        console.log(reason);
    });