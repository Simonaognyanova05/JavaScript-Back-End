const mongoose = require('mongoose');
const User = require('../models/User');

const connectionString = 'mongodb://localhost:27017/testdb';

async function login(req, res){
    const { username, password } = req.body;

    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    try{
        const user = await User.findOne({ username });

        if(user && password == user.password){
            req.session.user = user;
            res.redirect('/');
        }else{
            res.send('Invalid Data!');
        }
    }catch(err){
        res.send('Error');
    }
}

async function register(req, res){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    
    const { username, password } = req.body;
    try{
        const user = new User({
            username,
            password
        })

        await user.save();
        res.redirect('/');
    }catch(err){
        res.send('Error')
    }
}
async function remove(req, res){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const username = req.body.username;

    const userForDel = await User.deleteOne({ username });

    if(userForDel.deletedCount > 0){
        console.log('Success');
        res.redirect('/');
        return true;
    }else{
        console.log('Invalid user');

        return false;
    }
}
module.exports = { login, register, remove };