var fs = require('fs');

var data = fs.readFileSync('config.txt');

console.log(data.toString());
console.log('程序结束');





