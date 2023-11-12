const express = require('express');
const handlebars = require('express-handlebars');
const homeController = require('./src/home');

const app = express();
const hbs = ('.hbs', handlebars.create({
    extname: '.hbs'
}));

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.use('/content', express.static('static'));
app.get('/', homeController);

app.listen(3001);
