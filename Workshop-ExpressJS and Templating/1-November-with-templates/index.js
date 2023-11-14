const express = require('express');
const handlebars = require('express-handlebars');
const homeController = require('./src/home');
const paisiiController = require('./src/Paisii');
const sofroniiController = require('./src/sofronii');


const app = express();
const hbs = handlebars.create({
    extname: '.hbs'
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.use('/content', express.static('static'));
app.get('/', homeController);
app.get('/paisii', paisiiController);
app.get('/sofronii', sofroniiController)

app.listen(3000);
