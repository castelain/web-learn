// 箭头函数和 this
// 箭头函数有助于让关于 this 的混淆问题减少混淆。
// 箭头函数中的 this 是绑定到词法作用域上，由上下文决定。
// 箭头函数中的 this 与在箭头函数外部的 this 值一样。

var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate(() => console.log(this.yelp));
    }
};
foot.kick();