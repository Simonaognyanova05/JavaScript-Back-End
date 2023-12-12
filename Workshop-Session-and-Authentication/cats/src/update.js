module.exports = (req, res) => {
    res.render('update', {
        title: 'Update page',
        catId: req.params.catId
    });
}