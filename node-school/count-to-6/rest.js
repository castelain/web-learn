// spread 操作符 VS rest 参数
// 当一个函数需要不定数量的参数时，可以使用rest参数接受传递进来的参数，并封装为一个数组
// 语法：
// function sum(...args){
     //args是参数组成的一个数组
// }

// ...args出现在函数声明的参数位置时，表示的是rest参数（有了它，就不需要使用arguments对象了）；
// ...args出现在函数调用传递参数位置时，表示的是spread操作符。

module.exports = function average(...args){
    return args.reduce((total,value) => total += value) / args.length;
};