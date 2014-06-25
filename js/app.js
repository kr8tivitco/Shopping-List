$(document).ready(function() {

  //var item = $('#listItem').val();
    var itemNum = 0;
    //var chkBoxNum = 0;
    //var delBtnNum = 0;


  $('#addList').click(function(){
    
      

      var listItem = $('#listItem').val();

        if (itemNum ==3) {
            alert('You have reached the list limit');
        }
          else {
            itemNum++;
      // $('.currentList').append('<input type="checkbox" name="chkBox" >' + listItem + '<input type="submit" name="delBtn" >');  // WORKS ADDS AS TEXT
            $("#shopList ul").append('<li>' + '<input type="checkbox" name="chkBox" id="check" >' +listItem+ '<input type="submit" id="del" name="delBtn" value="X" >' + '</li>'); //WORKS ADDS AS LI
     // $("#shopList ul").append('<li>' +listItem+ '</li>');    //WORKS ADD AS LI 

          }
    });
            //On Delete remove LI entry
    $("#shopList ul").on('click','input[type=submit]' , function(el){
            
               $(this).parent().remove()
               itemNum--;
    });

    $("#shopList ul").on('click','input[type=checkbox]' , function(){
            
      var itemCheckED = $(this).parent();
                
          if ($(this).is(':checked') ) {
              $(itemCheckED).css('textDecoration','line-through');
                
            }
          else {
                $(itemCheckED).css('textDecoration','none');
                
            }
            
    });

});






        




        //var chkBox = $('<input>', { type:"checkbox"}, { id:"checkbox"} { checked:"checked"});
        //var checkEDBoxID = $(this).attr("id");
        //var itemCheckED = $(‘#’ + itemNum);

            //$("input[type='checkbox']").val();
    //function checkboxChkr() { //checks what checkbox are checked & strikes line through item
             
         // $('#checkbox .currentList').change(function checkboxChkr(){
              
            //  alert("after variable");
            //});




             //alert("Function checkboxChkr");
        
        //var checkEDBoxID = $(this).attr("id");
             //alert("Variable checkEDBoxID" + checkEDBoxID);
           // alert("after variable");
        // if ($('#checkbox').is(':checked')  {
           // alert("Checking " + checkEDBoxID);
              //itemCheckED == checkEDBoxID;  
              //alert(“itemCheckED”); 
            //$(item[itemNum == itemCheckED”]).wrap(“<strike>”);
            //});
    //};





//ORIG add list item WORKING
//$('#addList').click(function(){
//    $('.currentList').append($('<li>', {
//         text: $('#listItem').val()
//    }));
//
//    });
