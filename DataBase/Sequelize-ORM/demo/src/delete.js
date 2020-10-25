const { Blog, User } = require('./model');

!(async function () {

    const delBlogRecord = await Blog.destroy({
        where: { id: 4 }
    })

    console.log('delBlogRecord', updateRecord[0] > 0);
})()