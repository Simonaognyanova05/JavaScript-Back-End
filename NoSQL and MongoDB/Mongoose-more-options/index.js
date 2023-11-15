const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/testdb';

const carShema = new mongoose.Schema({
    name: {type: String, required: true},
    price:{type: Number, default: 0}
})

carShema.methods.startEngine = function(){
    console.log(`${this.name} - ${this.price}`);
}
const Car = mongoose.model('Car', carShema);

start();

async function start(){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    // const car = new Car({
    //     name: 'Opel Mokka',
    //     price: 2500
    // })
    // await car.save();

    const data = await Car.find({});
    console.log(data);
    data.forEach(car => car.startEngine());
}
