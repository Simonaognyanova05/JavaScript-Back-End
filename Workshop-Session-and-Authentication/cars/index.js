const express = require('express');
const hbs = require('express-handlebars');
const homeController = require('./src/home');
const createController = require('./src/create');
const updateController = require('./src/update');
const deleteController = require('./src/delete');

const app = express();
app.engine('.hbs', hbs.create({
    extname: '.hbs'
}).engine);

app.set('view engine', '.hbs');
app.get('/', homeController);
app.get('/create', createController);
app.get('/update', updateController);
app.get('/delete', deleteController);


app.listen(3000);