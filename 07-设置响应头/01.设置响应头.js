//导入模块
var fs = require('fs');
var http = require('http');
var path = require('path');

//创建服务器
var server = http.createServer();

//服务器监听
server.on('request', function (req, res) {
    var urlPath = req.url;
    console.log(req.method);
    res.writeHead(200,{
        'Content-Type':'text/plain;charset=utf-8'
    })
    res.end('这是一个寂寞的天')

})
//服务器启动
server.listen('3000', function () {
    console.log('启动成功');
})