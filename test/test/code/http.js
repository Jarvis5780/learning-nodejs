var http = require('http');
//console.log(http);return;
var option = {
    host:'www.runoob.com',
    port:'80',
    path:'/nodejs/nodejs-web-module.html',
    method :'get'
}

var callback =function(response){
    var body = '';
    response.on('data', function(data) {
        body += data;
     });
    response.on('end',function(){
        console.log(body);
    });
}

var req = http.request(option,callback);
req.on('errpr',function(e){
    console.log(e);
})
req.end('');