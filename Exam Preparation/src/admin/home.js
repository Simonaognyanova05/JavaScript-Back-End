module.exports = (req, res) => {
    res.render('admin/home', { title: 'Admin Home Page', admin: req.session.admin });
};