// expressworks -> 传统表单
var express = require('express');
var bodyParse = require('body-parser');
var app = express();
var urlEncodedParser = bodyParse.urlencoded({extended: false});
app.use(express.static('public'));

var port = Number(process.argv[2]);

app.post('/form',urlEncodedParser,function(req,res){
    var str = req.body.str;
    res.end(str.split('').reverse().join(''));
});

app.listen(port,function(){
    console.log('The server is running on http://127.0.0.1:' + port);
});