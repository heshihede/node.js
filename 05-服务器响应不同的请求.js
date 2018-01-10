//导入模块
var http = require('http');
//创建服务器
var server = http.createServer();
//服务器监听
server.on('request', function (req, res) {
    var urlPath = req.url;
    console.log(req.method);
    if (urlPath == '/') {
        res.end('index.html')
    }else if (urlPath == '/login.html') {
        res.end('<p>这是一个寂寞的天</p>')
    }else {
        res.end('404')
    }
})
//服务器启动
server.listen('3000', function () {
    console.log('启动成功');
})