var mongodbObj = require('mongodb').MongoClient;

//var url = "mongodb://admin:123456@localhost:27017/testmongo";
var url = "mongodb://localhost:27017/";

mongodbObj.connect(url,function(err,db){
    if(err){
        throw err;
    }
    var dbo = db.db('book');
    var myobj =  [
        { name: 'php', url: 'https://c.runoob.com', type: 'cn'},
        { name: 'Ptyhon', url: 'https://www.google.com', type: 'en'},
        { name: 'java', url: 'https://www.google.com', type: 'en'},
        { name: 'c', url: 'https://www.google.com', type: 'en'},
        { name: 'c#', url: 'https://www.google.com', type: 'en'},
        { name: '.net', url: 'https://www.google.com', type: 'en'}
       ];
    dbo.collection('basedate').insertMany(myobj,function(err,res){
        if(err){
            throw err;
        }
        console.log('插入成功，共计'+res.insertedCount+'条')    
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