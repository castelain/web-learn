// learnyounode  -> http收集信息
var http = require('http');
var bl = require('bl');

var url = process.argv[2];

http.get(url,function(response){
    response.pipe(bl(function(err,data){
        if(err){
            return console.error(err);
        }else{
            data = data.toString();
            console.log(data.length);
            console.log(data);
        }
    }));
});