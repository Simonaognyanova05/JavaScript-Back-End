const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
})

app.get('/create', (req, res) => {
    res.send('<form method="POST"><input name="name"><button>Submit</button></form>');
})

//With JSON response
app.post('/create', (req, res) => {
    res.status(201).json({
        _id: "33k2k2k",
        name: "Product 1",
        price: 33
    });
})

app.get('/catalog', (req, res) => {
    res.send('Catalog page');
})

app.get('/about', (req, res) => {
    res.send('About page');
})

app.get('/contacts', (req, res) => {
    res.redirect('/about');
})

//With params
app.get('/catalog/:id', (req, res) => {
    console.log(req.params);
    res.send('Product page');
})


app.get('/catalog/:id/details', (req, res) => {
    res.send('Details page');
})

//With more params
app.get('/catalog/:category/:id', (req, res) => {
    res.send('Category page');
})


//With patterns
app.get('/catalog/*/details', (req, res) => {
    res.send('Details page');
})
app.get('/catalog/*', (req, res) => {
    res.send('Product page');
})

//Must be in the end
app.all('*', (req, res) => {
    res.send('404 Not Found');
})
app.listen(3001);