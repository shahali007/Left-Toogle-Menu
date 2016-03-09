$(document).ready(function () {

    // for toogle classes
	var toggleMenu = function() {
		$('header').toggleClass('toggle');
		$('.content').toggleClass('push');
		$('.wraper').toggleClass('toggled');
		$('.button-lines').toggleClass('button-cross');
	};

	//Nav
	$('.button-lines').click(function() {
		toggleMenu();
	});
     
});

