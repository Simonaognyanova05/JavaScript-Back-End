const express = require('express');
const { homePage } = require('./src/home');

const app = express();
app.get('/', async (req, res) => {
    await homePage(req, res);
})
app.listen(3000);