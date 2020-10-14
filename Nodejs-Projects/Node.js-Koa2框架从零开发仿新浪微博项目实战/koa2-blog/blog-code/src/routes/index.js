const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  //index is the ejs template name. 
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    msg: 'index page with ejs template',
    blogList: [
      {
        id: 1,
        title: 'blog 1'
      },
      {
        id: 2,
        title: 'blog 2'
      },
      {
        id: 3,
        title: 'blog 3'
      }
    ]
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/profile/:userName', async (ctx, next) => {
  const { userName } = ctx.params;
  ctx.body = {
    title: 'this is a profile page',
    userName
  }
})

router.get('/loadMore/:userName/:pageIndex', async (ctx, next) => {
  const { userName, pageIndex } = ctx.params;
  ctx.body = {
    title: 'this is a loadMore API',
    userName,
    pageIndex
  }
})

module.exports = router
