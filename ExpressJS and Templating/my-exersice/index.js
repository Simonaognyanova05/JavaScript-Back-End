const express = require('express');
const catalogController = require('./catalog');
const createController = require('./create');

const app = express();

app.use('/catalog', catalogController);
app.use(createController);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.listen(3000);