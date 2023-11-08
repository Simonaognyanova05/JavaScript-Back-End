const express = require('express');
const logger = require('./logger');
const catalogCon = require('./catalog');
const isAdmin = require('./auth');

const app = express();

app.use(logger)
app.use('/catalog',
    // (req, res, next) => {
    //     console.log('>>>', req.method, req.url);
    //     next();}, 
    catalogCon);

app.get('/', (req, res) => {
    res.send('Hello, Express!');
})

app.get('/create', (req, res) => {
    res.send('<form method="POST"><input name="name"><button>Submit</button></form>');
})

app.get('/catalog', 
// (req, res, next) => {
//     console.log('>>>', req.method, req.url);
//     next();
// },
    (req, res) => {
        res.send('Catalog page');
    })
    router.post('/create', (req, res) => {
    res.send('Your post request is success');
})

app.get('/about', (req, res) => {
    res.send('About page');
})

app.post('/create', isAdmin,(req, res) => {
    res.send('Your post request is success');
})

app.get('/contacts', (req, res) => {
    res.redirect('/about');
})

//With params
app.get('/catalog/:id', (req, res) => {
    console.log(req.params);
    res.send('Product page');
})
app.listen(3001);