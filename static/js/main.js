$(document).ready(function() {
    $('#fullpage').fullpage({
		sectionsColor:['#4acaa8', '#FFFFFF', '#8CD3C0', '#37977E', 'FFFFFF'],
		controlArrows: false,
		slidesNavigation: true,
		navigation: true,
		navigationTooltips: ['Home', 'About', 'Experience', 'Portfolio', 'Contact'],
		afterLoad (anchorLink, index){
			if (index == 1) {
				$('#fp-nav').find("span").css('background-color', '#FFFFFF');
				$(".fp-tooltip").css('color', '#FFFFFF');
			}
			if (index == 2) {
				$('#fp-nav').find("span").css('background-color', '#777');
				$(".fp-tooltip").css('color', '#777');
			}
			if (index == 3) {
				$('#fp-nav').find("span").css('background-color', '#FFFFFF');
				$(".fp-tooltip").css('color', '#FFFFFF');
			}
			if (index == 4) {
				$('#fp-nav').find("span").css('background-color', '#FFFFFF');
				$(".fp-tooltip").css('color', '#FFFFFF');
			}
			if (index == 5) {
				$('#fp-nav').find("span").css('background-color', '#777');
				$(".fp-tooltip").css('color', '#777');
			}
		},
		responsiveWidth: 992
	});
});
$(document).on('click', '.bounce', function(){
  $.fn.fullpage.moveSectionDown();
});
