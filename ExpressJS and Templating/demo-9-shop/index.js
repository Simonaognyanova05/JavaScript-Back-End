const express = require('express');
const hbs = require('express-handlebars');

const app = express();

app.engine('.hbs', hbs.create({
    extname: '.hbs'
}).engine);

app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3000);