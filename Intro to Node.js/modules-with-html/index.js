const http = require('http');


const homePage = `
<!DOCTYPE html>
<html lang="en">
<body>
    <h1>Home</h1>
    <p>Hello World</p>
</body>
</html>
`;

const aboutPage = `
<!DOCTYPE html>
<html lang="en">
<body>
    <h1>About Us</h1>
    <p color="white">Contacts</p>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    console.log('>>>', req.method, req.url);

    const url = new URL(req.url, `http://${req.headers.host}`);

    if (url.pathname == '/') {
        res.write(homePage);
        res.end();
    } else if (url.pathname == '/about') {
        res.write(aboutPage);
        res.end();
    } else {
        res.statusCode = 404;
        res.write('Not Found');
        res.end();
    }

})

server.listen(3000);