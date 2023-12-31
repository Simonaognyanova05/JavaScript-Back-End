const express = require('express');
const expressSession = require('express-session');
const hbs = require('express-handlebars');
const handlebars = require('handlebars');
const helpers = require('handlebars-helpers')();
const homeController = require('./src/home');
const registerController = require('./src/register');
const loginController = require('./src/login');
const createController = require('./src/create');
const updateController = require('./src/update');

const { register } = require('./requests/registerReq');
const { login } = require('./requests/loginReq');
const { create } = require('./requests/createReq');
const { logout } = require('./src/logout');
const { update } = require('./requests/updateReq');
const { remove } = require('./requests/deleteReq');
const { deletePage } = require('./src/deletePage');
const catalog = require('./src/catalog');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
    secret: 'secret cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
}));

handlebars.registerHelper(helpers);
app.engine('.hbs', hbs.create({
    extname: '.hbs'
}).engine);

app.set('view engine', '.hbs');
app.use('/content', express.static('static'));
app.get('/', homeController);
app.get('/register', registerController);
app.post('/register', async (req, res) => {
    await register(req, res);
});
app.get('/login', loginController);
app.post('/login', async (req, res) => {
    await login(req, res);
});

app.get('/create', createController);
app.post('/create', async (req, res) => {
    await create(req, res);
});

app.get('/logout', (req, res) => {
    logout(req, res);
});
app.get('/update/:catId', updateController);
app.post('/update/:catId', async (req, res) => {
    await update(req, res);
});
app.get('/delete/:carId', (req, res) => {
    deletePage(req, res);
});
app.delete('/delete/:catId', async (req, res) => {
    await remove(req, res);
})
app.get('/catalog', async (req, res) => {
    await catalog(req, res)
});

app.listen(3000);