const queryString = require('querystring');
const handleUserRouter = require('./src/router/user');
const handleBlogRouter = require('./src/router/blog');

const serverHandle = (req, res) => {
    //step1 : setHeader
    res.setHeader('Content-type', 'application/json');

    // get url
    const url = req.url;
    req.path = url.split('?')[0];

    // get query
    req.query = queryString.parse(url.split('?')[1]);


    // handle router
    const blogData = handleBlogRouter(req, res);
    const userData = handleUserRouter(req, res);

    if (blogData) {
        res.end(
            JSON.stringify(blogData)
        )
        return;
    }

    if (userData) {
        res.end(
            JSON.stringify(userData)
        )
        return;
    }

    // return 404 , page no found
    res.writeHead(404, { 'Content-type': 'text/plain' });
    res.write("404 Not Found");
    res.end();

}

module.exports = serverHandle;