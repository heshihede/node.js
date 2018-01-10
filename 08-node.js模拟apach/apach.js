var fs = require('fs');
var http = require('http');
var path = require('path');

var server = http.createServer();

server.on('request', function (req, res) {
    var urlPath = req.url;
    var methodPath = req.method;

    if (urlPath == '/') {
        fs.readFile(path.join(__dirname,'index.html'), function (err, data) {
            if (err) {
                throw err;
            }
            res.end(data)
        })
    }else if (urlPath.indexOf('/public') == 0) {
        fs.readFile(path.join(__dirname,urlPath), function (err, data) {
            if (err) {
                throw err;
            }
            res.end(data)
        })
    }

})

server.listen('3000', function () {
    console.log('开启成功');
})