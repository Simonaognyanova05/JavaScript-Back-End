const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();
const connectionString = 'mongodb://localhost:27017/testdb';
const catSchema = new mongoose.Schema({
    name: String,
    age: Number
})
const Cat = mongoose.model('Cat', catSchema);

start();
async function start() {
    await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })

    try{
        const cat = new Cat({
            name: 'Darcy',
            age: 1
        })

        await cat.save();
    }catch(err){
        console.log('Error');
    }
}