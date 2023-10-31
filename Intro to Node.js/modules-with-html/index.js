const http = require('http');
const router = require('./router');
const layout = require('./util');

const homePage = `
    <h1>Home</h1>
    <p>Hello World</p>
`;

const aboutPage = `
<h1>About</h1>
<p>Abput Us</p>
`;

const server = http.createServer(router.main);

router.routes['/'] = homeControler;
router.routes['/about'] = aboutControler;

server.listen(3000);

function homeControler(req, res) {
    res.write(layout(homePage));
    res.end();
}

function aboutControler(req, res) {
    res.write(layout(aboutPage));
    res.end();
}