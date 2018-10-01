var http = require('q-io/http');
http.read('http://127.0.0.1')
    .then(function(value){
    console.log(JSON.parse(value));
})
    .catch(console.log);