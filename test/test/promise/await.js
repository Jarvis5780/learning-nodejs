
 
 // first test
 //使用saync默认返回promise对象 Promise { 'Hello World' }
 async function asynctest(){
    var str = 'Hello World';
    return str;
}

console.log(asynctest());



//second test
//直接返回promise对象  【没有使用async】
function promise(){
    return Promise.resolve('Hello Promise');
}

promise().then(v => {
    console.log('get',v);
});


//await 等到执行完后调用，按照流程走
//如果处理返回的数据不是promise对象就保持原来状态，如果是promise对象就会好玩了

async function addTime(time){
    return time = time + 100;
}

async function addTime3(time,time2){
    return  time + time2 + 100;
}

 async function go(){
    var time = 100;
    time2 = await addTime(time);
    time3 = await addTime3(time,time2);
    time4 = await addTime(time3);


    console.log(time2+time3+time4);
}

go();

