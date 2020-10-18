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


    // create blog
    const blog1 = await Blog.create({
        title: 't-b-1',
        content: 'blog content 1',
        userId: user1Id
    })
    console.log('blog1', blog1.dataValues);
})()

