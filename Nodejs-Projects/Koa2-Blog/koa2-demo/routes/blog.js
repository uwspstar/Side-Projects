const router = require('koa-router')()

router.prefix('/api/blog');

router.get('/list', async function (ctx, next) {
    const query = ctx.query;
    ctx.body = {
        errno: 0,
        query,
        data: "get blog list"
    }
})

module.exports = router