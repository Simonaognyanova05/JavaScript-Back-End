const mongoose = require('mongoose');
const Car = require('./models/Car');

const connectionString = 'mongodb://localhost:27017/cars'
async function update(req, res) {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const { brand, model, year, price, img } = req.body;
    const carId = req.params.carId;
    const newData = { brand, model, year, price, img };

    try {
        await Car.updateOne({ _id: carId }, { $set: newData });
        res.redirect('/admin/catalog');
    } catch (err) {
        console.log(err);
    }
}

module.exports = { update };