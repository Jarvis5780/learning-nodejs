var fs = require('fs');

fs.readFile('config.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });
console.log('程序结束');
