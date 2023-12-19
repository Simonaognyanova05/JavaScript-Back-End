module.exports = (req, res) => {
    const admin = req.session.admin;
    res.render('admin/create', { title: 'Create Page', admin: admin});
};