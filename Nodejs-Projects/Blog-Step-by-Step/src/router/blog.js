const handleBlogRouter = (req, res) => {
    const method = req.method; 

    // get blog list
    if (method === 'GET' && req.path === '/api/blog/list') {
        return {
            msg: 'GET blog list'
        }
    }

    // get blog detail
    if (method === 'GET' && req.path === '/api/blog/detail') {
        return {
            msg: 'GET blog detail'
        }
    }

    // create a new blog
    if (method === 'POST' && req.path === '/api/blog/new') {
        return {
            msg: 'Create a new blog'
        }
    }

    // Update a new blog
    if (method === 'POST' && req.path === '/api/blog/update') {
        return {
            msg: 'Update a new blog'
        }
    }

    // Delete a new blog
    if (method === 'POST' && req.path === '/api/blog/del') {
        return {
            msg: 'Delete a blog'
        }
    }

}

module.exports = handleBlogRouter;