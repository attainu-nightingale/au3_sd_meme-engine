  
var express = require('express');
var bodyParser=require("body-parser");
var multer=require("multer");
var upload=multer({dest:'Uploads/Images'});
const dotenv=require("dotenv");
dotenv.config();
var cloudinary=require("cloudinary").v2;
cloudinary.config({
    cloud_name:''+process.env.CLOUD_NAME,
    api_key:''+process.env.API_KEY,
    api_secret:''+process.env.API_SECRET

})
// var multerCloudinary = require('multer-cloudinary');
// var cloudinary = require('cloudinary').v2;
// var cloudinaryStorage = multerCloudinary({cloudinary: cloudinary});


var app = express();
// var comment=require('./post');
// app.use('/',comment);
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
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

 app.get("/blog",function(req,res){

   db.collection('users').find({}).toArray(function(err,result){
            if(err)
             throw err;
            
          //  console.log(result)
                   
   
   
              res.json(result) 
})
 });



app.use(express.urlencoded({ extended:true}));
app.use(bodyParser.json());

app.set('view engine', 'hbs');
app.get("/", function(req, res){
    res.render("home" , {
        style: "/style.css",
        script:"/data.js"
    });

});
app.get("/contact-us", function(req, res){
    res.render("contact-us" , {
        style: "/contact-page.css",
    
    });

});
app.get("/about-us", function(req, res){
    res.render("about-us" , {
        style: "/style.css",
    
    });

});
app.post("/Upload",upload.single("memes"), function(req, res){
                 console.log(req.body.name);
                 console.log(req.body.username);
                 console.log(req.file.path);
                //  var c = req.file.path;
                //   var ctx = c.getContext("2d");
                //   ctx.font = "30px Arial";
                //    ctx.fillText("Hello World",10,50);
                  



                 db.collection('users').find({}).toArray(function(err,result1){
                    if(err)
                     throw err;
                     setTimeout(function(){
                        console.log("THIS IS");
                    }, 3000);
                     var lengt=result1.length;
                //      console.log(lengt);
                    

                cloudinary.uploader.upload(req.file.path,function(error,result2){
            // console.log(error);
            
                          if (error)
                            throw error;
                     //   console.log(lengt);
                         console.log(result2.secure_url);


               db.collection('users').insertOne({"id":result1.length+51,"name":req.body.name,"url":result2.secure_url,"width":"568","Height":"335","category":"userUpload","username":req.body.username},function(err,result){
                if(err)
                 throw err;
                // console.log(result);
                 setTimeout(function(){
                    console.log("THIS IS");
                }, 2000);
                console.log(req.file.path);
                })})})



                   res.redirect("/");


        



    

});
// app.get('/post/:post_id', function (req, res) {
//     res.send(parseInt(req.params.post_id)+"and"+parseInt(req.params.post_id)+"");
//   //  console.log(req.params());

// })
app.get('/post/:postID', function (req, res) {
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
        //console.log(result);
       // console.log(amit)
      res.render("post",{
        title:"post with post id",
         script:"/script_post.js",
        arr:amit
      })
      // res.json(result);
    })
      
  });
 
  app.post('/post/:postID', function (req, res) {
    // res.json('This is posted image route');
    db.collection('comment').insertOne({"id": parseInt(req.params.postID),"username":req.body.username,"comment":req.body.comment},function(err,result){
      if(err)
        throw err;
       // console.log(result);
      res.json(result);
   
    })
      
  });
  


app.listen(process.env.PORT || 3000, function () {
    console.log("Your App is running at port 3000");
});