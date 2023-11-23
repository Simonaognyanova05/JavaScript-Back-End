require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const bodyparser = require('body-parser');
const orderController = require('./controllers/orderController');

let app = express();
app.use(bodyparser.urlencoded({
    extended: true
}))
app.use(bodyparser.json());
app.use(express.static(path.json(__dirname, '/public')));
app.set('views', path.json(__dirname, 'views'));

app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/'
}));

app.set('view engine', 'hbs');
app.listen(3000);
app.use('/', orderController)
