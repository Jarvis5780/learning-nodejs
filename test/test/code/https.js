var https = require('https');

var options = {
    host:'www.baidu.com',
    port:443,
    path:'/'
}

var req = https.request(options,function(respone){
    respone.on('data',function(d){
        //process.stdout.write(d);
    });
    console.log('---------------------------------------')
    console.log(respone.headers);
    console.log(respone.httpVersion);
})

req.on('error',(error)=>{
    console.log(error);
})

req.end();