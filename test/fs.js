const fs = require('fs');

fs.stat('hello.js',(error,stat)=>{
    if(error) {
        console.log(error)
    }else{
        console.log(stat);
        console.log(`是否为文件 ${stat.isFile()}`);
        console.log(stat.isDirectory());
    }
})

fs.mkdir('logs',(error,)=>{
    if(error){
        console.log(error)
    }else{
        console('创建成功')
    }
})

fs.appendFile('logs/php.txt','node is good \n',(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('写入成功')
    }
})

fs.readFile('logs/php.txt', 'utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
  });
