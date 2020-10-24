/*
Executing (default): SELECT `id`, `userName`, `password`, `nickName`, `createdAt`, `updatedAt` FROM `users` AS `user` WHERE `user`.`userName` = 'xing' LIMIT 1;
*/

const { Blog, User } = require('./model');

!(async function () {

    // findOne
    const user1 = await User.findOne({
        where: {
            userName: 'xing'
        }
    })

    console.log('user1', user1.dataValues);

    // findOne
    const user2 = await User.findOne({
        attributes: ['id', 'userName'], // string column name 
        where: {
            userName: 'andrew'
        }
    })

    console.log('user2', user2.dataValues);

    // findAll 
    const blogList = await Blog.findAll({
        where: {
            userId: 1
        },
        order: [
            ['id', 'desc'],
            ['title', 'asc']
        ]
    })

    console.log('blogList', blogList.map(blog => blog.dataValues));

    // paging
    const blogPageList = await Blog.findAll({
        limit: 1,
        offset: 1, // start 0
        order: [
            ['id', 'desc'],
            ['title', 'asc']
        ]
    })

    console.log('blogPageList', blogPageList.map(blog => blog.dataValues));

    // findAndCountAll
    const blogListCount = await Blog.findAndCountAll({
        limit: 1,
        offset: 1, // start 0
        order: [
            ['id', 'desc'],
            ['title', 'asc']
        ]
    })

    console.log('blogListCount', blogListCount.count, blogListCount.rows.map(blog => blog.dataValues));

    // 连表查询
    const blogListWithUser = await Blog.findAndCountAll({
        order: [
            ['id', 'desc']
        ],
        include: [
            {
                model: User,
                attributes: ['userName', 'nickName'],
                where: {
                    userName: 'xing'
                }
            }
        ]
    })

    console.log('blogListWithUser', blogListWithUser.count,
        blogListWithUser.rows.map(blog => {
            const blogVal = blog.dataValues;
            blogVal.user = blogVal.user.dataValues;
            return blogVal;
        }));

    // 连表查询
    const userListWithBlog = await User.findAndCountAll({
        attributes: ['userName', 'nickName'],
        include: [{ model: Blog }]
    })

    console.log('userListWithBlog', userListWithBlog.count,
        userListWithBlog.rows.map(user => {
            const userVal = user.dataValues;
            //one user has many blogs
            userVal.blogs = userVal.blogs.map(blog => blog.dataValues);
            return userVal;
        }));

})()