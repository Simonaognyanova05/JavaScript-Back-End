const mongoose = require('mongoose');
const Cat = require('../models/Cat');

const connectionString = 'mongodb://localhost:27017/cats';

async function update(req, res) {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const { name, age, bread, img } = req.body;
    const catId = req.params.catId;
    const newData = { name, age, bread, img };

    try {
        await Cat.updateOne({ _id: catId }, { $set: newData });
        res.redirect('/');
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.disconnect();
    }
}
module.exports = { update };