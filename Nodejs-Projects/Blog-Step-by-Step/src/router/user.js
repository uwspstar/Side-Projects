const { checkLogin } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');

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
                res.setHeader('Set-Cookie', `username=${data.username}; path=/`)
                return new SuccessModel()
            }
            return new ErrorModel('Failure to login'));
    }
}

if (method === 'POST' && req.path === '/api/user/login-test') {
    return req.cookie.username
        ? Promise.resolve(new SuccessModel())
        : Promise.reject(new ErrorModel('Failure to login'));
}
}

module.exports = handleUserRouter;