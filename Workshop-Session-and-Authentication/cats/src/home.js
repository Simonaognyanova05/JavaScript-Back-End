module.exports = async (req, res) => {
    res.render('home', {
        title: 'Home page',
        user: req.session.user,
    });
}