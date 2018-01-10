//导入模块
var fs = require('fs');

var path = require('path');

// var path = require('path');
//path路径
console.log('abc' + __dirname);
console.log('123' + __filename);
var pathFile = path.join(__dirname,'./a.txt')
fs.readFile(pathFile,'utf-8',function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
})