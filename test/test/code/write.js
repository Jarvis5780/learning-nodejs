var fs = require('fs');

console.log('准备写入文件');

var str = 'My Nmae Is Jaris';

fs.appendFile('readme.txt',str,function(error){
    if(error){
        console.log('文件写入失败');
    }
    console.log('文件写入成功')
    fs.readFile('readme.txt',function(err,data){
        if(err){
            console.log('文件获取失败');
            return ;
        }
        console.log('文件内容为'+data.toString())
    });
});

console.log('程序执行完毕');