const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/testdb';

const carShema = new mongoose.Schema({
    name: { type: String, required: true },
    price: {
        type: Number,
        default: 0,
        // validate: {
        //     validator: function (value) {
        //         return value >= 0;
        //     },
        //     message: 'Error'
        // } 
        min: [0, 'Price cannot be less than {VALUE}'],
    }
})

carShema.methods.startEngine = function () {
    console.log(`${this.name} - ${this.price}`);
}
carShema.virtual('VAT').get(function () {
    return this.price * 0.2;
})
const Car = mongoose.model('Car', carShema);

start();

async function start() {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    try {
        const car = new Car({
            name: 'Mercedes',
            price: -2
        })
        await car.save();
    } catch (err) {
        console.log(err._message);
    }


    // const data = await Car.find({});
    // console.log(data);
    // data.forEach(car => car.startEngine());
    // data.forEach(car => console.log(car.VAT));

}
