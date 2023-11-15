const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/testdb';

start();

async function start(){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    const carShema = new mongoose.Schema({
        name: String,
        price: Number
    })

    const Car = mongoose.model('Car', carShema);
    const car = new Car({
        name: 'Opel Mokka',
        price: 2500
    })
    await car.save();

    const data = await Car.find({});
    console.log(data);
    console.log('Connected');
}
