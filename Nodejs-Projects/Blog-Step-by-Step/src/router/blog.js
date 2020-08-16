const { getList, getDetail, createNewBlog, updateBlog, deleteBlog } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req, res) => {
    const method = req.method;
    const id = req.query.id || '';

    // get blog list
    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        //const listData = getList(author, keyword);
        //return new SuccessModel(listData);
        const result = getList(author, keyword);
        return result.then(listData => new SuccessModel(listData));
    }

    // get blog detail
    if (method === 'GET' && req.path === '/api/blog/detail') {
        //const data = getDetail(id);
        //return new SuccessModel(data);
        const result = getDetail(id);
        return result.then(data => new SuccessModel(data));
    }

    // create a new blog
    if (method === 'POST' && req.path === '/api/blog/new') {
        //const data = createNewBlog(req.body);
        //return new SuccessModel(data);
        req.body.author = 'xingWang'; //mock data, change it after login
        const result = createNewBlog(req.body);
        return result.then(data => new SuccessModel(data));
    }

    // Update a new blog
    if (method === 'POST' && req.path === '/api/blog/update') {
        //const result = updateBlog(id, req.body);
        //return result ? new SuccessModel() : new ErrorModel('Failure to Update a blog');
        const result = updateBlog(id, req.body);
        return result.then(val => val ? new SuccessModel(val) : new ErrorModel('Failure to Update a blog'));

    }

    // Delete a new blog
    if (method === 'POST' && req.path === '/api/blog/del') {
        //const result = deleteBlog(id, req.body);
        //return result ? new SuccessModel() : new ErrorModel('Failure to Delete a blog');
        const author = 'xingWang';// mock data, update after login
        const result = deleteBlog(id, author); 
        return result.then(val => val ? new SuccessModel(val) : new ErrorModel('Failure to Delete a blog'));
    }

}

module.exports = handleBlogRouter;