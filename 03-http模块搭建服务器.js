//导入模块
var http = require('http');
//创建服务器
var server = http.createServer();
//服务器监听
server.on('request', function (req, res) {
    console.log(req.url);
    console.log(req.method);
})
//开启服务器
server.listen('3000', function () {
    console.log('开启成功');
})
