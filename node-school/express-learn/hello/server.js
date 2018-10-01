// expressworks  -> hello world
var express = require('express');
var app = express();

var port = Number(process.argv[2]);

app.get('/home',function(req,res){
    console.log('The server is running on http://127.0.0.1:' + port);
    res.end('Hello World!');
});

app.listen(port);