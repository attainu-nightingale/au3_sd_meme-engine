var express = require('express');
var router = express.Router();
//var mongoClient = require('mongodb').MongoClient;

// var db;
// var url = 'mongodb+srv://amit:amit123@meme-engine-oubqo.mongodb.net/meme?retryWrites=true&w=majority';
// mongoClient.connect(url, function (err, client) {
//   if (err)
//     throw err;
//   db = client.db('meme');
// })
var mongoClient=require("mongodb").MongoClient;
var db;
var url;
if(process.env.DB_URL)
   {url=process.env.DB_URL;
    console.log(url)}
else
   {url="mongodb://127.0.0.1:27017";}
mongoClient.connect(url,{ useUnifiedTopology: true } ,function(error,client){
         if (error)
            throw error;
        db=client.db("blog");

        console.log("connecting.")
})

// // Home page route
// router.get('/', function (req, res) {
//   res.send('home page');
// });

// This is specific page route
router.get('/post/:postID', function (req, res) {
  // res.json('This is posted image route');
  var amit = [];
  db.collection('comment').find({}).toArray(function(err,result){
    if(err)
      throw err;
      for(var i=0;i<result.length;i++){
        if(result[i].id==parseInt(req.params.postID)){
          amit.push(result[i])
        }
      }
    
      console.log(amit)
    res.render("post.hbs",{
      title:"post with post id",
      style:"post.css",
      script:"script_post.js",
      arr:amit
    })
    // res.json(result);
  })
    
});


// router.post('/post/:postID', function (req, res) {
//   // res.json('This is posted image route');
//   db.collection('images').insertOne({upvote:req.body.upvote,username:req.body.username},function(err,result){
//     if(err)
//       throw err;
//     res.json(result);
//   })
    
// });


router.post('/post/:postID', function (req, res) {
  // res.json('This is posted image route');
  db.collection('comment').insertOne({"postID": parseInt(req.params.postID),"username":req.body.username,"comment":req.body.comment},function(err,result){
    if(err)
      throw err;
    res.json(result);
 
  })
    
});






module.exports = router