const express = require('express');
const expressSession = require('express-session');
const { homePage } = require('./src/home');
const { createPage } = require('./src/create');
const requests = require('./src/postRequest/post');
const {updatePage} = require('./src/update');
const { deletePage } = require('./src/delete');
const { loginPage } = require('./src/login');
const { registerPage } = require('./src/register');


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
    secret: 'secret cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
}));

app.use('/content', express.static('static'))
app.get('/', async (req, res) => {
    await homePage(req, res);
})
app.get('/create', (req, res) => {
    createPage(req, res);
})
app.post('/create', async (req, res) => {
    await requests.createData(req, res);
})
app.get('/update/:carId', (req, res) => {
    updatePage(req, res);
})

app.post('/update/:carId', async (req, res) => {
    await requests.updateData(req, res);
})

app.get('/delete/:carId', (req, res) => {
    deletePage(req, res);
});

app.delete('/delete/:carId', async (req, res) => {
    await requests.deleteData(req, res);
});
app.get('/login', (req, res) => {
    loginPage(req, res);
});
app.get('/register', (req, res) => {
    registerPage(req, res);
});
app.post('/register', async (req, res) => {
    await requests.register(req, res);
});
app.listen(3000);