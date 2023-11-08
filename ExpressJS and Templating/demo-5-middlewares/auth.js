function isAdmin(req, res, next){
    if(req.headers['x-admin']){
        next();
    }else{
        req.status(401).send('Please, log in');
    }
}

module.exports = isAdmin;