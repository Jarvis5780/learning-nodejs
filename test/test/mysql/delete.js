var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'172.16.10.114',
    port:'3307',
    user:'member_01_rw',
    password:'member_01',
    database:'member_01',
});
connection.connect();

var  addSql = 'delete from Friend where FriendID=?';
addSqlParams = [2];
connection.query(addSql,addSqlParams,function(err,result){
    if(err){
        console.log(err.message);
        return ;
    }

    console.log(result.affectedRows);
})

connection.end();