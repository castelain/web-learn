var express = require('express');
var mysql = require('mysql');

var app = express();
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'jasmine',
    password: 'wql005x',
    database: 'test_express'
});

var resultSet = null;
var error = null;

connection.connect();
connection.query('select * from stu_info', (err, rows, fields) => {
    if(err){
        error = err;
        throw err;
    }else{
        resultSet = rows;
        console.log(rows[0].solution);
    }
    connection.end();
})

app.get('/', (req, res, next) => {
    if(error){
        res.send('查询数据库出错了！', error.message);
    }else{
        res.send('查询数据库得到的结果集的第一行数据是：' + resultSet[0].solution);
    }
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});