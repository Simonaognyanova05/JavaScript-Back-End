const express = require('express');
const expressSession = require('express-session');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
    secret: 'secret cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
}));


app.get('/', (req, res) => {
    console.log(req.session.user);
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <p>Hello, ${req.session.user ? req.session.user : ''}</p>
    <a href="/login">Login</a>
</body>
</html>
    `);
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html')
})
app.post('/login', (req, res) => {
    if (req.body.username = 'simona' && req.body.password == '123') {
        console.log('Sucessfully');
        req.session.user = 'simona';
    }
    res.redirect('/');
    // console.log(req.body);
})
app.listen(3000);