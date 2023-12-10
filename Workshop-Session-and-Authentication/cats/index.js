const express = require('express');
const expressSession = require('express-session');
const hbs = require('express-handlebars');
const homeController = require('./src/home');
const registerController = require('./src/register');
const {register} = require('./requests/registerReq');


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
app.get('/register', registerController);
app.post('/register', async(req, res) => {
    await register(req, res);
});

app.listen(3000);