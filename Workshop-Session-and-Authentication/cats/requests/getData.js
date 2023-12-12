const mongoose = require('mongoose');
const Cat = require('../models/Cat');

const connectionString = 'mongodb://localhost:27017/cats';

async function getData() {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    try {
        const cats = (await Cat.find({})).map(x => x.toJSON());
        return cats;
    } catch (err) {
        res.send(err);
    }
}

module.exports = { getData }