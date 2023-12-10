const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const connectionString = 'mongodb://localhost:27017/cats';

async function register(req, res){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const { username, email, password, repass } = req.body;

    if(password != repass){
        res.send('Passwords do not match!');
        return;
    }
    const hashPass = await bcrypt.hash(password, 10);
    try{
        const user = new User({
            username, email, hashPass
        })
        await user.save();
        res.redirect('/');
    }catch(err){
        res.send('Error');
    }
}

module.exports = {register};