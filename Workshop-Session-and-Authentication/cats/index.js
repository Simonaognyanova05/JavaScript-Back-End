const express = require('express');
const expressSession = require('express-session');
const hbs = require('express-handlebars');
const homeController = require('./src/home');
const registerController = require('./src/register');
const loginController = require('./src/login');
const createController = require('./src/create');


const {register} = require('./requests/registerReq');
const {login} = require('./requests/loginReq');


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
app.get('/login', loginController);
app.post('/login', async(req, res) => {
    await login(req, res);
});

app.get('/create', createController);

app.listen(3000);