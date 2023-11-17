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


    const data = await Car.find({});
    console.log(data);
    data.forEach(car => car.startEngine());
    data.forEach(car => console.log(car.VAT));

}
