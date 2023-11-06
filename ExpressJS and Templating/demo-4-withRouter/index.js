const express = require('express');
const catalogController = require('./catalog');

const app = express();


app.use('/catalog', catalogController);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(3001);