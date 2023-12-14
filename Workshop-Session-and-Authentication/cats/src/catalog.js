const { getData } = require('../requests/getData');


module.exports = async (req, res) => {
    const data = await getData();
    res.render('catalog', {
        title: 'Catalog page',
        user: req.session.user,
        cats: data,
    });
}