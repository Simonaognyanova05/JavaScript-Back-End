const bcrypt = require('bcrypt');

module.exports = () => {
    const users = {
        '12345': {
            id: '12345',
            username: 'peter',
            hashedPassword: '$2b$10$ODLrBKhV.1qcExgA8dG.I.7ciwhBPgdHDyCxcAy.x/IU6eFY.leS2'
        }
    }

    return (req, res, next) => {
        req.auth = {
            login,
            register
        };

        next();

        async function login(username, password) {
            const user = Object.values(users).find(u => u.username == username);

            if (user && await bcrypt.compare(password, user.hashedPassword)) {
                console.log('Sucessfully');
                req.session.user = user;
                return true;
            } else {
                return false;
            }
        }

        async function register(username, password) {
            if (Object.values(users).find(u => u.username == username) != undefined) {
                return false;
            } else {
                const hashedPassword = await bcrypt.hash(password, 10);
                const id = 'xxxx-xxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
                const user = {
                    id,
                    username,
                    hashedPassword
                }
                users[id] = user;

                console.log('New user: ' + username);
                
                return true;
            }
        }
    }
}

