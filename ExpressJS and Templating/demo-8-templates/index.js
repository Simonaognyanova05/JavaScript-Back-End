const app = require('express')();
const handlebars = require('express-handlebars');

const hbs = handlebars.create({
    extname: '.hbs'
})

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

let visitors = 0;

const products = [
    {name: "Product 1", price: 222, promoted: true},
    {name: "Product 2", price: 345},

]

app.get('/', (req, res) => {
    res.locals = {
        count: visitors++,
        user: {
            username: 'Peter',
            email: 'pe@abv.bg'
        }
    }
    res.render('home');
})

app.get('/catalog', (req, res) => {
    res.locals = {
        products
    }
    res.render('catalog');
})
app.listen(3000);