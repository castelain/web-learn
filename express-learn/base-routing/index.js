var express = require('express');
var app = express();

app.get('/', ( req, res ) => {
    res.send('Hello world');
});

app.post('/', (req, res) => {
    res.send('Got a post request');
});

app.put('/user', (req, res) => {
    res.send('Got a put request at /user');
});

app.delete('/user', (req, res) => {
    res.send('Got a delete request at /user');
});

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});