var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'172.16.10.114',
    port:'3307',
    user:'member_01_rw',
    password:'member_01',
    database:'member_01',
});
connection.connect();

var  addSql = 'INSERT INTO Friend(PassportID,FriendPassportID,Memo,AddTime) VALUES(?,?,?,?)';
var  addSqlParams = [1,2,3,'2018-02-28 18:00:00'];

connection.query(addSql,addSqlParams,function(err,result){
    if(err){
        console.log(err.message);
        return ;
    }

    console.log(result);
})

connection.end();