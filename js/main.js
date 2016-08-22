$(document).ready(function () {
	function hex_initial_animation() {
		$(".hex-wrap,.hover-notify").velocity("transition.expandIn", { stagger: 150 });
		$(".hex-wrap").velocity("callout.pulse");
		$(".hoverblock").velocity("fadeOut", { delay: 3000, duration: 0 });
		}

	hex_initial_animation();

var hoverdetect = setInterval(function(){ hovernotify() }, 3000);
function hovernotify() {
    $(".hover-notify").velocity("callout.tada");
}
function myStopFunction() {
$(".hover-notify").velocity('stop', true).velocity("fadeOut");
    clearInterval(hoverdetect);
}
		$(".hex-init").mouseenter(function () {

			myStopFunction();

			var title_color =  $(this).parent().attr("data-color");
			var title_name = $(this).parent().attr("data-title");
			var desc_name = $(this).parent().attr("data-content");

				function hex_description() {
					$('.code-description').velocity('stop', true).velocity("transition.slideRightBigIn");
					$('.' + desc_name).siblings().removeClass('desc-active');
						setTimeout(function() {
							$('.' + desc_name).addClass('desc-active');
							$('.code-descriptopn > div, .desc-active').children().velocity('stop', true).velocity("transition.slideRightBigIn", { stagger: 300 });
							$('.code-title, .desc-active span').velocity({color: title_color}, { queue: false });
							$('.code-title').text(title_name)
							$('.imghide').hide();
						}, 0);
			    }
			    hex_description();

				$(this).parent().addClass('hexactive');
				$('.hexactive').velocity({scaleX:"1.1",scaleY:"1.1"}, { duration: 200 });

			}).mouseleave(function () {
				 $('.hexactive').velocity('stop', true).velocity('reverse').removeClass('hexactive');
			});
});

// menu
// Sticky Header
$(document).ready(function(){
  $('.header').hide();
});
$(window).scroll(function() {

    if ($(window).scrollTop() < 600) {
        $('.header').hide();
    } else {
        $('.header').show();
    }
});


/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);


jQuery(document).ready(function($){
    $('.type-it').typeIt({
        content : 'Soy Merle, desarrolladora web y relacionista pública. Creativa, perseverante y responsable. Me gusta estar en constante aprendizaje, dar soluciones creativas y trabajar en equipo. '
    });
});
