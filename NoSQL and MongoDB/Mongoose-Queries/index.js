const mongoose = require('mongoose');
const Car = require('./models/Car');
const connectionString = 'mongodb://localhost:27017/testdb';

start();

async function start() {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    //Get data by name
    // const car = await Car.find({}).select('name');
    // console.log(car);

    //Sort data by price by dec
    // const car = await Car.find({}).sort({price: -1});
    // console.log(car);

    //Sort data by price by aec
    const car = await Car.find({}).sort({price: 1});
    console.log(car);
}
