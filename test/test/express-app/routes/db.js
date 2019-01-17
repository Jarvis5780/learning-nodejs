var express = require('express');
var router = express.Router();

router.get('/mysql/:username', function (req, res, next) {

    var username = req.params.username
    
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
        host     : '172.16.10.134',
        port     : '3306',
        user     : 'dev_select',
        password : 'tYzXN6pB7ak5',
        database : 'member'
    });

    connection.connect();

    connection.query('SELECT * FROM Profile where MobileNumber = '+username, function(err, rows, fields) {
    if (err) throw err;
        console.log('ok: ', rows[0].MobileNumber);
        res.json(rows[0]);
    });

    res.end();
});

router.get('/mongodb/:username',function(req,res,next){
    var username = req.params.username

    var mongodbObj = require('mongodb').MongoClient;

    //var url = "mongodb://admin:123456@localhost:27017/testmongo";
    var url = "mongodb://localhost:27017/";
    
    mongodbObj.connect(url,function(err,db){
        if(err){
            throw err;
        }
        var dbo = db.db('book');
        //var where = { 'name': '菜鸟工具'};
        var where = {};
        dbo.collection('basedate').find(where).sort({'name':1}).skip(0).limit(2).toArray(function(err1,res){
            if(err1){
                throw err1;
            }
            console.log(res);
        });
        console.log('ok');
        db.close();
    })
    res.end();
});


module.exports = router;
