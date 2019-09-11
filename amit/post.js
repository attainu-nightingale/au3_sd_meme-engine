var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;

var db;
var url = 'mongodb+srv://amit:amit123@meme-engine-oubqo.mongodb.net/meme?retryWrites=true&w=majority';
mongoClient.connect(url, function (err, client) {
  if (err)
    throw err;
  db = client.db('meme');
})

// // Home page route
// router.get('/', function (req, res) {
//   res.send('home page');
// });

// This is specific page route
router.get('/post', function (req, res) {
  // res.json('This is posted image route');
  db.collection('images').find({}).toArray(function(err,result){
    if(err)
      throw err;
    res.render("post",{
      title:"post",
      image:"https://www.todaysparent.com/wp-content/uploads/2017/06/when-your-kid-becomes-a-meme-1024x576-1497986561.jpg",
      style:"post.css",
      script:"script_post.js",
      array:result
    })
    // res.json(result);
  })
    
});


router.post('/post', function (req, res) {
  // res.json('This is posted image route');
  db.collection('num').insertOne({upvote:req.body.upvote,username:req.body.username,comment:req.body.comment},function(err,result){
    if(err)
      throw err;
    res.json(result);
  })
    
});

router.post('/post', function (req, res) {
  // res.json('This is posted image route');
  db.collection('num').insertOne({username:req.body.username,comment:req.body.comment},function(err,result){
    if(err)
      throw err;
    res.json(result);
  })
    
});


router.put('/post', function (req, res) {
  // res.json('This is posted image route');
  db.collection('num').updateOne({_id:require('mongodb').ObjectID(req.body.id)},{$set: {upvote:req.body.upvote,username:req.body.username,comment:req.body.comment}},function(err,result){
    if(err)
      throw err;
    res.json(result);
    router.get('/post', function (req, res) {
      // res.json('This is posted image route');
      db.collection('num').find({}).toArray(function(err,result){
        if(err)
          throw err;
        res.render("post",{
          title:"post",
          style:"post.css",
          script:"script_post.js",
          array:result
        })
        // res.json(result);
      })
        
    });
  })
    
});






module.exports = router