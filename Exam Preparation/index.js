const express = require('express');
const expressSession = require('express-session');
const hbs = require('express-handlebars');
const path = express('path');
const homeController = require('./src/home');
const healthITController = require('./src/healthIT');
const outlookController = require('./src/outlook');
const jobsController = require('./src/jobs');
const moreInfoController = require('./src/moreInfo');
const adminHome = require('./src/admin/admin');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
    secret: 'secret cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
}));

app.engine('.hbs', hbs.create({
    extname: '.hbs'
}).engine);

app.set('view engine', '.hbs');
app.use('/content', express.static('static'));

app.get('/', homeController);
app.get('/healthIT', healthITController);
app.get('/outlook', outlookController);
app.get('/jobs', jobsController);
app.get('/moreInfo', moreInfoController);

app.get('/admin/index', adminHome);


app.listen(3000);