const http = require('http');
const router = require('./router');
const { homeControler, aboutControler, createControler } = require('./controlers/home');

const server = http.createServer(router.main);

router.get('/', homeControler);
router.get('/about', aboutControler);
router.post('/add', createControler);


server.listen(3000);
