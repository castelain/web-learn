// 闭包是 JS 语言中很重要的一部分
// 闭包在 node的回调编程中很为常见，它为JS处理很多的异步任务提供了有效的执行机制。
// 闭包的常见用法：
// 1.返回一个函数，然后延迟执行；
// 2.创建私有变量（闭包就是一个有状态的函数，并且它的状态对外是完全不可见的）；
// 3.闭包可以把多参数的函数变为单参数的函数。
// function makePow(n){
//     return function(x){
//         return Math.pow(x,n);
//     }
// }
//
// var pow2 = makePow(2);
//
// pow2(5);
// 25

function foo(){
    var bar;
    quux = 'global variable';
    function zip(){
        bar = true;
        var quux = 'local variable';
    }
    return zip;
}

// 箭头函数
// 箭头函数相当于匿名函数，并且简化了函数定义。
// 箭头函数有两种格式，一种像上面的，只包含一个表达式，连{ ... }和return都省略掉了。
// 还有一种可以包含多条语句，这时候就不能省略{ ... }和return：
// 两个参数:
(x, y) => x * x + y * y;

// 无参数:
() => 3.14;

// 可变参数:
(x, y, ...rest) => {
    var i, sum = x + y;
    for (i=0; i<rest.length; i++) {
        sum += rest[i];
    }
    return sum;
};

// 箭头函数看上去是匿名函数的一种简写，但实际上，箭头函数和匿名函数有个明显的区别：
// 箭头函数内部的this是词法作用域（静态作用域），由上下文确定。
// 匿名函数里的this是指向全局作用域的