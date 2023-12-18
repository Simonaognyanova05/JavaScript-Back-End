const { getData } = require('./requests/getData');
module.exports = async (req, res) => {
    const cars = await getData();
    res.render('user/catalog', { title: 'Catalog Page', cars: cars });
};