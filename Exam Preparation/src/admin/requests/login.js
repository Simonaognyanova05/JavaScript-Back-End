const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 
const Admin = require('./models/Admin');

const connectionString = 'mongodb://localhost:27017/cars';

async function login(req, res){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const {username, email, password} = req.body;

    try{
        const admin = await Admin.findOne({username});

        const equalPass = await bcrypt.compare(password, user.hashedPassword);

        if(user && equalPass){
            req.session.admin = admin;
            res.redirect('/admin');
        }else{
            res.send('Invalid data!');
        }
        
    }catch(err){
        res.send(err);
    }
}

module.exports = {login};