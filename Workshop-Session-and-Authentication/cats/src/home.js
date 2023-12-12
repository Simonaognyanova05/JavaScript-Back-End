const { getData } = require('../requests/getData');


module.exports = async (req, res) => {
    const data = await getData();
    const user = req.session.user ? req.session.user : '';
    res.render('home', {
        title: 'Home page',
        user: user,
        cats: data,
    });
}