const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Car = require('../../models/Car');

const connectionString = 'mongodb://localhost:27017/cars';

async function createData(req, res) {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });


    const { brand, model, year, price, img } = req.body;
    try {
        const car = new Car({
            brand, model, year, price, img
        })
        await car.save();
        res.redirect('/')
    } catch (err) {
        console.log(err);
    }
}

async function updateData(req, res) {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const { newbrand, newmodel, newyear, newprice, newimg } = req.body;
    const carId = req.params.carId;
    const newData = { brand: newbrand, model: newmodel, year: newyear, price: newprice, img: newimg };

    try {
        await Car.updateOne({ _id: carId }, { $set: newData });
        res.redirect('/');
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.disconnect();
    }
}
async function deleteData(req, res) {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const carId = req.params.carId;

    try {
        await Car.findByIdAndDelete(carId);
        res.redirect('/');
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.disconnect();
    }
}
async function register(req, res) {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const {username, email, password, repass} = req.body;

    if(password != repass){
        res.send('Passwords do not match')
        return;
    }

    const userSchema = new mongoose.Schema({
        username: {type: String, required: true},
        email: {type: String, required: true},
        hashedPassword: {type: String, required: true},
    });

    const User = mongoose.model('User', userSchema);
    const hashedPassword = await bcrypt.hash(password, 10);
    try{
        const user = new User({
            username, email, hashedPassword
        });

        await user.save();
        res.redirect('/');
    }catch(err){
        alert("Error");
    }
}


module.exports = { createData, updateData, deleteData, register}
