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

        if (user && user.password === password) {
            req.session.user = user;
            res.redirect('/');
        } else {
            console.log('Invalid data');
        }
    } catch (err) {
        console.log('Error:', err);
    }
}

async function register(req, res) {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    try {
        const user = new User({
            username: req.body.username,
            password: req.body.password,
        });

        await user.save();
        res.redirect('/');
    } catch (err) {
        console.log('Error:', err);
        res.status(500).send('Error registering user.');
    }
}

module.exports = { login, register };
