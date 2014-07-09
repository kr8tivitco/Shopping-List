

$(document).ready(function() {

  $('h6').click(function() {
    $('.directions-contain').slideToggle();
  });

  //var item = $('#listItem').val();
  var itemNum = 0;
  var checkNum =0;

  $('#addList').click(function(e) {
      e.preventDefault();
      var listItem = $('#listItem').val();
    if (itemNum == 10) { alert('You have reached the list limit'); 
    }  

    else {
      itemNum++;

// blanche
      $("#shopList ul").append('<li class="appendLiItem"> <input type="checkbox" name="chkBox" id="chkBox" class="delete" >' + listItem + '</li>');

      $(".chkQty").html("Items Left: " + (itemNum-checkNum) + " of 10");
      //$('#listItem').val(" ");  // reset input field

    }
  });

  //////////////CAPABILITY YOU WANT TO ADD//////////////////////////
  //1. IF ITEM CHECK OUTLINE LI CHANGES FROM WHITE TO ANOTHER COLOR    100% COMPLETE
  //2. GET REQUIRED ATTR TO WORK
  //3. ADD HOW MANY LIST items
  //4. ADD DIRECTIONS THAT SLIDE IN                                     100% COMPLETE


// blanche
  
          $("#shopList ul").on('click','.delete' , function(e){
              $(this).parent().remove();               
  
          });


  //crosses off list items Kriston
  $("#shopList ul").on('click', 'input[type=checkbox]', function() {

    var itemCheckED = $(this).parent();

    if ($(this).is(':checked')) {
      $(itemCheckED).css('textDecoration', 'line-through');
      $(itemCheckED).css('border-top', '2px solid #4A96AD');
      $(itemCheckED).css('border-bottom', '2px solid #4A96AD');
      $(itemCheckED).css('border-left', '4px solid #4A96AD');
      $(itemCheckED).css('border-right  ', '4px solid #4A96AD ');
      checkNum++;
      $(".chkQty").html("Items Left: " + (itemNum-checkNum) + " of 10");

        

    //} //else if (($(this).is(':checked')) && ($("#shopList ul").on('click','.trashcanBtn')) {
              //$(itemCheckED).remove();   

    } else {
      $(itemCheckED).css('textDecoration', 'none');
      $(itemCheckED).css('border-top', '2px solid white');
      $(itemCheckED).css('border-bottom', '2px solid white');
      $(itemCheckED).css('border-left', '4px solid white');
      $(itemCheckED).css('border-right  ', '4px solid white');
      checkNum--;
      $(".chkQty").html("Items Left: " + (itemNum-checkNum) + " of 10");

    }

  });

/*
  $('.trashcan-contain').on('click', '#trashcanBtn', function(e){
    var checkedItemDel = $(this).closest('#shopList').find('#chkBox:checked').parent();
    $('##chkBox').is(':checked');
    checkedItemDel.hide();
  });
*/

});