var express = require('express');
var session = require('express-session')
var bodyParser = require('body-parser');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;

var db;
var url = 'mongodb+srv://amit:amit123@meme-engine-oubqo.mongodb.net/meme?retryWrites=true&w=majority';
mongoClient.connect(url, function (err, client) {
  if (err)
    throw err;
  db = client.db('meme');
})

router.use(bodyParser.json());
router.use(session({
  secret: 'keyboard cat'
}))
router.use(function (req, res, next) {
  if (!req.session.views) {
      req.session.views = {}
  }
  var path = req.originalUrl;

  req.session.views[path] = (req.session.views[path] || 0) + 1

  next()
});

router.post('/auth', function (req, res) {
  db.collection('users').find({}).toArray(function (error, result) {
      if (error)
          throw error;
      var flag = false;
      for (var i = 0; i < result.length; i++) {
          if (req.body.email == result[i].email && req.body.password == result[i].password) {
              flag = true;
              break;
          }
      }
      if (flag) {
          req.session.loggedId = true;
          req.session.user = {
              username: req.body.username,
              password: req.body.password

          };
          res.redirect('/post');
          console.log("wow")
          // res.render('index')

      } else {
          
          // res.redirect('/login');
          res.send("password wrong ")
         


      }

  })
})


router.get('/NotLoginPost', function (req, res) {
  // res.json('This is posted image route');
  db.collection('images').find({}).toArray(function(err,result){
    if(err)
      throw err;
    res.render("NotLoginPost",{
      title:"post",
      style:"post.css",
      script:"script_post.js",
      array:result
    })
    // res.json(result);
  })
    
});




router.get('/login', function (req, res) {
  res.render("login",{
      title:'login',
      style:'login.css'
  });
})


 router.get("/post/logout", function(req,res){
    req.session.destroy();
    res.redirect("/");
    
});


module.exports = router