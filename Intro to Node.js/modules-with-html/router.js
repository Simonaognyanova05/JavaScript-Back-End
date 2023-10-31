const layout = require("./util");

const defaultPage = `
<h1>Not Found</h1>
`;

const routes = {}

function main(req, res){
    console.log('>>>', req.method, req.url);
    const url = new URL(req.url, `http://${req.headers.host}`);

    const handler = routes[url.pathname];

    if(typeof handler == 'function'){
        handler(req, res);

    }else{
        defaultControler(req, res);
    }
}

function register(pathname, handler){
    routes[pathname] = handler;
}

function defaultControler (req, res) {
    res.statusCode = 404;
    res.write(layout(defaultPage));
    res.end();
}

module.exports = {
    main,
    register
}