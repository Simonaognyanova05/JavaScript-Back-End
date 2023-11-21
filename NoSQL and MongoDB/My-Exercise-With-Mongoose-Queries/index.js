const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true, useUnifiedTopology: true });

const Cat = mongoose.model('Cat', {
  name: String,
  age: Number
});

// Промени в начина на инициализация на Handlebars
app.engine('hbs', exphbs.create({ extname: '.hbs' }).engine);
app.set('view engine', 'hbs');

app.get('/', async (req, res) => {
  try {
    const cats = await Cat.findOne({}).select('name');
    res.render('home', { title: 'Cat from MongoDb',name: cats.name });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
