const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: {type: String, require: true},
    email: {type: String, require: true},
    hashedPassword: {type: String, require: true}
})

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;