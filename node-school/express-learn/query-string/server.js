var express = require('express');
var app = express();

app.get('/search',function(req,res){
    var query = req.query;
    res.json(query);
});

app.listen(process.argv[2],function(){
    console.log('The server is running on http://127.0.0.1:' + process.argv[2]);
});