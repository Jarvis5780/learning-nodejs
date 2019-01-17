var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '172.16.10.138',
  user     : 'other_rw',
  password : 'other_db_rw',
  database : 'backend'
});
 
connection.connect();
 
connection.query('SELECT * from Admin', function (error, results, fields) {
  if (error) throw error;
  results.forEach(element => {
      if(element.isDepartmentMaster == 0){
        console.log('真实姓名: ', element.RealName);
      }
  });
    console.log('connected as id ' + connection.threadId);
});
 
connection.end();