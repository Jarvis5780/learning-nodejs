
console.log(__filename);

console.log(__dirname);

function setTimeOutDo(){
    console.log('come on');
    two();
}

function two(){
    console.log('come on TWO');
}

var t = setTimeout(setTimeOutDo,3000);


function setIntervalDO(){
    console.log('My Name Is Jarvis')
    clearInterval(f);
}

var f = setInterval(setIntervalDO,2000);

//clearTimeout(t);
