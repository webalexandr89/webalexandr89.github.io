$(document).ready(function() {
   var margin = 100; // переменная для контроля докрутки
   $("a").click(function() { // тут пишите условия, для всех ссылок или для конкретных
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top+margin+ "px" // .top+margin - ставьте минус, если хотите увеличить отступ
      }, {
         duration: 2500, // тут можно контролировать скорость
         easing: "swing"
      });
      return false;
   });

   $('.menu-icon-wrapper').on('click', function(){
   $('.menu__list').slideToggle();
  });
});

document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
}

