const { Schema, model } = require('mongoose');

const catSchema = new Schema({
    name: {type: String, required: true},
    age: Number
})

const Cat = model('Cat', catSchema);

module.exports = Cat;