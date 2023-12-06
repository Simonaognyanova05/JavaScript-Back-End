const mongoose = require('mongoose');
const Car = require('../models/Car');

const connectionString = 'mongodb://localhost:27017/cars';

async function homePage(req, res){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });


    const car = await Car.find({});
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cars | Home page</title>
    </head>
    <body>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/create">Create car</a></li>
        <li><a href="/update">Update car</a></li>
        <li><a href="/delete">Delete car</a></li>
    </ul>
    <h1>Home page</h1>
    <p>This is home page</p>
    <ul>
        ${car.map(x => `<li>${x.brand} - ${x.model} - ${x.year} - ${x.price}</li>`)}
    </ul>
</body>
</html>
    `)
}

module.exports = {homePage}