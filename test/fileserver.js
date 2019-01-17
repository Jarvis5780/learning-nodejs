'use strict';
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

var root = path.resolve(process.argv[2] || '.');
console.log(root);

console.log('Static root dir: ' + root);

var server = http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;
    console.log(pathname);
    var filepath = path.join(root,pathname);

      fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) {
            // 没有出错并且文件存在:
            console.log('200 ' + request.url);
            // 发送200响应:
            response.writeHead(200);
            // 将文件流导向response:
            fs.createReadStream(filepath).pipe(response);
        } else {
            // 出错了或者文件不存在:
            console.log('404 ' + request.url);
            // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });

});

server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');

