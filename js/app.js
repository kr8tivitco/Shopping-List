$(document).ready(function() {
	
	//var item = $('#listItem').val();
    var itemNum = 0;
    var chkBoxNum = 0;
    var delBtnNum = 0;


	$('#addList').click(function(){
    
      var item = $('#listItem').val();
      //var itemNum = 0;
      
      //$('.currentList').append($('<li>', entry));


   	 //alert("#" + itemNum);
         $('.currentList').attr("id", "itemNum" + itemNum++).append(item + '<br />' + '<br />');
         alert("#" + itemNum + " Item Added: " + item);
         //$('.currentList').text(entry);

     
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
