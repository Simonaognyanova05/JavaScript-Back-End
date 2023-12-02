const express = require('express');

const app = express();

let visited = 0;
let id;

app.get('/', (req, res) => {
    const cookies = (req.headers.cookie || '')
    .split(';')
    .map(t => t.trim())
    .map(t => t.split('='))
    .reduce((a, [k, v]) => Object.assign(a, {[k]: v}), {});

    if (cookies.sessionId == undefined || cookies.sessionId != id) {
        let newId = ('000000' + (Math.random() * 999999).toString(16)).slice(-6);
        id = newId;
        res.setHeader('Set-Cookie', `sessionId=${newId}; httpOnly`);
        visited = 1;
    } else {
        visited++;
    }

    res.send(`You have visited site ${visited} times.`);
})
app.listen(3000);