var express = require('express');
var app = express();

// 编写基础的中间层
// var handler = (req, res, next) => {
//     res.send('response for all paths in all http methods');
// };
// // 使用中间层
// app.use(handler);



// 创建可传参的中间层，参数由闭包传递（options）
var handler2 = (options) => {
    // 返回中间层
    return (req, res, next) => {
        res.send('传递给中间层的参数: options.a： = ' + options.a + '\t' + 'options.b = ' + options.b);
    };
};

app.use(handler2({ a: 1, b: 'this is a string' }));

app.listen(3000, () => {
    console.log('server is running on port 3000');
});
