const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('./models/Admin');

const connectionString = 'mongodb://localhost:27017/cars';

async function login(req, res){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const { username, password } = req.body;

    try{
        const admin = await Admin.findOne({ username });
        const comparedPass = await bcrypt.compare(password, admin.hashedPassword);
        if(admin && comparedPass){
            req.session.admin = admin.toJSON();
            res.redirect('/admin');
        }else{
            res.send('Invalid data');
        }
    }catch(err){
        res.send('Error');
    }
}

module.exports = {login};