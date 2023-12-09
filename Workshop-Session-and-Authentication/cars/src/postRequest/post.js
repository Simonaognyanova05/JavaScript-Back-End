const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Car = require('../../models/Car');
const User = require('../../models/User');

const connectionString = 'mongodb://localhost:27017/cars';

async function createData(req, res) {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });


    const { brand, model, year, price, img } = req.body;
    const ownerId = req.session.user._id.toString();
    try {
        const car = new Car({
            brand, model, year, price, img, ownerId
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

 
    const hashedPassword = await bcrypt.hash(password, 10);
    try{
        const user = new User({
            username, email, hashedPassword
        });

        await user.save();
        req.session.user = user;
        res.redirect('/');
    }catch(err){
        alert("Error");
    }
}

async function login(req, res) {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const {username, password} = req.body;
    try{
        const user = await User.findOne({ username });
        const compared = await bcrypt.compare(password, user.hashedPassword);
        if(user && compared){
            req.session.user = user;
            res.redirect('/');
        }else{
            res.send('Error');
        }
    }catch(err){
        res.send("Error");
    }
}

module.exports = { createData, updateData, deleteData, register, login }
