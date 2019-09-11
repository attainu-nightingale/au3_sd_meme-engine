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
router.use(express.static('public'));
router.get('/about-us', function (req, res) {
    res.render("about-us",{
        title:"About-Us",
        style:"contact-page.css",
       
      })
  });
  


module.exports = router