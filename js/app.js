$(document).ready(function() {
	
	//var item = $('#listItem').val();
    var itemNum = 0;
    var chkBoxNum = 0;
    var delBtnNum = 0;


	$('#addList').click(function(){
    
      var item = $('#listItem').val();
      var chkBox = $('<input>', { type:"checkbox"});
      var delBtn = $('<input>', { type:"button"});
      //var itemNum = 0;
      
      //$('.currentList').append($('<li>', entry));

      	$('.currentList').attr("id", "chkBoxNum" + chkBoxNum++).append(chkBox);
         //alert(" Check # " + chkBoxNum);

   	 	$('.currentList').attr("id", "itemNum" + itemNum++).append(item); // + '<br />' + '<br />');
   	 	 //$('.currentList').css('display', 'inline-block').attr("id", "itemNum" + itemNum++).append(item + '<br />' + '<br />');
         //alert("Item #: " + itemNum + " Item Added: " + item );
         
         $('.currentList').attr("id", "delBtnNum" + delBtnNum++).append(delBtn);

         $('.currentList').append('<br />');
         $('#listItem').val('');
         //$('.currentList').css('display', 'inline-block').attr("id", "delBtnNum" + delBtnNum++).append(delBtn);
        // alert(" Delete Btn # " + delBtnNum);
         
    });


});




//ORIG add list item WORKING
//$('#addList').click(function(){
//    $('.currentList').append($('<li>', {
//         text: $('#listItem').val()
//    }));
//
//    });


/////////////
//$('#addList').click(function() {
//        $('.currentList').animate({
//        'marginBottom' : "+=30px" //moves down
//        });
//    });

//add check box
//$('.currentList').append('<img src="images/empty-checkbox.png" height="20px" width="20px">').append($('<li>', {
