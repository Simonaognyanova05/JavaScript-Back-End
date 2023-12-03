const express = require('express');
const expressSession = require('express-session');

const app = express();
const users = {};
app.use(express.urlencoded({extended: true}));
app.use(expressSession({
    secret: 'secret cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
}));

app.get('/', (req, res) => {
    const user = req.session.user || {
        username: 'Anonymous'
    }
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <p>Hello, ${user.username}</p>
    <a href="/login">Login</a>
    <a href="/register">Register</a>

</body>
</html>
    
    `);
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
})

app.post('/login', (req, res) => {
    const user = users[req.body.username];

    if(user && req.body.password == user.password){
        console.log('success');
        req.session.user = user;
        res.redirect('/');
    }else{
        res.send('Error!');
    }
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html');
})
app.post('/register', (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    users[req.body.username] = user;
    res.redirect('/');
})

app.listen(3000);