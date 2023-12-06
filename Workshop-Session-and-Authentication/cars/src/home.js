const cars = {
    '123': {
        brand: 'Mercedes',
        model: 'C-Class',
        year: '2020',
        price: '75000',
        img: 'https://hips.hearstapps.com/hmg-prod/images/2024-mercedes-benz-gla-103-64130fa2909a4.jpg'
    },
    '456': {
        brand: 'Audi',
        model: 'A8',
        year: '2016',
        price: '40000',
        img: 'https://www.interarmored.com/wp-content/uploads/2023/05/IAG-Armored-Audi-A8.jpg'
    },
}

module.exports = (req, res) => {
    res.render('home', {
        title: 'Home page',
        cars
    });
}