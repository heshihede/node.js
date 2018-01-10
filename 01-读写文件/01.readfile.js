//导入模块
var fs = require('fs');
//读取文件
fs.readFile('a.txt','utf-8',function (err, data) {
    if (err) {
        throw err;
    }else {
        console.log(data);
    }
})