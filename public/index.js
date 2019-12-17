const path = require('path');
const express = require('express');
const app = express();

//define paths for express
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
//setup handlebars engine and views location
app.set('views engine', 'hbs'); //telling express/node to use hbs for templates
app.set('views', viewsPath); //telling express to get templates from templates/views/folder
app.get("", async (req, res) => {
    try {
        res.render('index');
    } catch (error) {
        res.status(500).send('Page not found');
    }
});

app.get('/thamisucks', (req, res) => {
    res.send('Thami sucks');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
    console.log(viewsPath);
});
//127.0.0.1:3000    or    localhost:3000