const http = require('http');


const homePage = `
    <h1>Home</h1>
    <p>Hello World</p>
`;

const aboutPage = `
<h1>About</h1>
<p>Abput Us</p>
`;

const defaultPage = `
<h1>Not Found</h1>
`;

const server = http.createServer((req, res) => {
    console.log('>>>', req.method, req.url);

    const url = new URL(req.url, `http://${req.headers.host}`);

    if (url.pathname == '/') {
        homeControler(req, res);
    } else if (url.pathname == '/about') {
        aboutControler(req, res);
    } else {
        defaultControler(req, res)
    }

})

server.listen(3000);

const homeControler = (req, res) => {
    res.write(layout(homePage));
    res.end();
}

const aboutControler = (req, res) => {
    res.write(layout(aboutPage));
    res.end();
}

const defaultControler = (req, res) => {
    res.statusCode = 404;
    res.write(layout(defaultPage));
    res.end();
}

const layout = (body, title = 'Hello') => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<title>${title}</title>
</head>
<body>
<nav>
   <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>

   </ul>
   </nav>
    ${body}
</body>
</html>
    `
}