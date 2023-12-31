const mongoose = require('mongoose');
const Car = require('./models/Car');

const connectionString = 'mongodb://localhost:27017/cars'
async function create(req, res) {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const { brand, model, year, price, img } = req.body;

    try {
        const car = new Car({
            brand, model, year, price, img
        });
        await car.save();
        res.redirect('/admin')
    } catch (err) {
        res.send(err);
    }
}

module.exports = { create };