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
        return result.then(data => data.username ? new SuccessModel() : new ErrorModel('Failure to login'));

    }
}

module.exports = handleUserRouter;