const cars = {
    '123': {
        brand: 'Mercedes',
        model: 'C-Class',
        year: '2020',
        price: '75000',
    },
    '456': {
        brand: 'Audi',
        model: 'A8',
        year: '2016',
        price: '40000',
    },
}

module.exports = (req, res) => {
    res.render('home', {
        title: 'Home page',
        cars
    });
}