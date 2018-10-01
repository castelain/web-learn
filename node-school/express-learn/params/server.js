var express = require('express');
var app = express();

var port = Number(process.argv[2]);

app.put('/message/:id',function(req,res){
    res.end(require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + req.params.id)
    .digest('hex'));
});

app.listen(port,function(){
    console.log('The server is running on http://127.0.0.1:' + port);
});