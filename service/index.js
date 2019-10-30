
const Koa = require('koa');
const app = new Koa();
const {connect, initSchema} = require('./database/init');
const mongoose = require('mongoose');
 

;(async ()=>{
    await connect();
    initSchema();
    const User = mongoose.model('User');
    let oneUser = new User({userName: 'js',password:'123456'});
    oneUser.save().then(()=>{
        console.log("插入成功");
    })
})()

app.use(async (ctx)=>{
    ctx.body = '<h2>koa2</h2>';
});


app.listen(3000,()=>{
    console.log('[Server] starting at port 3000');
});
