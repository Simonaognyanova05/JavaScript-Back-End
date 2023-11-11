const express = require('express');
const handlebars = require('express-handlebars');
const homeController = require('./src/home');
const healthITController = require('./src/healthIT');
const outlookController = require('./src/outlook');
const jobsController = require('./src/jobs');

const app = express();

const hbs = handlebars.create({
    extname: '.hbs'
})

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.use('/content', express.static('static'));
app.get('/', homeController);
app.get('/healthIT', healthITController);
app.get('/outlook', outlookController);
app.get('/jobs', jobsController);

app.listen(3001);