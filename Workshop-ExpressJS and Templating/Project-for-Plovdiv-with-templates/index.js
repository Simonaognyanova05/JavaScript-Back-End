const express = require('express');
const handlebars = require('express-handlebars');
const homeController = require('./src/home');
const historyController = require('./src/history');
const geographyController = require('./src/geography');
const curiouslyController = require('./src/curiously');
const aboutController = require('./src/about');

const app = express();

const hbs = ('.hbs', handlebars.create({
    extname: '.hbs'
}))

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.use('/content', express.static('static'));
app.get('/', homeController);
app.get('/history', historyController);
app.get('/geography', geographyController);
app.get('/curiously', curiouslyController);
app.get('/about', aboutController);

app.listen(3001);