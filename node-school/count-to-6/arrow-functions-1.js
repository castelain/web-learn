// 箭头函数
// 最常见的用途是：简化函数声明的语法，在书写回调函数时，尤为方便
// 箭头函数等价于匿名函数
// 箭头函数的函数体如果只有一条语句，就不需要 return 关键字和花括号 {} 了

let input = process.argv.slice(2);
let result = input.map(value=>value[0])
                  .reduce((total,value)=>total += value);
console.log(`[${input}] becomes "${result}"`);
