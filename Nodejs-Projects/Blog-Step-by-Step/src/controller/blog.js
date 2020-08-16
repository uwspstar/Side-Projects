const getList = (author, keyword) => {
    // mock data Date.now()
    return [
        {
            id: 1,
            title: "TA",
            content: "CA",
            createTime: 1597525543764,
            author: 'XingWang'
        },
        {
            id: 2,
            title: "TB",
            content: "CB",
            createTime: 1597525617425,
            author: 'SunJoo'
        }

    ];
}
const getDetail = (id) => {
    return {
        id: 1,
        title: "TA",
        content: "CA",
        createTime: 1597525543764,
        author: 'XingWang'
    }
}
const createNewBlog = (blogData = {}) => {
    // blogData is a object
    // console.log('new blogData', blogData);
    return {
        id: 3,
        title: "TA",
        content: "CA",
        createTime: 1597525543764,
        author: "XingWang"
    }
}
const updateBlog = (id, postData = {}) => {
    console.log('updateBlog id', id, 'updateBlog blogData', postData);
    return true;
}
const deleteBlog = (id) => {
    console.log('deleteBlog id', id);
    return true;
}
module.exports = {
    getList,
    getDetail,
    createNewBlog,
    updateBlog,
    deleteBlog
}