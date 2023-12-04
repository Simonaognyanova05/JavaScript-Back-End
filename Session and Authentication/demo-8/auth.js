const users = {
    'peter': {
        username: 'peter',
        password: '123'
    }
}

module.exports = (req, res, next) => {
    req.auth = {
        login,
        register
    };

    next();

    function login(username, password){
        const user = users[username];
    
        if (user && password == user.password) {
            console.log('Sucessfully');
            req.session.user = user;
            return true;
        } else {
            return false;
        }
    }
    
    function register(username, password){
        const user = {
            username: username,
            password: password
        }
    
        users[username] = user;
    
        console.log('New user: ' + username);
        res.redirect('/');
        return true;
    }
}

