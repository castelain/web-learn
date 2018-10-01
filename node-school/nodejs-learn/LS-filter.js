// learnyounode  -> 文件后缀名的过滤器
var fs = require('fs');
var path = require('path');

var path = process.argv[2];
var ext = process.argv[3];

fs.readdir(path,function(err,list){
    if(err){
        console.log(err);
    }else{
        var arr = list.filter(function(value,index){
            return path.extname(value) === '.' + ext;
        });
        for(var i = 0; i < arr.length; i ++){
            console.log(arr[i]);
        }
    }
});