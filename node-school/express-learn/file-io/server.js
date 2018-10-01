var express = require('express');
var fs = require('fs');
var app = express();

var port = process.argv[2];
var fileName = process.argv[3];

app.get('/books',function(req,res){
    var file = fs.readFile(fileName,function(err,data){
        if(err){
            return console.error(err);
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port,function(){
    console.log('The server is running on http://127.0.0.1:' + port);
});