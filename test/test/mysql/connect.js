
var mysql = require('mysql');


exports.connect = function() {
 var connect = mysql.createConnection({
        host:'172.16.10.114',
        port:'3307',
        user:'member_01_rw',
        password:'member_01',
        database:'member_01',
    });
}
