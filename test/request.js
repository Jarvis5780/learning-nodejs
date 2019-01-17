var request = require('request');
request({url:'http://api.douban.com/v2/movie/top250',json:true}, function (error, response, body) {
  //console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log(JSON.stringify(body,null,2)); // Print the HTML for the Google homepage.
});