module.exports = (req, res) => {
    const admin = req.session.admin;
    res.render('admin/update', { title: 'Update Page', admin: admin, carId: req.params.carId});
};