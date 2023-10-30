const http = require('http');

const server = http.createServer((req, res) => {
    console.log('>>>', req.method, req.url);

    const url = new URL(req.url, `http://${req.headers.host}`);

    if (url.pathname == '/') {
        res.write('Home page');
        res.end();
    } else if (url.pathname == '/about') {
        res.write('About page');
        res.end();
    }else{
        res.statusCode = 404;
        res.write('Not Found');
        res.end();
    }

})

server.listen(3000);