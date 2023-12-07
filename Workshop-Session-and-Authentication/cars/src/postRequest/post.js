const mongoose = require('mongoose');
const Car = require('../../models/Car');

const connectionString = 'mongodb://localhost:27017/cars';

async function createData(req, res){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });


    const {brand, model, year, price, img} = req.body;
    try{
        const car = new Car({
            brand, model, year, price, img
        })
        await car.save();
        res.redirect('/')
    }catch(err){
        console.log(err);
    }
}

module.exports = {createData}
