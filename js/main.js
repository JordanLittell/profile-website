$(window).resize(function(){
	if ($(window).width()>=845){
		$("#mobile-menu").hide();
	}
})


$("#mobile-menu-img").click(function(event){
	event.stopPropagation();
	$("#mobile-menu").slideDown("slow");
});
$('body').click(function(event){
	event.stopPropagation();
	$("#mobile-menu").slideUp("slow");
});
