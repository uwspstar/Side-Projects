// insert 
/*
Executing (default): INSERT INTO `users` (`id`,`userName`,`password`,`nickName`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?,?);
user1 {
  id: 1,
  userName: 'Xing',
  password: '123',
  nickName: 'dad',
  updatedAt: 2020-10-18T11:41:21.148Z,
  createdAt: 2020-10-18T11:41:21.148Z
}
*/

const { Blog, User } = require('./model');

!(async function () {

    const user1 = await User.create({
        userName: 'Xing',
        password: '123',
        nickName: 'dad'
    })

    console.log('user1', user1.dataValues);
    const user1Id = user1.dataValues.id;

    const user2 = await User.create({
        userName: 'Andrew',
        password: '123',
        nickName: 'son'
    })

    console.log('user2', user2.dataValues);
    const user2Id = user2.dataValues.id;

    const user3 = await User.create({
        userName: 'ToDo',
        password: '123',
        nickName: 'son1'
    })

    console.log('user3', user3.dataValues);
    const user3Id = user3.dataValues.id;

    // create blog
    const blog1 = await Blog.create({
        title: 't-b-1',
        content: 'blog content 1',
        userId: user1Id
    })
    console.log('blog1', blog1.dataValues);

    const blog2 = await Blog.create({
        title: 't-b-2',
        content: 'blog content 2',
        userId: user2Id
    })

    console.log('blog2', blog2.dataValues);

    const blog3 = await Blog.create({
        title: 't-b-3',
        content: 'blog content 3',
        userId: user1Id
    })

    console.log('blog3', blog3.dataValues);

    const blog4 = await Blog.create({
        title: 't-b-4',
        content: 'blog content 4',
        userId: user3Id
    })

    console.log('blog4', blog4.dataValues);

})()

