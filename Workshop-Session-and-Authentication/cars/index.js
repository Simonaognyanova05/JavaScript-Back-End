const express = require('express');
const hbs = require('express-handlebars');
const homeController = require('./src/home');

const app = express();
app.engine('.hbs', hbs.create({
    extname: '.hbs'
}).engine);

app.set('view engine', '.hbs');
app.get('/', homeController);

app.listen(3000);