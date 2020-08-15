const handleUserRouter = (req, res) => {
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0];

    // user login
    if (method === 'POST' && path === '/api/user/login') {
        return {
            msg: 'user login'
        }
    }
}

module.exports = handleUserRouter;