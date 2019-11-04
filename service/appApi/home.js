const Router = require('koa-router');
let router = new Router();
router.get('/', async(ctx)=>{
    ctx.body="123";
});
router.get('/register', async(ctx)=>{
    ctx.body="register";
});
module.exports = router;