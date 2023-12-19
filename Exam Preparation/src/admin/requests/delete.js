const mongoose = require('mongoose');
const Car = require('./models/Car');

const connectionString = 'mongodb://localhost:27017/cars';

async function remove(req, res) {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    try {
        await Car.findByIdAndDelete(req.params.carId);
        res.redirect('/admin/catalog');
    } catch (err) {
        res.send(err);
    }
}

module.exports = { remove }