const { exec } = require('../db/mysql');
const getList = (author, keyword) => {
    let sql = `SELECT * FROM blogs WHERE 1 = 1 `;
    if (author) {
        sql += `AND author='${author}' `
    }
    if (keyword) {
        sql += `AND title like '%${keyword}%' `
    }
    sql += `ORDER BY createtime DESC`

    console.log(sql);
    // return promise
    return exec(sql);
}
const getDetail = (id) => {
    let sql = `SELECT * FROM blogs WHERE id = '${id}'`;
    return exec(sql).then(rows => rows[0]);
}
const createNewBlog = (blogData = {}) => {
    // blogData is a object, include title, content, and author, createtime = Date.now()
    // console.log('new blogData', blogData);

    const title = blogData.title;
    const content = blogData.content;
    const createtime = Date.now();
    const author = blogData.author;

    let sql = `
    insert into blogs(title, content, createtime, author)  
    values ('${title}', '${content}', ${createtime}, '${author}')
    `
    return exec(sql).then(insertData => {
        //console.log('insertData', insertData);
        return {
            id: insertData.insertId
        }
    })
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