const express = require('express');
const { homePage } = require('./src/home');
const { createPage } = require('./src/create');
const { createData } = require('./src/postRequest/post');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    await homePage(req, res);
})
app.get('/create', async (req, res) => {
    await createPage(req, res);
})
app.post('/create', async (req, res) => {
    await createData(req, res);
})
app.listen(3000);