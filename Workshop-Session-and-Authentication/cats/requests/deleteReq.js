const mongoose = require('mongoose');
const Cat = require('../models/Cat');

const connectionString = 'mongodb://localhost:27017/cats';

async function remove(req, res) {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const catId = req.params.catId;

    try {
        await Cat.findByIdAndDelete(catId);
        res.redirect('/');
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.disconnect();
    }
}
module.exports = { remove };