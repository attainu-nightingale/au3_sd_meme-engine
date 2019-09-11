var express = require('express');
var hbs = require('hbs');
var multer = require('multer');
var bodyParser = require('body-parser');
var session = require("express-session");
var mongoClient = require('mongodb').MongoClient;

var db;
var url = 'mongodb+srv://amit:amit123@meme-engine-oubqo.mongodb.net/meme?retryWrites=true&w=majority';
mongoClient.connect(url, function (err, client) {
  if (err)
    throw err;
  db = client.db('meme');
})


var app =  express();
app.use(express.urlencoded({ extended:false}));
app.use(
  session({
      secret: "Express session secret"
  })
);

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({
    extended: false
  }))
app.use(bodyParser.json())

var memehome = require('./post.js');

app.use('/', memehome);


var login = require('./login.js');
app.use('/', login);


var signup = require('./signup.js');
app.use('/', signup);


var about = require('./about.js');
app.use('/', about);

var contact = require('./contact.js');
app.use('/', contact);


app.get('/',function(req,res){
    res.render("home",{
      style:"style.css",
      script:"getimage.js"
    })
})


app.listen(process.env.PORT ||4000);   