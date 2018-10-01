// 一个最简单的express的应用方式

// 引入express框架，得到express实例
let express = require('express');
let app = express();
// 指定路由事件
app.get( '/', (req, res) => res.send('Hello world') );
// 监听指定端口号
app.listen( 3000, () => console.log('Example app listening on port 3000!') )
