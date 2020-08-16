const { getList, getDetail } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req, res) => {
    const method = req.method;

    // get blog list
    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        const listData = getList(author, keyword);

        return new SuccessModel(listData);
    }

    // get blog detail
    if (method === 'GET' && req.path === '/api/blog/detail') {
        const id = req.query.id || '';
        const data = getDetail(id);
        return new SuccessModel(data);
    }

    // create a new blog
    if (method === 'POST' && req.path === '/api/blog/new') {
        let postData = '';
        req.on('data', chunk => {
            postData += chunk.toString();
        })
        req.on('end', () => {
            res.end(
                JSON.stringify(postData)
            )
        })
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