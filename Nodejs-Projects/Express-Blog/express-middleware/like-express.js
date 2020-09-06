const http = require('http');
const slice = Array.prototype.slice;

class LikeExpress {
    constructor() {
        //store middleware
        this.route = {
            all: [],
            get: [],
            post: [],
            put: [],
            patch: [],
            delete: []
        }
    }
    register(path) {
        const info = {}
        if (typeof path === 'string') {
            info.path = path;
            // from second arg, save as array
            info.stack = slice.call(argument, 1);
        } else {
            info.path = './';
            // from first arg, save as array
            info.stack = slice.call(argument, 0);
        }
        return info;

    }

    use() {
        const info = this.register.apply(this, arguments);
        this.register.all.push(info);
    }
    get() {
        const info = this.register.apply(this, arguments);
        this.register.get.push(info);
    }
    post() {
        const info = this.register.apply(this, arguments);
        this.register.post.push(info);
    }

    match(method, url) {
        let stack = [];
        if (url === 'favicon.ico') return stack;

        // get routes
        let curRoutes = [];
        curRoutes = curRoutes.concat(this.route.all);
        curRoutes = curRoutes.concat(this.route[method]);

        curRoutes.forEach(routeInfo => {
            if (url.indexOf(routeInfo.path) === 0) {
                //url === '/api/get-cookie' and routeInfo.path === '/'
                //url === '/api/get-cookie' and routeInfo.path === '/api'
                //url === '/api/get-cookie' and routeInfo.path === '/api/get-cookie'
                stack = stack.concat(routeInfo.stack);
            }
        })
    }
    // core next
    handle(req, res, stack) {
        const next = () => {
            //get first match middleware
            const middleware = stack.shift();
            if (middleware) {
                middleware(req, res, next);
            }
        }
        next();
    }
    callback() {
        return (req, res) => {
            res.json = (data) => {
                res.setHeader('Content-type', 'application/json');
                res.end(
                    JSON.stringify(data)
                )
            }
            const url = req.url;
            const method = req.method.toLowerCase();

            const resultList = this.match(method, url);
            this.handle(req, res, resultList)


        }
    }
    listen(...args) {
        const server = http.createServer(this.callback());
        server.listen(...args)

    }
}

module.exports = () => {
    return new LikeExpress()
}

//https://medium.com/@jhawleypeters/javascript-call-vs-apply-vs-bind-61447bc5e989#:~:text=The%20Basics%3A%20Call%20vs%20Apply&text=The%20difference%20between%20call(),following%20have%20the%20same%20effect.