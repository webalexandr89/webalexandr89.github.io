$(function(){
	$('.slider').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2500,
		  fade: true,
		  nextArrow: '<button button type="button" class="slick-arrow slick-next"><img src="images/arrow-next.svg" alt="next arrow"></button>',
		  prevArrow: '<button button type="button" class="slick-arrow slick-prev"><img src="images/arrow-prev.svg" alt="prev arrow"></button>',  
		  infinite: false,
		  responsive: [
		  {
		  	breakpoint: 441,
		  	settings: {
		  		arrows: false		
		  	}
		  }
		]
	});
});

$(document).ready(function() {
   var margin = 100; // переменная для контроля докрутки
   $("a").click(function() { // тут пишите условия, для всех ссылок или для конкретных
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top+margin+ "px" // .top+margin - ставьте минус, если хотите увеличить отступ
      }, {
         duration: 2000, // тут можно контролировать скорость
         easing: "swing"
      });
      return false;
   });
});


