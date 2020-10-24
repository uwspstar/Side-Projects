const { Blog, User } = require('./model');

!(async function () {

    const updateRecord = await User.update({
        nickName: 'bigBoss'
    }, {
        where: { userName: 'xing' }
    })

    console.log('updateRecord', updateRecord[0] > 0);
})()