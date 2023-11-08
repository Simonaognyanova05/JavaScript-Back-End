const express = require('express');
const catalogController = require('./catalog');
const { isAdmin } = require('./auth');

const app = express();


app.use('/content', express.static('public'));
app.use('/catalog', catalogController);
app.use('/create', express.static(__dirname + 'create.html'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/catalog', isAdmin, (req, res) => {
    res.status.apply(201).json({
        _id: 'wd23d1kk5',
        name: 'Product 1',
        price: 44
    })
})

app.listen(3001);