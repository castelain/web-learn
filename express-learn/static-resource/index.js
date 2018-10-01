var express = require('express');
var app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('test for express.static');
});

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});