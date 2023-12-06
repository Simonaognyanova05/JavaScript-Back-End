const express = require('express');
const hbs = require('express-handlebars');
const homeController = require('./src/home');
const createController = require('./src/create');
const requests = require('./src/requests/req');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.engine('.hbs', hbs.create({
    extname: '.hbs'
}).engine);

app.set('view engine', '.hbs');
//app.use('/content', express.static('static'));

app.get('/', homeController);
app.get('/create', createController);
app.post('/create', async (req, res) => {
    await requests.create(req, res);
});

app.listen(3000);
