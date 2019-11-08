const Router = require('koa-router');
const mongoose = require('mongoose');

let router = new Router();

router.get('/', async(ctx)=>{
    ctx.body="123";
});

router.post('/register', async(ctx)=>{
    // ctx.body=ctx.request.body;
    const User = mongoose.model('User');
    let newUser = new User(ctx.request.body);
    // console.log(newUser)
    await newUser.save().then(()=>{
        ctx.body = {
            code: 200,
            message:'注册成功'
        }
    }).catch((error)=>{
        ctx.body = {
            code: 500,
            message: error
        }
    });
});

router.post('/login', async(ctx)=>{
    let loginUser = ctx.request.body;
    let username = loginUser.username;
    let password = loginUser.password;
    const User = mongoose.model('User');

    await User.findOne({
        username: username
    }).exec().then(async (result)=>{
        console.log(result);
        if (result) {
            let newUser = new User();
            await newUser.comparePassword(password, result.password).then();     
        }else{
           ctx.body={
               code:200,
               message:'用户名不存在'
           } 
        }
    }).catch((error)=>{
        console.log(error);
        ctx.body={
            code:500,
            message:error
        };
    });
    await newUser.save().then(()=>{
        ctx.body = {
            code: 200,
            message:'注册成功'
        }
    }).catch((error)=>{
        ctx.body = {
            code: 500,
            message: error
        }
    });
});

module.exports = router;