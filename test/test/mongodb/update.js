var mongodbObj = require('mongodb').MongoClient;

//var url = "mongodb://admin:123456@localhost:27017/testmongo";
var url = "mongodb://localhost:27017/";

mongodbObj.connect(url,function(err,db){
    if(err){
        throw err;
    }
    var dbo = db.db('book');
    var where = { 'name': '菜鸟工具'};
    var updateStr = {$set:{ 'url': 'http://www.baidu.com'}};
    dbo.collection('basedate').updateMany(where,updateStr,function(err,res){
        if(err){
            throw err;
        }
        console.log(res.result.nModified+'条');
    });
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