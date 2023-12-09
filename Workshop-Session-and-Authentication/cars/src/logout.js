function logoutPage(req, res){
    delete req.session.user;
    res.redirect('/');
}

module.exports = { logoutPage };
