const xss = require('xss');
const { exec, escape } = require('../db/mysql');

const getList = async (author, keyword) => {
    author = escape(author);
    keyword = escape(keyword);

    let sql = `SELECT * FROM blogs WHERE 1 = 1 `;
    if (author) {
        sql += `AND author='${author}' `
    }
    if (keyword) {
        sql += `AND title like '%${keyword}%' `
    }
    sql += `ORDER BY createtime DESC`
    try {
        const rows = await exec(sql);
        return rows[0];
    } catch (e) {
        console.log('getList => ', e)
    }

}

const getDetailAsync = async (id) => {
    id = escape(id);

    let sql = `SELECT * FROM blogs WHERE id = '${id}'`;
    const rows = await exec(sql);
    return rows[0];
}

const createNewBlogAsync = async (blogData = {}) => {
    // blogData is a object, include title, content, and author, createtime = Date.now()
    // console.log('new blogData', blogData);

    // const { title, content, author } = blogData;
    // xss avoid xss attack
    const title = xss(blogData.title);
    const content = xss(blogData.content);
    const author = blogData.author; // not user input, do not use xss
    const createtime = Date.now();

    let sql = `
    insert into blogs(title, content, createtime, author)  
    values ('${title}', '${content}', ${createtime}, '${author}')
    `
    const insertData = await exec(sql);
    //console.log('insertData', insertData);
    return {
        id: insertData.insertId
    };
}

const updateBlogAsync = async (id, blogData = {}) => {
    //console.log('updateBlog id', id, 'updateBlog blogData', blogData);
    //return true;
    //const title = blogData.title;
    //const content = blogData.content;
    //const { title, content } = blogData;
    id = escape(id);
    const title = xss(blogData.title);
    const content = xss(blogData.content);

    const sql = `
    UPDATE blogs SET title='${title}', content='${content}' WHERE id = ${id}
    `
    const updateData = await exec(sql);
    console.log('updateData', updateData);
    return updateData.affectedRows > 0;

}

const deleteBlogAsync = async (id, author) => {
    author = escape(author);
    id = escape(id);
    // soft delete use "Update"
    const sql = `DELETE FROM blogs WHERE id = ${id} and author='${author}' `;

    const deleteData = await exec(sql);
    return updateData.affectedRows > 0;
}

const getDetail = (id) => {
    id = escape(id);

    let sql = `SELECT * FROM blogs WHERE id = '${id}'`;
    return exec(sql).then(rows => rows[0]);
}

const createNewBlog = (blogData = {}) => {
    // blogData is a object, include title, content, and author, createtime = Date.now()
    // console.log('new blogData', blogData);

    // const { title, content, author } = blogData;
    const title = xss(blogData.title);
    const content = xss(blogData.content);
    const author = blogData.author; // not user input, do not need xss

    const createtime = Date.now();

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
    id = escape(id);
    //const { title, content } = blogData;
    const title = xss(blogData.title);
    const content = xss(blogData.content);

    const sql = `
    UPDATE blogs SET title='${title}', content='${content}' WHERE id = ${id}
    `

    return exec(sql).then(updateData => {
        console.log('updateData', updateData);
        return updateData.affectedRows > 0;
    })

}

const deleteBlog = (id, author) => {
    author = escape(author);
    id = escape(id);
    // soft delete use "Update"
    const sql = `DELETE FROM blogs WHERE id = ${id} and author='${author}' `;
    return exec(sql).then(deleteData => updateData.affectedRows > 0);
}

module.exports = {
    getList,
    getDetail,
    createNewBlog,
    updateBlog,
    deleteBlog,
    getDetailAsync,
    createNewBlogAsync,
    updateBlogAsync,
    deleteBlogAsync
}