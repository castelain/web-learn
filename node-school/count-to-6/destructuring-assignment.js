// 解构赋值：JS中借助数组或对象的结构，一次给多个变量进行赋值的语法
// 它可以帮助我们从复杂的数据结构中提取出需要的数据

let userArray = process.argv.slice(2);
let result = {};
[,result.username,result.email] = userArray;
console.log(result);