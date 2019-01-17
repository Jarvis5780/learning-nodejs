const http = require('http');

http.get('http://nodejs.org/dist/index.json',(res)=>{
    //console.log(res)
    const { statusCode } = res
    const contentType = res.headers['content-type'];

    console.log(statusCode);
    console.log(contentType);


    let error;
    if (statusCode !== 200) {
    error = new Error('请求失败。\n' +
                    `状态码: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
    error = new Error('无效的 content-type.\n' +
                    `期望 application/json 但获取的是 ${contentType}`);
    }
    if (error) {
    console.error(error.message);
    // 消耗响应数据以释放内存
    res.resume();
    return;
    }

    let json = '';
    res.on('data',(chunk)=>{
        json += chunk;
    })

    res.on('end', () => {
        try {
          const parsedData = JSON.parse(json);
          console.log(parsedData);
        } catch (e) {
          console.error(e.message);
        }
      }).on('error', (e) => {
        console.error(`错误: ${e.message}`);
      });
})