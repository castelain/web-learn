// learnyounode  -> 模块化
var myModule = require('./my-module');

var path = process.argv[2];
var ext = process.argv[3];


myModule(path,ext,function(err,data){
    if(err){
        console.log(err);
    }else{
        data.forEach(function(item){
            console.log(item);
        });
    }
});
