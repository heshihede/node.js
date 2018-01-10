### node.js接收GET请求
1. 导入模块时多导入URL模块
    var url = require('url');
2. 服务器监听时，使用URL模块
    var urlObj = url.parse(req.url, trul)

```javascript
  Url {	
          protocol: null,协议 http
          slashes: null,
          auth: null,验证信息
          host: null,主机=主机名+端口号
          port: null,端口号
          hostname: null,主机名ip地址
          hash: null,资源定位符
          search: '?key=value&name=%E5%BC%A0%E4%B8%89&age=18',
          query: { key: 'value', name: '张三', age: '18' },
          pathname: '/getRequest',
          path: '/getRequest?key=value&name=%E5%BC%A0%E4%B8%89&age=18',
          href: '/getRequest?key=value&name=%E5%BC%A0%E4%B8%89&age=18' 
      }
```
3. url中包含中文时需要解码
    var urlPath = decodeURL(req.url);
4. 将json对象转换为字符串并输出
    res.end(JSON.stringify(urlObj.query))

### node.js接收post请求
1. 导入querystring模块接收post参数
    var querystring = requrie('querystring');
2. post提交事件
    由于post提交参数并不是一次就提交上来的，有可能有很多次，具体次数取决于网速快慢与文件大小。
    1. 用postData接收数据
    var postData = '';
    2. 每次接收后拼接字符串
    req.on('data',function(chunck){
         postData += chunck;
     });
    3. post接收end事件
    req.on('end',function(){

    })
    4. 转成json对象
    var postObjc = querystring.parse(postData);