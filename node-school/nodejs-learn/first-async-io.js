// learnyounode  -> 第一个异步IO
var fs = require('fs');
fs.readFile('./first-io.txt','utf8',function(err,data){
    if(err){
        console.log(err.toString());
    }else{
        var str = data.toString();
        // console.log(str);
        var arr = str.split('\n');
        console.log(arr.length - 1);
    }
});