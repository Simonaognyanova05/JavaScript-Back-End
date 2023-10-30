const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request recieved');
    res.write('Hello world');
    res.end();
})

server.listen(3000);