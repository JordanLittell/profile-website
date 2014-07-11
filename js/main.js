function scroll_to(div){
    $('html, body').animate({
        scrollTop: $(div).offset().top
    },1000);
    }

$(window).resize(function(){
	if ($(window).width()>=845){
		$("#mobile-menu").hide();
	}
});
scroll_to("#container");
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
