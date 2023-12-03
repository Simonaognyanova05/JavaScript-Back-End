const express = require('express');
const expressSession = require('express-session');
const requests = require('./requests/req');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
    secret: 'secret cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
}));

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    </head>
    <body>
    <p>Hello, ${req.session.user ? req.session.user.username : 'There'}</p>
    <a href="/login">Login</a>
    <a href="/register">Register</a>
    <a href="/delete">Delete</a>

    </body>
    </html>
    `)
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/login', async (req, res) => {
    await requests.login(req, res);
});
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html');
});
app.post('/register', async (req, res) => {
    await requests.register(req, res);
});
app.get('/delete', (req, res) => {
    res.sendFile(__dirname + '/delete.html');
});
app.post('/delete', async (req, res) => {
    await requests.remove(req, res);

});
app.listen(3000);
