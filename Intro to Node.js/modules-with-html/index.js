const http = require('http');
const router = require('./router');
const { homeControler, aboutControler, createControler, deleteController } = require('./controlers/home');

const server = http.createServer(router.main);

router.get('/', homeControler);
router.get('/about', aboutControler);
router.post('/add', createControler);
router.get('/delete', deleteController);

server.listen(3000);
