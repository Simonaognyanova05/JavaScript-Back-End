const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
})

app.get('/create', (req, res) => {
    res.send('<form method="POST"><input name="name"><button>Submit</button></form>');
})

app.post('/create', (req, res) => {
    res.status(201).send('Success');
})
app.listen(3001);