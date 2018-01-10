//导入模块
var http = require('http');
var fs = require('fs');
var path = require('path');

//创建服务器
var server = http.createServer();

//服务器监听
server.on('request', function (req, res) {
    var urlPath = req.url;
    console.log(req.method);

    if (urlPath == '/') {
        fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', function (err, data) {
            if (err) {
                throw err;
            }
            console.log(data);
            res.end(data)
        })
    }
})

//启动服务器
server.listen('3000', function () {
    console.log('启动成功');
})