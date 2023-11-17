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


    // //Get first element
    // const data = await Car.findOne({});
    // console.log(data);

    // //Get element by Id
    // const dataById = await Car.findById('65577588037a26234ac795bd');
    // console.log(dataById);

    // //Updating data
    // dataById.name = 'Shkoda';
    // await dataById.save();
    // console.log(dataById);

    // //Deleting data
    // const carForDelete = await Car.findByIdAndDelete('6554eef5934e295872d7a33c');
    // await carForDelete.save();

    //Get data by condition (bigger than)
    // const car = await Car.find({ price: { $gt: 2000 } });
    // console.log(car);

    //Get data by condition (less than)
    // const car = await Car.find({ price: { $lt: 3000 } });
    // console.log(car);

    
    //Get data by condition (less than and bigger than or equal)
    const car = await Car.find({ price: { $lte: 3000, $gte: 1000 } });
    console.log(car);
}
