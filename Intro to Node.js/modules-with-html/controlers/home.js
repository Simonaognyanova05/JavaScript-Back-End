const {layout, data} = require('../util');

const homePage = `
    <h1>Home</h1>
    <p>Hello World</p>
`;

const aboutPage = `
<h1>About</h1>
<form method="POST" action="/add">
   <label>Name: <input type="text" name="name"></label>
   <label>Phone: 
      <select name="contact">
      <option value="123">123</option>
      <option value="456">456</option>
      <option value="789">789</option>

      </select>
   </label>
   <input type="submit" value="Submit"></input>
</form>
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

function createControler(req, res){
    console.log('create request');
    res.writeHead(301, {
        'Location': '/about'
    });
    res.end();
}

module.exports = {
    homeControler,
    aboutControler,
    createControler
}