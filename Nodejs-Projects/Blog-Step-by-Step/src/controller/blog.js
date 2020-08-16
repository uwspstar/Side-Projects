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
const updateBlog = (id, blogData = {}) => {
    //console.log('updateBlog id', id, 'updateBlog blogData', blogData);
    //return true;
    const title = blogData.title;
    const content = blogData.content;
    const sql = `
    UPDATE blogs SET title='${title}', content='${content}' WHERE id = ${id}
    `

    return exec(sql).then(updateData => {
        console.log('updateData', updateData);
        return updateData.affectedRows > 0;
    })

}
const deleteBlog = (id, author) => {
    console.log('deleteBlog id', id);
    // soft delete use "Update"
    const sql = `DELETE FROM blogs WHERE id = ${id} and author='${author}' `;
    return exec(sql).then(deleteData => updateData.affectedRows > 0);
}
module.exports = {
    getList,
    getDetail,
    createNewBlog,
    updateBlog,
    deleteBlog
}