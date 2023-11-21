const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();
const connectionString = 'mongodb://localhost:27017/testdb';
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
const catSchema = new mongoose.Schema({
    name: String,
    age: Number
})
const Cat = mongoose.model('Cat', catSchema);

app.engine('.hbs', handlebars.create({ extname: '.hbs'}).engine);
app.set('view engine', '.hbs');
app.get('/', async (req, res) => {
    try{
        const cats = await Cat.findOne({});
        res.render('home', {title: 'Cats with MongoDB', cats: cats });
    }catch(err){
        console.log('Error');
    }
})

app.listen(3000);