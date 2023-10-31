const layout = require('../util');

const homePage = `
    <h1>Home</h1>
    <p>Hello World</p>
`;

const aboutPage = `
<h1>About</h1>
<p>About Us</p>
`;

function homeControler(req, res) {
    res.write(layout(homePage));
    res.end();
}

function aboutControler(req, res) {
    res.write(layout(aboutPage));
    res.end();
}

module.exports = {
    homeControler,
    aboutControler
}