// learnyounode  -> 模块化
var fs = require('fs');
var path = require('path');

module.exports = function(dirPath,ext,callback){
    fs.readdir(dirPath,function(err,list){
        if(err){
            // console.log(err);
            return callback(err);
        }else{
            var arr = list.filter(function(value,index){
                return path.extname(value) === '.' + ext;
            });
            callback(null,arr);
        }
    });
};