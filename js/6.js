$(document).ready(function() {
	$('.button').click(function(event) {
		$('.test').slideDown(10000);
	});

	$('.button2').click(function(event) {
		$('.test2').slideToggle(2000);
	});

});