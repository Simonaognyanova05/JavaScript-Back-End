const mongoose = require('mongoose');
const Car = require('./models/Car');
const connectionString = 'mongodb://localhost:27017/testdb';

start();

async function start() {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    // try {
    //     const car = new Car({
    //         name: 'VW',
    //         price: 3000
    //     })
    //     await car.save();
    // } catch (err) {
    //     console.log(err._message);
    // }


    //Get first element
    const data = await Car.findOne({});
    console.log(data);

    //Get element by Id
    const dataById = await Car.findById('65577588037a26234ac795bd');
    console.log(dataById);

}
