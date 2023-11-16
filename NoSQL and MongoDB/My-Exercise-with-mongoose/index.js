const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/products';

start();

async function start() {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Connected to MongoDB');

        const carSchema = new mongoose.Schema({
            name: String,
            price: Number
        });

        const Car = mongoose.model('Car', carSchema);
        const car = new Car({
            name: 'Opel Mokka',
            price: 2500
        });

        await car.save();

        const data = await Car.find({});
        console.log(data);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
