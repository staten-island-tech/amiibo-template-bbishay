const path = require('path');
const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send('Thami likes bagels and butter. Also he smells');
});

app.get('/thamisucks', (req, res) => {
    res.send('Thami sucks');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
//127.0.0.1:3000    or    localhost:3000