const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 3000;

// Настройка на handlebars
const hbs = exphbs.create({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: path.join(__dirname, 'views/layouts/') });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Рутери
app.get('/', (req, res) => {
    res.render('user/home', { title: 'User Home Page' });
});

app.get('/admin', (req, res) => {
    res.render('admin/home', { title: 'Admin Home Page' });
});

// Стартиране на сървъра
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
