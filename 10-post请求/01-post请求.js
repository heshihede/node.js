//导入模块
var http = require('http');
var fs = require('fs');
var path = require('path');
var querystring = require('querystring')

//创建服务器
var server = http.createServer();


server.on('request', function (req, res) {

    if (req.url == '/') {
        fs.readFile(path.join(__dirname, 'post.html'), function (err, data) {
            if (err) {
                throw err;
            }
            res.end(data);
        })
    }

    if (req.url == '/node_modules/jquery/dist/jquery.min.js') {
        fs.readFile(path.join(__dirname, './node_modules/jquery/dist/jquery.min.js'), function (err, data) {
            if (err) {
                throw err;
            }
            res.end(data)
        })
    }

    if (req.url == '/getRequest' && req.method == 'POST') {
        console.log('接受成功');
        var postData = '';
        req.on('data', function (chunck) {
            postData += chunck;
        })
        req.on('end', function () {
            console.log('请求结束');
            console.log(postData);
            var postObj = querystring.parse(postData);
            res.end(JSON.stringify(postObj))
        })
    }
})

//服务器监听
server.listen(3000, function () {
    console.log('开启成功');
})