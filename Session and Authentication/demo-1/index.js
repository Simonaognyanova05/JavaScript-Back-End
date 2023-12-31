const express = require('express');

const app = express();

let visited = 0;

app.get('/', (req, res) => {
    if(req.headers.cookie){
        const tokens = req.headers.cookie.split(';').map(t => t.trim());
        console.log('>>> ' + tokens);
        let visitedCookie = tokens.find(t => t.includes('visited')); 
        visited = Number(visitedCookie.split('=')[1]);
        visited++;

    }
    res.setHeader('Set-Cookie', `visited=${visited}; httpOnly`);

    res.send(`<p>Hello</p><p>You have visited ${visited} times</p>`)
})
app.listen(3000);