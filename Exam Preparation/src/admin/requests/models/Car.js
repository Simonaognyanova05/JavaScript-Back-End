const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    brand: {type: String, require: true},
    model: {type: String, require: true},
    year: {type: Number, require: true},
    price: {type: Number, require: true},
    img: {type: String, require: true},
})

const Car = mongoose.model('Car', carSchema);

module.exports = Car;