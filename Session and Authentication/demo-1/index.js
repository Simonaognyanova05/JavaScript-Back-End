const express = require('express');

const app = express();

let visited = 0;

//something
app.get('/', (req, res) => {
    if(req.headers.cookie){
        console.log('Cookie ' + req.headers.cookie);
        visited = Number(req.headers.cookie.split('=')[1]);
        visited++;
    }
    res.setHeader('Set-Cookie', `visited=${visited}; httpOnly`);
    res.send(`<p>Hello</p><p>You have visited ${visited} times</p>`)
})
app.listen(3000);