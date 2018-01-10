//导入模块
var fs = require('fs');
//写入文件
fs.writeFile('./b.txt','千岩万转路不定，迷花倚石忽已暝.',function (err) {
    if (err) {
        throw err;
    }
    console.log('写入成功');
    //文件的追加
    fs.appendFile('./b.txt','熊咆龙吟殷岩泉，栗深林兮惊层巅.',function (err) {
        if (err) {
            throw err;
        }
        console.log('添加成功');
    })
})