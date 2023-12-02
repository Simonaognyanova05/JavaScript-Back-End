const express = require('express');

const app = express();

let visited = 0;
let id;

const sessions = {};

function mySession(req, res, next){
    const cookies = (req.headers.cookie || '')
    .split(';')
    .map(t => t.trim())
    .map(t => t.split('='))
    .reduce((a, [k, v]) => Object.assign(a, {[k]: v}), {});

    let user = sessions[cookies.sessionId];
    if (user == undefined) {
        let newId = ('000000' + (Math.random() * 999999).toString(16)).slice(-6);
        user = {
            visited: 1
        }
        sessions[newId] = user;
        res.setHeader('Set-Cookie', `sessionId=${newId}; httpOnly`);
    } else {
        user.visited++;
    }
    req.session = user;
    next();
}
app.use(mySession);
app.get('/', (req, res) => {
    res.send(`You have visited site ${req.session.visited} times.`);
})
app.listen(3000);