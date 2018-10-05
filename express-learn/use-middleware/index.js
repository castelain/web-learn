var express = require('express');
var app = express();

// 1. Application-level middleware
// Bind application-level middleware to an instance of the app object 
// by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.
// app.get('/', (req, res) => {
//     res.send('get homepage');
// });

// app.get('/user/:id', (req, res, next) => {
//     // console.log('ID：', req.params.id);
//     if(req.params.id === '1')
//         next('route');
//     else
//         next();
// }, (req, res, next) => {
//     res.send('User Info');
// });

// app.get('/user/:id', (req, res, next) => {
//     res.end(req.params.id);
// })

// 2. Router-level middleware
// Router-level middleware works in the same way as application-level middleware, 
// except it is bound to an instance of express.Router().
var router = express.Router();

// This code is executed for every request to the router
// router.use((req, res, next) => {
//     console.log('Time : ', Date.now());
//     next();
// });

// // This code is executed for these requests that has path of user/:id
// router.use('/user/:id', (req, res, next) => {
//     console.log('Request URL: ', req.originalUrl);
//     next();
// }, (req, res, next) => {
//     console.log('Request Type: ', req.method);
//     next();
// });

// router.get('/user/:id', (req, res, next) => {
//     console.log(req.params.id);
//     res.send('get user/:id');
// });
// router.post('/user/:id', (req, res, next) => {
//     console.log(req.params.id);
//     res.send('post user/:id');
// });

// // mount the router on the app
// app.use('/', router);

// 权限管理(管理员：文件管理员->0，博客管理员->1，用户管理员->2)简易版
// router.use('/user/:id', (req, res, next) => {
//     if(req.params.id === '0'){
//         res.send('文件管理员，你好！');
//     }else if(req.params.id === '1'){
//         res.send('博客管理员，你好！');
//     }else if(req.params.id === '2'){
//         res.send('用户管理员，你好！');
//     }else{
//         // 401->未授权unauthrized，403->禁止访问forbidden
//         res.sendStatus(401);
//     }
// });

// app.use('/admin', router, (req, res, next) => {
//     res.sendStatus(404);
// });

// 3. Error-handling middleware
// Error-handling middleware always takes four arguments.
//  You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the next object, 
// you must specify it to maintain the signature. 
// Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broken!');
// });

// 4. Built-in middleware
// express.static   express.json    express.urlencoded

// 5. Third-party middleware
// Install the Node.js module for the required functionality, 
// then load it in your app at the application level or at the router level.
var cookieParser = require('cookie-parser');
app.use(cookieParser);

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});