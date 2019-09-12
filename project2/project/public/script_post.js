var flag = 0;
if ($('#logout').text() == 'Logout') {

    $("#upvote").on('click', function () {
        $(this).toggleClass('clicked');
        var url = $(location).attr('href');
        var parts = url.split("/");
        var hard = parts[parts.length - 1]
        alert(hard);
        if (flag == 0) {

            $.ajax({
                url: "/post/" + hard,
                type: "PUT",

                data: {
                    upvote: 1,
                },
                success: function (data) {
                    alert("upvote");
                    flag = 1;
                }

            })
        } else if (flag == 1) {
            var url = $(location).attr('href');
        var parts = url.split("/");
        var hard = parts[parts.length - 1]
            $.ajax({
                url: "/post/" + hard,
                type: "PUT",
                data: {
                    upvote: 0,
                },
                success: function (data) {
                    alert("downvote");
                    flag = 0;

                }

            })

        }


    })
    // this for comment
    $("#cmmnt").on('click', function () {
        var url = $(location).attr('href');
        var parts = url.split("/");
        var hard = parts[parts.length - 1]
        //console.log(hard)
        $.ajax({
            url: "/post/" + hard,
            type: "POST",
             data: {
                username: $('#username').val(),
                comment: $('#newcomment').val()
            }, 
            success: function (data) {
               // console.log(data);
               // data=JSON.stringify(data);
                $('#sign').append("Username:" + $('#username').val() + "<pre></pre> " + " Comment:" + $('#newcomment').val() + "<br><br>");
                $('#username').val('');
                $('#newcomment').val('');
            }
        })

    })

} else {
    if ($('#logout').text() == 'Login') {

        $("#upvote").on('click', function () {

            alert("not login")


        })
    }
    // this for comment
    $("#cmmnt").on('click', function () {
        $('#username').val('');
        $('#newcomment').val('');
        alert("You are not login")

    })
}


$(document).ready(function(){
    var ur = $(location).attr('href');
    var part = ur.split("/");
    var har = part[part.length - 1]

  if(har<=50)
   { $.ajax({
   url: 'https://raw.githubusercontent.com/rishabh-verma-au3/MyJavaStuffs/master/meme.json',
   type: 'GET',
     success: function (data) {
   // console.log(window.location);
   //window.location.hash = '';
    data = JSON.parse(data);
     $("#crd").empty();
//  $('#crd').append("<div class='card-deck' id='dec' style='width:100%;'></div>")
     var url = $(location).attr('href');
      var parts = url.split("/");
   var hard = parts[parts.length - 1]
   for (var i = 1; i <= data.length; i++) { // data=JSON.stringify(data);
    if ((i) == hard) {
    $("#crd").append("<div class='col-4' style='width:100%;margin-bottom:1%;'><div class='card' style='width: 100%;'><div style='text-align:center;background-color:#28a745;'> " + data[(i-1)].category + "</div> <img src=" + data[(i-1)].url + " class='card-img-top' alt='...' width='" + 400 + "px' height='" + 400 + "px'><div class='card-body' style='height:100%;width:100%;' style='font-size:2vw;'><h5 class='card-title' style='font-size:2vw;'>" + data[(i-1)].name + "</h5></div></div></div>")
    // $('#crd').append("<img src="+data[i].url+" class='card-img-top' alt='...' width='"+data[i].width+"px' height='"+data[i].height+"px' border-radius:>")
}

}

}
})}

   else
   {
        $.ajax({
        url: '/blog',
        type: 'GET',
          success: function (data) {
        // console.log(window.location);
        // console.log(data);
        //window.location.hash = '';
         //data = JSON.parse(data);
          $("#crd").empty();
     //  $('#crd').append("<div class='card-deck' id='dec' style='width:100%;'></div>")
          var url = $(location).attr('href');
           var parts = url.split("/");
        var hard = parts[parts.length - 1]
        //console.log(hard);
        for (var i = 0; i < data.length; i++) { // data=JSON.stringify(data);
         if (data[i].id == hard) {
         $("#crd").append("<div class='col-4' style='width:100%;margin-bottom:1%;'><div class='card' style='width: 100%;'><div style='text-align:center;background-color:#28a745;'> " + data[i].category + "</div> <img src=" + data[i].url + " class='card-img-top' alt='...' width='" + 400 + "px' height='" + 400 + "px'><div class='card-body' style='height:100%;width:100%;' style='font-size:2vw;'><h5 class='card-title' style='font-size:2vw;'>" + data[i].name + "</h5></div></div></div>")
         // $('#crd').append("<img src="+data[i].url+" class='card-img-top' alt='...' width='"+data[i].width+"px' height='"+data[i].height+"px' border-radius:>")
     }
     
     }
     
     }
     })







   }




}) 
