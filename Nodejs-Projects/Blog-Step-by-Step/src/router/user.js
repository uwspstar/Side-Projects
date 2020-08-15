const handleUserRouter = (req, res) => {
    const method = req.method;

    // user login
    if (method === 'POST' && req.path === '/api/user/login') {
        return {
            msg: 'user login'
        }
    }
}

module.exports = handleUserRouter;