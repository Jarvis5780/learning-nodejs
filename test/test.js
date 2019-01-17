const os = require('os');
const url = require('url');
const querystring = require('querystring');
const { URL } = require('url');

const hello = require('./src/hello.js');
hello.hello()


console.log(os.hostname());

const myURL = new URL('https://example.org:81/foo');
console.log(myURL.hostname);
myURL.hostname = 'example.com:82';
console.log(myURL.href);

let urlname = 'http://www.houliming.com/index?from=baidu#jarvis';
console.log(url.parse(urlname,true,true))

let querystringname = 'foo=bar&abc=xyz&abc=123';
console.log(querystring.parse(querystringname))