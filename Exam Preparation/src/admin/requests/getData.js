const mongoose = require('mongoose');
const Car = require('./models/Car');

const connectionString = 'mongodb://localhost:27017/cars';

async function getData(req, res){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });


    try{
        const cars = (await Car.find({})).map(car => car.toJSON());
        return cars;
       
    }catch(err){
        res.send('Error');
    }
}

module.exports = {getData};