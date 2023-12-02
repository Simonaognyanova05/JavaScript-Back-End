const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());


app.get('/', (req, res) => {
    console.log(req.cookies);
    res.cookie('Cookie-Parser', 'hello');
    res.send(`Hello`);
})
app.listen(3000);