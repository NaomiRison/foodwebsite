
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

 /*

scroll on buttons
need classes for buttons

*/
$(".js-scroll-to-plans").on("click",function(){

	// animated scroll select html and body
	//then use animate emthod
	//select section you want to go to which is the plans section
	//have to make another class for button and for section
	$("html,body").animate({scrollTop:$(".plans").offset().top},1000);
	// so in summary we select class js-scroll-to-plans
	//when we click on it
	// we have animation which scrolls to top of js-section-plans
	// in 1 second
	});

$(".js-scroll-to-food-delivery").on("click",function(){

	
	$("html,body").animate({scrollTop:$(".js-features").offset().top},1000);
	
	});


// code from https://css-tricks.com/snippets/jquery/smooth-scrolling/
// it select link element with # symbol
// if elements exists scroll to it

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});