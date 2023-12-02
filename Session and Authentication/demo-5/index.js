const express = require('express');
const expressSession = require('express-session');

const app = express();

app.use(expressSession({
    secret: 'secret cat',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: 'auto'}
}));


app.get('/', (req, res) => {
    if(req.session.visited){
        req.session.visited++;
    }else{
        req.session.visited = 1;
    }
    res.send(`<p>You have visited site ${req.session.visited} times.</p>`);
})
app.listen(3000);