$("#Awe").on('click',function(){    $.ajax({
    url:'https://raw.githubusercontent.com/rishabh-verma-au3/MyJavaStuffs/master/meme.json',
    type:'GET',
     success:function(data){
  // console.log(data);
       window.location.hash = 'Awesome';
       data=JSON.parse(data);
         $("#crd").empty();
      //   $('#crd').append("<div class='card-deck' id='deck' style='width:100%;'></div>")
        for(var i=0;i<data.length;i++)
      {  // data=JSON.stringify(data);
          if(data[i].category=="Awesome")
          {  // data=JSON.stringify(data);
                    
            //  { $("#deck").append("<div style='display:block;'></div>")}
          //  $('#dec').append('<div class="col-4" style="width:100%;"></div>')
          $("#crd").append("<div class='col-4' style='width:100%;margin-bottom:1%;'><div class='card' style='width: 100%;'><div style='text-align:center;background-color:#28a745;'> "+data[i].category+"</div><a href='/post/"+data[i].id+"'> <img src="+data[i].url+" class='card-img-top' alt='...' width='"+data[i].width+"px' height='"+data[i].height+"px'></a><div class='card-body' style='height:100%;width:100%;' style='font-size:2vw;'><h5 class='card-title' style='font-size:2vw;'>"+data[i].name+"</h5><div ><button type='button' class='btn btn-outline-success my-2 my-sm-0'style='width:100%;' style='margin: 10px; color: #fff;' data-toggle='modal' data-src='"+data[i].url+"'data-target='#share'>Share</botton></div></div></div></div>")
                                  


      }
          

      }

                      }
})});



$("#Awesome").on('click',function(){    $.ajax({
  url:'https://raw.githubusercontent.com/rishabh-verma-au3/MyJavaStuffs/master/meme.json',
  type:'GET',
   success:function(data){
// console.log(data);
     window.location.hash = 'Awesome';
     data=JSON.parse(data);
       $("#crd").empty();
    //   $('#crd').append("<div class='card-deck' id='deck' style='width:100%;'></div>")
      for(var i=0;i<data.length;i++)
    {  // data=JSON.stringify(data);
        if(data[i].category=="Awesome")
        {  // data=JSON.stringify(data);
                  
          //  { $("#deck").append("<div style='display:block;'></div>")}
        //  $('#dec').append('<div class="col-4" style="width:100%;"></div>')
        $("#crd").append("<div class='col-4' style='width:100%;margin-bottom:1%;'><div class='card' style='width: 100%;'><div style='text-align:center;background-color:#28a745;'> "+data[i].category+"</div><a href='/post/"+data[i].id+"'> <img src="+data[i].url+" class='card-img-top' alt='...' width='"+data[i].width+"px' height='"+data[i].height+"px'></a><div class='card-body' style='height:100%;width:100%;' style='font-size:2vw;'><h5 class='card-title' style='font-size:2vw;'>"+data[i].name+"</h5><div ><button type='button' class='btn btn-outline-success my-2 my-sm-0'style='width:100%;' style='margin: 10px; color: #fff;' data-toggle='modal' data-src='"+data[i].url+"'data-target='#share'>Share</botton></div></div></div></div>")
                                                  
              


    }
        

    }

                    }
})});



