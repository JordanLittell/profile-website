$(window).resize(function(){
	if ($(window).width()>=845){
		$("#mobile-menu").hide();
	}
});
$('html').css('overflow', 'hidden');


$("#mobile-menu-img").click(function(event){
	event.stopPropagation();
	$("#mobile-menu").slideDown("slow");
});
$('body').click(function(event){
	event.stopPropagation();
	$("#mobile-menu").slideUp("slow");
});

$("#welcome-button").click(function(){
	$("#welcome").fadeOut("slow");
	$('html').css('overflow', 'scroll');
})
