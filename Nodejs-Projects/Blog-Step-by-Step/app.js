const queryString = require('querystring');
const { handleUserRouter } = require('./src/router/user');
const { handleBlogRouter } = require('./src/router/blog');

// get cookie expire date
const getCookieExpire = () => {
    let d = new Date();
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
    console.log('cookie expire :', d.toGMTString());
    return d.toGMTString();
}

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

    // set session
    let SESSION_DATA = {};

    // get cookie
    req.cookie = {};
    const cookieStr = req.headers.cookie || ''; //k1=v1;k2=v2;k3=v3;
    cookieStr.split(';').forEach(item => {
        if (!item) return;
        const arr = item.split('=');
        const key = arr[0].trim();
        const val = arr[1].trim();
        req.cookie[key] = val;
    })
    // console.log('req.cookie is ', req.cookie);

    // get session
    let needSetCookie = false;
    let userId = req.cookie.userId;
    if (userId) {
        if (!SESSION_DATA[userId]) {
            SESSION_DATA[userId] = {};
        }
    } else {
        needSetCookie = true;
        // assign an unique value
        userId = `${Date.now()}_${Math.random()}`;
        SESSION_DATA[userId] = {};
    }
    req.session = SESSION_DATA[userId];

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
            if (needSetCookie) {
                console.log('logResult : ', logResult, 'userId', userId);
                //res.setHeader('Set-Cookie', `userId=${userId}; path=/; httpOnly; expire=${getCookieExpire}`)
                res.setHeader('Set-Cookie', `userId=${userId}; path=/; httpOnly; expire=${getCookieExpire()}`)
            }

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
            if (needSetCookie) {
                res.setHeader('Set-Cookie', `userId=${userId}; path=/; httpOnly; expire=${getCookieExpire()}`)
            }

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