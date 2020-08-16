const queryString = require('querystring');
const handleUserRouter = require('./src/router/user');
const handleBlogRouter = require('./src/router/blog');

// deal with postData
const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({});
            return;
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({});
            return;
        }

        let postData = '';

        req.on('data', chunk => {
            postData += chunk.toString();
        })

        req.on('end', () => {
            if (!postData) {
                resolve({});
                return;
            }
            resolve(JSON.parse(postData));
        })
    })
    return promise;
}
const serverHandle = (req, res) => {
    //step1 : setHeader
    res.setHeader('Content-type', 'application/json');

    // get url
    const url = req.url;
    req.path = url.split('?')[0];

    // get query
    req.query = queryString.parse(url.split('?')[1]);

    // deal with Post data
    getPostData(req).then(postData => {
        req.body = postData;

        // handle blog router
        /*
        const blogData = handleBlogRouter(req, res);
        if (blogData) {
            res.end(
                JSON.stringify(blogData)
            )
            return;
        }
        */

        const logResult = handleBlogRouter(req, res); // promise
        if (logResult) {
            logResult.then(blogData => res.end(JSON.stringify(blogData)));
            return;
        }
        // handle user router
        /*
        const userData = handleUserRouter(req, res);
        if (userData) {
            res.end(
                JSON.stringify(userData)
            )
            return;
        }
        */

        const userResult = handleUserRouter(req, res);
        if (userResult) {
            userResult.then(userData => res.end(JSON.stringify(userData)));
            return;
        }

        // return 404 , page no found
        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.write("404 Not Found");
        res.end();
    })



}

module.exports = serverHandle;