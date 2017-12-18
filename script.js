$("a").click(function(event) {
	// pour éviter la "téléportation"
    event.preventDefault();
	
    var anchor = $(this);
    var nextY = $(anchor.attr('href')).offset().top-50;

    $("html, body").stop().animate({
        scrollTop: nextY > 0 ? nextY : 0
    }, 1500, 'easeInOutExpo');
    // utilise le easing easeInOutExpo fourni par jQuery easing
    
});
