const { Blog, User } = require('./model');

!(async function () {

    const delBlogRecord = await Blog.destroy({
        where: { id: 4 }
    })

    console.log('delBlogRecord', delBlogRecord[0] > 0);


    const delUserRecord = await User.destroy({
        where: { id: 3 }
    })

    console.log('delUserRecord', delUserRecord[0] > 0);
})()