const http = require('http');
const router = require('./router');
const { homeControler, aboutControler } = require('./controlers/home');

const server = http.createServer(router.main);

router.register('/', homeControler);
router.register('/about', aboutControler);

server.listen(3000);
