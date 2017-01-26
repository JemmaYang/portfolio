
// float back-top buttom
var amountScrolled = 250;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-top').fadeIn('slow');
	} else {
		$('a.back-top').fadeOut('slow');
	}
});

$('a.back-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});

