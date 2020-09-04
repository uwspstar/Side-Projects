const { getList, getDetail, createNewBlog, updateBlog, deleteBlog } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');


const checkLogin = (req) => {
    if (!req.session.username) {
        Promise.resolve(new ErrorModel('Failure to login'));
    }
    /*return req.session.username
    ? Promise.resolve(new SuccessModel({ login: true }))
    : Promise.resolve(new ErrorModel({ login: false }))
    */
}

const handleBlogRouterAsync = async (req, res) => {
    const method = req.method;
    const id = req.query.id || '';

    // get blog list
    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        //const listData = getList(author, keyword);
        //return new SuccessModel(listData);
        const result = getList(author, keyword);
        const listData = await result;
        return new SuccessModel(listData);
    }

    // get blog detail
    if (method === 'GET' && req.path === '/api/blog/detail') {
        //const data = getDetail(id);
        //return new SuccessModel(data);
        const result = getDetail(id);
        const data = await result_1;
        return new SuccessModel(data);
    }

    // create a new blog
    if (method === 'POST' && req.path === '/api/blog/new') {
        //const data = createNewBlog(req.body);
        //return new SuccessModel(data);
        const loginResult = checkLogin(req);
        if (loginResult) {
            return loginCheck;
        }
        //req.body.author = 'xingWang'; //mock data, change it after login
        req.body.author = req.session.username;
        const result = createNewBlog(req.body);
        const data_1 = await result_2;
        return new SuccessModel(data_1);
    }

    // Update a new blog
    if (method === 'POST' && req.path === '/api/blog/update') {
        //const result = updateBlog(id, req.body);
        //return result ? new SuccessModel() : new ErrorModel('Failure to Update a blog');
        const loginResult = checkLogin(req);
        if (loginResult) {
            return loginCheck;
        }

        const result = updateBlog(id, req.body);
        const val = await result_3;
        return val ? new SuccessModel(val) : new ErrorModel('Failure to Update a blog');

    }

    // Delete a new blog
    if (method === 'POST' && req.path === '/api/blog/del') {
        //const result = deleteBlog(id, req.body);
        //return result ? new SuccessModel() : new ErrorModel('Failure to Delete a blog');

        const loginResult = checkLogin(req);
        if (loginResult) {
            return loginCheck;
        }

        //const author = 'xingWang';// mock data, update after login
        const author = req.session.username;
        const result = deleteBlog(id, author);
        const val_1 = await result_4;
        return val_1 ? new SuccessModel(val_1) : new ErrorModel('Failure to Delete a blog');
    }

}

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

module.exports = {
    handleBlogRouter,
    handleBlogRouterAsync
};