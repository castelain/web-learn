// 在 ES6 中，在声明函数的时候，参数上可以设置默认参数
// 当调用函数，却没传递所需参数时，就会使用默认设置的参数
// 如果要传递参数，但又想使用默认的参数，这时候可以在对应的位置上使用 undefined
// undefined 会触发使用对应位置的默认参数，而其他值却不会：比如说：null、0等

module.exports = function midpoint(lower = 0,upper = 1){
    return (lower + upper) / 2;
};