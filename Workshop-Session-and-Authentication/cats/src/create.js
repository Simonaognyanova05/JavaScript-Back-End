module.exports = (req, res) => {
    res.render('create', {
        title: 'Create page',
        user: req.session.user
    });
}