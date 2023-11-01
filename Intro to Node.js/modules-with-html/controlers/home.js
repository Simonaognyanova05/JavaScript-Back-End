const formidable = require('formidable');
const { layout, getItems, addItem, deleteItem } = require('../util');

const homePage = `
    <h1>Home</h1>
    <p>Hello World</p>
`;

const aboutPage = (data) => `
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
${data.map(x => `<li>${x.name} - ${x.contact} <a href="/delete?id=${x.id}">[&#10006 Delete]</a></li>`).join('\n')}
</ul>
`;

function homeControler(req, res) {
    res.write(layout(homePage));
    res.end();
}

function aboutControler(req, res) {
    const data = getItems();
    res.write(layout(aboutPage(data)));
    res.end();
}

function createControler(req, res) {
    console.log('create request');

    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields) => {
        console.log(fields);

        addItem(fields.name, fields.contact)
        res.writeHead(301, {
            'Location': '/about'
        });
        res.end();
    });
}

function deleteController(req, res) {
    const id = req.url.searchParams.get('id');
    deleteItem(id);
    res.writeHead(301, {
        'Location': '/about'
    });
    res.end();
}

module.exports = {
    homeControler,
    aboutControler,
    createControler,
    deleteController
}