const express = require('express');
const { homePage } = require('./src/home');
const { createPage } = require('./src/create');
const { createData, updateData } = require('./src/postRequest/post');
const {updatePage} = require('./src/update');


const app = express();

app.use(express.urlencoded({ extended: true }));

app.use('/content', express.static('static'))
app.get('/', async (req, res) => {
    await homePage(req, res);
})
app.get('/create', (req, res) => {
    createPage(req, res);
})
app.post('/create', async (req, res) => {
    await createData(req, res);
})
app.get('/update/:carId', (req, res) => {
    updatePage(req, res);
})

app.post('/update/:carId', async (req, res) => {
    await updateData(req, res);
})
app.listen(3000);