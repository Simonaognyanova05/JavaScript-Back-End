const mongoose = require('mongoose');
const User = require('../models/User');

const connectionString = 'mongodb://localhost:27017/testdb';

async function login(req, res) {
    const { username, password } = req.body;

    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    try {
        const user = await User.findOne({ username });

        if (user && password == user.password) {
            req.session.user = user;
            res.redirect('/');
        } else {
            res.send('Invalid Data!');
        }
    } catch (err) {
        res.send('Error');
    }
}

async function register(req, res) {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const { username, password } = req.body;
    try {
        const user = new User({
            username,
            password
        })

        await user.save();
        res.redirect('/');
    } catch (err) {
        res.send('Error')
    }
}
async function remove(req, res) {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const username = req.body.username
    try{
        await User.deleteOne({ username });
        res.redirect('/');
    }catch(err){
        console.log('Error');
    }
}
async function update(req, res) {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const username = req.body.username;

    const newData = {username: req.body.changename, password: req.body.changepass };
    try{
        await User.updateOne({username}, {$set: newData});
        res.redirect('/');
    }catch(err){
        console.log('Error');
    }
    
}
module.exports = { login, register, remove, update };