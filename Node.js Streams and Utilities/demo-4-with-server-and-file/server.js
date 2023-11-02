const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    console.log('Request');
    if (req.method == 'GET') {
        fs.readFile('file.txt', (err, data) => {
            res.write(data.toString());
            res.end();
        });
    } else if (req.method == 'POST') {
        let body = '';
        req.on('data', data => {
            console.log('Chunk >>> ', data.toString());
            body += data;
        });
        req.on('end', () => {
            const bodyAsObject = JSON.parse(body);
            console.log('Body:', bodyAsObject);
            bodyAsObject.price++;
            res.writeHead(200, {
                'content-type': 'application/json'
            })
            res.write(JSON.stringify(bodyAsObject));
            res.end();
        })
    }
}).listen(3000);