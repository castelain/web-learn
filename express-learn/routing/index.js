var express = require('express');
var app = express();

// 基础路由
app.get('/', (req, res) => {
    res.send('get request to homepage');
});

app.post('/', (req, res) => {
    res.send('post request to homepage');
});

app.get('/secret', (req, res, next) => {
    console.log('get path /secret');
    res.send('you are my little secret!');
    next();
})

// 以任何符合http模块的方法来请求路径/secret，以下指定的路由处理函数都会被调用
app.all('/secret', (req, res, next) => {
    console.log('this is secret page');
    next();
});

// 路由路径（字符串、字符串模式、正则表达式）
app.get('/about', (req, res) => {
    res.send('/about');
});

// ? -> 0/1  , 匹配 /abcd 或 /acd
app.get('/ab?cd', (req, res) => {
    res.send('/ab?cd');
});

// + -> 1/more , 匹配 /abcd 或 /abbcd等
app.get('/ab+cd', (req, res) => {
    res.send('/ab+cd');
});

// * -> 任何长度的任何字符串 , 匹配 /abcd, /abdskjcd, /abxcd 等
app.get('/ab*cd', (req, res) => {
    res.send('/ab*cd');
});

// (....) -> 匹配的某一字符串模式，匹配 /abcde 或 /abe
app.get('/ab(cd)?e', (req, res) => {
    res.send('/ab(cd)?e');
});

// 正则表达式，匹配任何带有 a 的路径
app.get(/a/, (req, res) => {
    res.send('/a/');
});

// 路由参数
app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send('req.params: ' + req.params);
});

app.get('/flight/:from-:to', (req, res) => {
    res.send('req.params: ' + req.params);
});

app.get('/user/userId(\d+)', (req, res) => {
    res.send('req.params: ' + req.params);
});

// 路由处理函数（可并列，可函数数组，可二者组合）
app.get('/example/a', (req, res, next) => {
    res.send('handler 1');
    next();
}, (req, res) => {
    res.send('handler 2');
});

var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
};
  
var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
};

var cb2 = function (req, res) {
    res.send('Hello from C!')
};

app.get('/example/b', [cb0, cb1, cb2]);

// 对同一路径集中调用不同的http方法
app.route('/book')
    .get((req, res) => {
        res.send('get /book');
    })
    .post((req, res) => {
        res.send('post /book');
    })
    .delete((req, res) => {
        res.send('delete /book');
    });

// 监听端口 3000
app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});