const express = require('express');
const hbs = require('express-handlebars');
const homeController = require('./src/home');
const createController = require('./src/create');
const updateController = require('./src/update');

const app = express();
app.engine('.hbs', hbs.create({
    extname: '.hbs'
}).engine);

app.set('view engine', '.hbs');
app.get('/', homeController);
app.get('/create', createController);
app.get('/update', updateController);

app.listen(3000);