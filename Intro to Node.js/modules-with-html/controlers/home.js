const {layout, data} = require('../util');

const homePage = `
    <h1>Home</h1>
    <p>Hello World</p>
`;

const aboutPage = `
<h1>About</h1>
<ul>
${data.map(x => `<li>${x.name} - ${x.contact}`).join('\n')}
</ul>
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