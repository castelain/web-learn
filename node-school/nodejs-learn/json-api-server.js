// learnyounode -> HTTP JSON API 服务器
var http = require('http');
var url = require('url');

var port = Number(process.argv[2]);

var server = http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    var pathName = urlObj.pathname;
    var queryStr = urlObj.query;
    var timeStr = queryStr.split('=')[1];
    var time = new Date(timeStr);

    res.writeHead(200,{'Content-Type': 'application/json'});
    if(pathName === '/api/parsetime'){
        var json = {};
        json.hour = time.getHours();
        json.minute = time.getMinutes();
        json.second = time.getSeconds();
        res.end(JSON.stringify(json));
    }else if(pathName === '/api/unixtime'){
        var json1 = {};
        json1.unixtime = time.getTime();
        res.end(JSON.stringify(json1));
    }
});

server.listen(port);