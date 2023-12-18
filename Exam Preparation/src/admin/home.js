module.exports = (req, res) => {
    const admin = req.session.admin;

    if(admin){

        res.render('admin/home', { title: 'Admin Home Page', admin: admin });
    }else{
        res.render('admin/login', { title: 'Login Page' });

    }
};