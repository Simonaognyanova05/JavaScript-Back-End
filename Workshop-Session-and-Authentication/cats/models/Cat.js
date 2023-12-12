const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    bread: {type: String, required: true},
    img: {type: String, required: true},
    ownerId: {type: String, required: true}
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;