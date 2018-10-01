// learnyounode  -> 第一个同步IO
var fs = require('fs');

var buf = fs.readFileSync('./first-io.txt');
var bufStr = buf.toString();
var bufArr = bufStr.split('\n');
var lineNum = bufArr.length;
console.log(lineNum - 1);