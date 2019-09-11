var flag=0
if($('#logout').text()=='Logout'){

$("#upvote").on('click',function(){
    $(this).toggleClass('clicked');
  if(flag==0){  
$.ajax({
    url:"/post",
    type:"PUT",
    
    data:{
        id:"5d736b39f74b19463673c118",
        upvote: 1,
        downvote: 0
    },
    success:function(data){
        alert("upvote");
          flag=1;
    }

})
}
else if(flag==1) {
    $.ajax({
        url:"/post",
        type:"PUT",
        data:{
            id:"5d736b39f74b19463673c118",
            upvote: 0,
            downvote: 1
        },
        success:function(data){
            alert("downvote");
            flag=0;
           
        }
    
    })

}


})
// this for comment
$("#comment").on('click',function(){
    $.ajax({
        url:"/post",
        type:"PUT",
        data:{
            id:"5d733521e45be62406e1cbfa",  
            username: $('#username').val(),
            comment:$('#newcomment').val()
        },
        success:function(data){
            alert("comment");
            $('#sign').append("Username:"+$('#username').val()+ " "+" Comment:"+$('#newcomment').val()+"<br><br>");
            $('#username').val('');
            $('#newcomment').val('');
        }
    })

})

}
else{
    if($('#logout').text()=='Login'){ 
        
    $("#upvote").on('click',function(){
  
    alert("not login")

    
    })
}
    // this for comment
    $("#comment").on('click',function(){
        $('#username').val('');
        $('#newcomment').val('');
        alert("You are not login")
    
    })
}


