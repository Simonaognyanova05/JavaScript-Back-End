const express = require('express');

const app = express();
let visited = 0;
app.get('/', (req, res) => {
    if(req.headers.cookie){
        const tokens = req.headers.cookie.split(';').map(t => t.trim());

        const visitedCookie = tokens.find(t => t.includes('visited'));
        visited = Number(visitedCookie.split('=')[1]);
        visited++;
    }
    res.setHeader('Set-Cookie', `visited=${visited}`);
    res.send(`<p>You have visited this site ${visited} times.`);
})
app.listen(3000);