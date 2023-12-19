const { getData } = require('./requests/getData');
module.exports = async (req, res) => {
    const admin = req.session.admin;

    const cars = await getData();
    res.render('admin/catalog', { title: 'Catalog Admin Page', cars: cars, admin: admin  });
};