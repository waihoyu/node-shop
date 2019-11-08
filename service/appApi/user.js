const Router = require('koa-router');
const mongoose = require('mongoose');
const router = new Router();

router.get('/', async ctx => {
    ctx.body = '123';
});

router.post('/register', async ctx => {
    const User = mongoose.model('User');
    const newUser = new User(ctx.request.body);
    await newUser
        .save()
        .then(() => {
            ctx.body = {
                code: 200,
                message: '注册成功'
            };
        })
        .catch(error => {
            ctx.body = {
                code: 500,
                message: error
            };
        });
});

router.post('/login', async ctx => {
    const loginUser = ctx.request.body;
    const username = loginUser.username;
    const password = loginUser.password;
    const User = mongoose.model('User');
    await User.findOne({
        username: username
    })
        .exec()
        .then(async result => {
            if (result) {
                const newUser = new User();
                await newUser.comparePassword(password, result.password).then();
            } else {
                ctx.body = {
                    code: 200,
                    message: '用户名不存在'
                };
            }
        })
        .catch(error => {
            ctx.body = {
                code: 500,
                message: error
            };
        });
});
module.exports = router;
