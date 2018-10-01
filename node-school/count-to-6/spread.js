// ES6 中提出了两个密切相关的概念：rest 和 spread
// 这两个概念都是为了处理可变函数（具有可变数量的参数）
// spread的概念：使用 ...args（spread operator） 的语法去解开args参数的结构

console.log(`The minimum of [${process.argv.slice(2)}] is ${Math.min(...process.argv.slice(2))}`);