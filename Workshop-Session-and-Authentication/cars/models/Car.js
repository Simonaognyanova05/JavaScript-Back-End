const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    model: String,
    brand: String,
    year: Number,
    price: Number
})


const Car = mongoose.model('Car', carSchema);

module.exports = Car;