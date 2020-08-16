const handleBlogRouter = (req, res) => {
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0];

    // get blog list
    if (method === 'GET' && path === '/api/blog/list') {
        return {
            msg: 'GET blog list'
        }
    }

    // get blog detail
    if (method === 'GET' && path === '/api/blog/detail') {
        return {
            msg: 'GET blog detail'
        }
    }

    // create a new blog
    if (method === 'POST' && path === '/api/blog/new') {
        return {
            msg: 'Create a new blog'
        }
    }

    // Update a new blog
    if (method === 'POST' && path === '/api/blog/update') {
        return {
            msg: 'Update a new blog'
        }
    }

    // Delete a new blog
    if (method === 'POST' && path === '/api/blog/del') {
        return {
            msg: 'Delete a blog'
        }
    }

}

module.exports = handleBlogRouter;