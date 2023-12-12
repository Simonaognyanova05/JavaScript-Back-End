const { getData } = require('../requests/getData');


module.exports = async (req, res) => {
    const data = await getData();

    res.render('home', {
        title: 'Home page',
        user: req.session.user,
        cats: data
    });
}