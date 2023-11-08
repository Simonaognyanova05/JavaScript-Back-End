const app = require('express')();
const handlebars = require('express-handlebars');

const hbs = handlebars.create({
    extname: '.hbs'
})

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

let visitors = 0;

app.get('/', (req, res) => {
    res.locals = {
        count: visitors++
    }
    res.render('home', { layout: false });
})
app.listen(3001);