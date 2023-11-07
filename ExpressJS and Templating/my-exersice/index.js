const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/catalog', (req, res) => {
    res.sendFile(__dirname + '/catalog.html');
})

app.listen(3000);