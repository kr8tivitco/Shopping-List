$(document).ready(function() {

  $('h6').click(function() {
    $('.directions-contain').animate({width: 'toggle'});
    
  });



  //var item = $('#listItem').val();
    var itemNum = 0;
    
  $('#addList').click(function(e){
        e.preventDefault();
    
      

      var listItem = $('#listItem').val();

        if (itemNum ==10) {
            alert('You have reached the list limit');
        }
          
          /*else if ($('#listItem').val() == " ") {
            alert('Please Input List Item');
          
          }*/
          
          else {
            itemNum++;
      // $('.currentList').append('<input type="checkbox" name="chkBox" >' + listItem + '<input type="submit" name="delBtn" >');  // WORKS ADDS AS TEXT
           // $("#shopList ul").append('<li>' + '<input type="checkbox" name="chkBox" id="chkBox" >' +listItem+ '<input type="submit" id="del" name="delBtn" value="X" >' + '</li>'); //WORKS ADDS AS LI w/ checkbox & delete button
              $("#shopList ul").append('<li class="appendLiItem">' + '<input type="checkbox" name="chkBox" id="chkBox" >' +listItem+ '</li>');


            $('#listItem').val(" ");
          }        
  });
            
            //////////////CAPABILITY YOU WANT TO ADD//////////////////////////
            //1. IF ITEM CHECK OUTLINE LI CHANGES FROM WHITE TO ANOTHER COLOR    100% COMPLETE
            //2. GET REQUIRED ATTR TO WORK
            //3. ADD HOW MANY LIST ITEMS
            //4. ADD DIRECTIONS THAT SLIDE IN                                     100% COMPLETE


            //On Delete remove LI entry Kriston
      /*$("#shopList ul").on('click','input[type=submit]' , function(el){
            
               $(this).parent().remove();
               
               itemNum--;
      });*/

    //removes list items
    
    /*$('#shopList ul').on('click', '.delete', function(e){

      e.preventDefault(); 

        $(this).parent().remove();

                itemNum--;
      }); */

 
    //crosses off list items Kriston
    $("#shopList ul").on('click','input[type=checkbox]' , function(){
            
      var itemCheckED = $(this).parent();
                
          if ($(this).is(':checked') ) {
                $(itemCheckED).css('textDecoration','line-through');
                $(itemCheckED).css('border-top', '2px solid #4A96AD');
                $(itemCheckED).css('border-bottom', '2px solid #4A96AD');
                $(itemCheckED).css('border-left', '4px solid #4A96AD');
                $(itemCheckED).css('border-right  ', '4px solid #4A96AD ');  

          }
          else {
                $(itemCheckED).css('textDecoration','none');
                $(itemCheckED).css('border-top', '2px solid white');
                $(itemCheckED).css('border-bottom', '2px solid white');
                $(itemCheckED).css('border-left', '4px solid white');
                $(itemCheckED).css('border-right  ', '4px solid white');
                
          }
            
    });

        //$('.trashcan-contain').on('click', '#trashcanBtn', function(e){
            
            //var checkedItemDel = $(this).closest('#shopList').find('#chkBox:checked').parent();
            //$('##chkBox').is(':checked');
              //checkedItemDel.hide();

       // });


});

