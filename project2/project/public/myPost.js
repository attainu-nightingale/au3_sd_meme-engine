// $("#cmmnt").on('click', function () {
//     var url = $(location).attr('href');
//     var parts = url.split("/");
//     var hard = parts[parts.length - 1]
//     console.log(hard)
//     $.ajax({
//         url: "/post/" + hard,
//         type: "POST",
//          data: {
//             username: $('#username').val(),
//             comment: $('#newcomment').val()
//         }, 
//         success: function (data) {
//             console.log(data);
//             $('#sign').append("Username:" + $('#username').val() + " " + " Comment:" + $('#newcomment').val() + "<br><br>");
//             $('#username').val('');
//             $('#newcomment').val('');
//         }
//     })

// })
