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
    const hashedPassword = await bcrypt.hash(password, 10);

    try{
        const admin = new Admin({
            username, email, hashedPassword
        });
        await admin.save();
        
        res.redirect('/admin')
    }catch(err){
        res.send(err);
    }
}

module.exports = {register};