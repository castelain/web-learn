var express = require('express');
var path = require('path');
var app = express();

var port = Number(process.argv[2]);
var filePath = process.argv[3];

app.set('views', filePath || path.join(__dirname,'templates'));
app.set('view engine','pug');

app.get('/home',function(req,res){
    console.log('The server is running on http://127.0.0.1:' + port);
    res.render('index',{ date: new Date().toDateString() });
    res.end();
});

app.listen(port);