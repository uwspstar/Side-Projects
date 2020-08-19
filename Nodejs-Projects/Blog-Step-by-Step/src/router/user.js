const { checkLogin } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');


// get cookie expire date
const getCookieExpire = () => {
    let d = new Date();
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
    console.log('cookie expire :', d.toGMTString());
    return d.toGMTString();
}

const handleUserRouter = (req, res) => {
    const method = req.method;

    // user login
    if (method === 'POST' && req.path === '/api/user/login') {
        //const { username, password } = req.body;
        //const result = checkLogin(username, password);
        //return result ? new SuccessModel() : new ErrorModel('Failure to login');
        const { username, password } = req.body;
        const result = checkLogin(username, password);

        return result.then(data => {
            if (data.username) {
                // Server side side cookie
                // path=/ means for root path
                // httpOnly only allow server side modify cookie, not client side (js on browser document.cookie="username=abc")
                // res.setHeader('Set-Cookie', `username=${data.username}; path=/; httpOnly; expire=${getCookieExpire}`)

                //set session
                req.session.username = data.username;
                req.session.realname = data.realname;
                console.log('req.session: ', req.session);

                return new SuccessModel()
            }
            return new ErrorModel('Failure to login')
        });
    }

    // verify success login
    if (method === 'POST' && req.path === '/api/user/login-test') {
        /*
        return req.cookie.username
            ? Promise.resolve(new SuccessModel(req.cookie.username))
            : Promise.reject(new ErrorModel('Failure to login'));
        */
        return req.session.username
            ? Promise.resolve(new SuccessModel({ session: req.session }))
            : Promise.reject(new ErrorModel('Failure to login'));
    }
}



module.exports = handleUserRouter;