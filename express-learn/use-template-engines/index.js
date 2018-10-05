var express = require('express');
var app = express();

app.set('views', './views');
app.set('view-engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { title: 'pug-engine', msg: 'express-template-engines-pug' });
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});