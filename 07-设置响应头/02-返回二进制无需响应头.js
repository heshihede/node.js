var fs = require('fs');
var http = require('http');
var path = require('path');

var server = http.createServer();

server.on('request', function (req, res) {
    var urlPath = req.url;
    var methodPath = req.method;

    fs.readFile(path.join(__dirname,'23.png'), function (err, data) {
        if (err) {
            throw err;
        }
        res.end(data);
    })
})

server.listen('3000', function () {
    console.log('启动成功');
})