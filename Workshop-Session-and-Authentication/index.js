const mongoose = require('mongoose');
const Car = require('./cars/models/Car');

const connectionString = 'mongodb://localhost:27017/cars';
start()
async function start(){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const data = await Car.findOne({});
    console.log(data._id.toString());
    
}