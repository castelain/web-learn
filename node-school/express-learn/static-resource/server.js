// expressworks  -> 静态文件
var express = require('express');
var path = require('path');
var app = express();

var port = Number(process.argv[2]);
var filePath = process.argv[3];

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

// app.get('/',function(req,res){
//     console.log('The server is running on http://127.0.0.1:' + port);
    
// });
console.log('The server is running on http://127.0.0.1:' + port);

app.listen(port);