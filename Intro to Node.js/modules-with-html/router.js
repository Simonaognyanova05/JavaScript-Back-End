const {layout} = require("./util");

const defaultPage = `
<h1>Not Found</h1>
`;

const routes = {}

function main(req, res){
    console.log('>>>', req.method, req.url);
    const url = new URL(req.url, `http://${req.headers.host}`);
    req.url = url;
    let handler;
    const actions = routes[url.pathname];

    if(actions){
        handler = actions[req.method];
    }
    if(typeof handler == 'function'){
        handler(req, res);

    }else{
        defaultControler(req, res);
    }
}

function register(method, pathname, handler){
    if(routes[pathname] == undefined){
        routes[pathname] = {};
    }
    routes[pathname][method] = handler;
}

function get(pathname, handler){
    register('GET', pathname, handler);
}

function post(pathname, handler){
    register('POST', pathname, handler);
}
function defaultControler (req, res) {
    res.statusCode = 404;
    res.write(layout(defaultPage));
    res.end();
}

module.exports = {
    main,
    register,
    get,
    post
}