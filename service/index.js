
/*
 *@description:
 *@author: Wai HoYu
 *@date: 2019-10-31 13:35:41
 *@version: V1.0.5
*/

const Koa = require('koa');
const app = new Koa();
const {connect, initSchemas} = require('./database/init');
const mongoose = require('mongoose');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaparser = require('koa-bodyparser');
app.use(koaparser());
app.use(cors());
let user = require('./appApi/user');
let home = require('./appApi/home');

let router = new Router();
router.use('/user', user.routes());
// router.use('/home', user.routes());

app.use(router.routes());
app.use(router.allowedMethods());

;(async () => {
    await connect();
    initSchemas();
    // const User = mongoose.model('User');
    // let oneUser = new User({userName: 'js',password: '123456'});
    // oneUser.save().then(() => {
    //     console.log('插入成功');
    // });
})();

app.use(async (ctx)=>{
    ctx.body = '<h2> koa2 </h2>';
});

app.listen(3000, () => {
    console.log('[Server] starting at port 3000');
});




