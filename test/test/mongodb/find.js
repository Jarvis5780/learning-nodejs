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

/*
use jarvis  就是创建jarvis数据库
//创建jarviscoollection集合，进行增删改查
db.jarviscoollection.insert({'name':'jarvis'})
db.jarviscoollection.find({'name':'jarvis'}).pretty()
db.jarviscoollection.update({'sex':'boy'},{$set:{'name':'Stark'}})
db.jarviscoollection.remove({'name':'jarvis'})
db.dropDatabase()  //删除jarvis数据库
db.jarviscoollection.drop()  //删除jarviscoollection集合
*/