const express = require('express');

const app = express();

let visited = 0;
let id;

app.get('/', (req, res) => {
    const cookies = (req.headers.cookie || '')
        .split(';')
        .map(t => t.trim())
        .map(t => t.split('='))
        .reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});

    console.log(cookies.sessionId);
    if (cookies.sessionId == undefined) {
        let newId = ('000000' + (Math.random() * 999999).toString(16)).slice(-6);
        id = newId;
        res.setHeader('Set-Cookie', `sessionId=${newId}; httpOnly`);
        visited = 1;
    } else if (cookies.sessionId == id) {
        visited++;
    }
    res.send(`<p>Hello</p><p>You have visited ${visited} times</p>`)
})
app.listen(3000);