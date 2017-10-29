$(document).ready(function(){
      $('.parallax').parallax();
    });

function main() {
$('.scroll-top').click(function(){
	$('html,body').animate({scrollTop:0}, 'slow');return false;
});
}
$(document).ready(main);