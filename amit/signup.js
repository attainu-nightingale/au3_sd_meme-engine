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



router.get('/signup', function (req, res) {
  res.render("signup",{
      title:'Sign Up ',
      style:'login.css'
  });
})



module.exports = router