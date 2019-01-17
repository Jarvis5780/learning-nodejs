var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'172.16.10.114',
    port:'3307',
    user:'member_01_rw',
    password:'member_01',
    database:'member_01',
});
connection.connect();

connection.query('select * from Friend where FriendID = 1 ',function(errors,result,files){
    if(errors){
        throw errors;
    }
    console.log(result[0].LoginName);
    console.log(result[0].RegisterTime);
})

connection.end();
