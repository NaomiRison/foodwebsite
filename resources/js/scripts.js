
	// $("h1").on("click", function(){
	// 	$(this).css("background-color","#ff0000");
	// });
/*


*/


 $(".js-features").waypoint(function(direction){
 	//  notice how file has waypoints
 	//and name of method is waypoint
 	/*
        argument diecton determines if user scrolls
        up or down. decsiion based on parameter, direction

 	*/
 	if(direction=="down"){
    // sticky nav appears
    $("nav").addClass("sticky");
 	}else{
 	  // user scrolls up remove class sticky
 	  $("nav").removeClass("sticky");

 	}
 });