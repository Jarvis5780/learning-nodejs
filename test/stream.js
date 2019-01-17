const fs = require('fs');
const zlib = require('zlib');

const streamDataRead = fs.createReadStream('logs/php.txt');
const streamDataWrite = fs.createWriteStream('logs/php_copy_pipe.gz');

streamDataRead.on('data',(chunk) => {
    console.log(chunk);
    console.log(chunk.length);
    streamDataWrite.write(chunk);
  });

  streamDataRead.on('end',() => {
    console.log('读取结束');
  });


  //gzip压缩
  streamDataRead.pipe(zlib.createGzip()).pipe(streamDataWrite);