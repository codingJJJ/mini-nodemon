const test1 = require('./test1')

const koa2 = require('koa2');

const app = new koa2();

app.use((ctx) => {
    ctx.body = '11'
})

app.listen('3002', () => {
    console.log(test1);
    console.log('服务器已启动321434');
})
