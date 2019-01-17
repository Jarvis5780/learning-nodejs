const enevt = require('events');

class MyEvent extends enevt{}

const video = new MyEvent();

video.on('event',(name,count=3)=>{
    console.log('正在播放视频'+name+count)
})
video.emit('event','美国队长','第三部')
video.emit('event','钢铁侠','第三部')
//video.emit('error',new Error('错误了'))
