var express = require('express');
var stylus = require('stylus');
var app = express();

var port = Number(process.argv[2]);

app.use(express.static('public'));
app.use(stylus.middleware('public'));

app.listen(port,function(){
    console.log('The server is running on http://127.0.0.1:' + port);
});