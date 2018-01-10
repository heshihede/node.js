//导入模块
var http = require('http');
//创建服务器
var server = http.createServer();
//服务器监听
server.on('request', function (req, res) {
    console.log(req.url);
    console.log(req.method);
    // res.write('hello world');
    // res.end();
    res.end('hello world');

})
server.listen('3000', function () {
    console.log('启动成功');
})