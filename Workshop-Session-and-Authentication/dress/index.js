const express = require('express');
const hbs = require('express-handlebars');
const homeController = require('./src/home');
const createController = require('./src/create');


const app = express();
app.engine('.hbs', hbs.create({
    extname: '.hbs'
}).engine);

app.set('view engine', '.hbs');
//app.use('/content', express.static('static'));

app.get('/', homeController);
app.get('/create', createController);

app.listen(3000);
