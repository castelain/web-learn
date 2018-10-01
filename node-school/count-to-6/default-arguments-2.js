// 在JS中，默认的参数可以是表达式
// 默认的参数甚至可以依赖于之前的参数

module.exports = (str, n = str.length) => str + ('!').repeat(n);
