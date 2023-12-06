const mongoose = require('mongoose');
const express = require('express');
const hbs = require('express-handlebars');
const homeController = require('./src/home');
const createController = require('./src/create');
const requests = require('./src/requests/req');
const catalogController = require('./src/catalog');

const app = express();
const connectionString = 'mongodb://localhost:27017/dress';

app.use(express.urlencoded({ extended: true }));
app.engine('.hbs', hbs.create({
    extname: '.hbs'
}).engine);

app.set('view engine', '.hbs');
//app.use('/content', express.static('static'));

app.get('/', homeController);
app.get('/create', createController);
app.post('/create', async (req, res) => {
    await requests.create(req, res);
});
app.get('/catalog', async (req, res) => {
    try {
        // Свързване с MongoDB
        await mongoose.connect(connectionString, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        // Дефиниране на модел за данните в MongoDB
        const Dress = mongoose.model('Item', {
            name: String,
            price: Number,
        });

        // Вземане на данни от MongoDB
        const dress = await Dress.find({});

        // Рендиране на шаблона и предаване на данните
        res.render('catalog', { dress });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    } finally {
        // Затваряне на връзката с MongoDB
        mongoose.connection.close();
    }
});

app.listen(3000);
