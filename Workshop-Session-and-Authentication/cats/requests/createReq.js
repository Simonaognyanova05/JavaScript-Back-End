const mongoose = require('mongoose');
const Cat = require('../models/Cat');

const connectionString = 'mongodb://localhost:27017/cats';

async function create(req, res) {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const { name, age, bread, img } = req.body;

    try {
        const cat = new Cat({
            name, age, bread, img
        })
        await cat.save();
        res.redirect('/');
    } catch (err) {
        res.send(err);
    }
}

module.exports = { create };