var fs = require('fs');
var http = require('http');
var path = require('path');

var url = require('url')

var server = http.createServer();

server.on('request', function (req, res) {
    //console.log(req.url);
    var urlObj = url.parse(req.url, true);
    // console.log(urlObj);

    //中文编码
    var urlPath = decodeURI(req.url);

    if (req.url == '/') {
        fs.readFile(path.join(__dirname, 'get.html'), function (err, data) {
            if (err) {
                throw err;
            }
            res.end(data)
        })
    } 
    if (req.url == '/jquery/dist/jquery.min.js') {
        fs.readFile(path.join(__dirname, '/jquery/dist/jquery.min.js'), function (err, data) {
            if (err) {
                throw err;
            }
            res.end(data);
        })
    }
    if (urlObj.pathname == '/getRequest' && req.method == 'GET') {
        res.end(JSON.stringify(urlObj.query));
    }
})

server.listen('3000', function () {
    console.log('开启成功');
})