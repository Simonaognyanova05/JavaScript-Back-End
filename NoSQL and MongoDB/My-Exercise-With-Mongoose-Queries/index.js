const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();
const connectionString = 'mongodb://localhost:27017/testdb';
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    img: String
})
const Cat = mongoose.model('Cat', catSchema);

app.engine('.hbs', handlebars.create({ extname: '.hbs'}).engine);
app.set('view engine', '.hbs');
app.use(express.urlencoded({ extended: true }));
app.get('/', async (req, res) => {
    try{
        const cats = await Cat.find({});
        res.render('home', {title: 'Cats with MongoDB', cats });
    }catch(err){
        console.log('Error');
    }
})
app.get('/create', (req, res) => {
    res.render('form');
})
app.post('/create', async (req, res) => {
    try {
        const { name, age, img } = req.body;
        const newCat = new Cat({ name, age, img });
        await newCat.save();
        res.redirect('/');
      } catch (err) {
        console.error('Error creating cat:', err);
        res.status(500).send('Internal Server Error');
      }
})


app.listen(3000);