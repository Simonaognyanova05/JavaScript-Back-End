const express = require('express');
const expressSession = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

const userHome = require('./src/user/home');
const userCatalog = require('./src/user/catalog');

const adminHome = require('./src/admin/home');
const adminRegister = require('./src/admin/register');
const adminLogin = require('./src/admin/login');
const adminCreate = require('./src/admin/create');
const adminCatalog = require('./src/admin/catalog');
const adminUpdate = require('./src/admin/update');

const { deletePage } = require('./src/admin/delete');

const { register } = require('./src/admin/requests/register');
const { login } = require('./src/admin/requests/login');
const { create } = require('./src/admin/requests/create');
const { remove } = require('./src/admin/requests/delete');
const {update} = require('./src/admin/requests/update');



const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
    secret: 'secret cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
}));
const hbs = exphbs.create({ extname: 'hbs', defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views/layouts/') });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use('/content', express.static('static'));

app.get('/', userHome);
app.get('/catalog', userCatalog);

app.get('/admin', adminHome);
app.get('/admin/register', adminRegister);
app.post('/admin/register', async (req, res) => {
    await register(req, res);
});
app.get('/admin/login', adminLogin);
app.post('/admin/login', async (req, res) => {
    await login(req, res);
});
app.get('/admin/create', adminCreate);
app.post('/admin/create', async (req, res) => {
    await create(req, res);
});
app.get('/admin/catalog', adminCatalog);
app.get('/admin/delete/:carId', (req, res) => {
    deletePage(req, res);
});
app.delete('/admin/delete/:carId', async (req, res) => {
    await remove(req, res);
});
app.get('/admin/update/:carId', adminUpdate);
app.post('/admin/update/:carId', async (req, res) => {
    await update(req, res);
});
app.listen(3000);
