const routes = {};

function register(method, path, handler) {
    if (routes[path] == undefined) {
        routes[path] = {};
    }
    routes[path][method] = handler;
}

function get(path, handler) {
    register('GET', path, handler);
}

function post(path, handler) {
    register('POST', path, handler);
}
function match(req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`);

    let handler;
    const actions = routes[url.pathname];
    if (actions) {
        handler = actions[req.method];
    }

    if (typeof handler == 'function') {
        res.html = page => {
            res.writeHead(200, {
                'content-type': 'text/html; charset=utf-8'
            });
            res.write(page);
            res.end();
        }
        handler(req, res);
    } else {
        defaultContoller(req, res);
    }
}

function defaultContoller(req, res) {
    //return 404 
    res.writeHead(404);
    res.write('Not found');
    res.end();
}

module.exports = {
    get, post, match
}