// learnyounode -> http 文件服务器
var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function(req, res){
    var readStream = fs.createReadStream(filePath);
    readStream.on('open',function(){
        readStream.pipe(res);
    });
    readStream.on('error',function(err){
        res.end(err);
    });
});

server.listen(Number(port));