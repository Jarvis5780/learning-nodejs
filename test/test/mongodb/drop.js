var mongo = require('mongodb');

var url = "mongodb://localhost/";

mongo.connect(url,function(err,db){
    if(err){
        throw err;
    }
    var dbObj = db.db('jarvis');

    dbObj.collection('jarvis').drop(function(err,res){
        if(err){
            throw err;
        }
        console.log(res);
        db.close();
    })
});