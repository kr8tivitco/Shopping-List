$(document).ready(function() {

  $('#addList').click(function(){
    $('.currentList').append($('<li>', {
         text: $('#listItem').val()
    }));

    });

});



