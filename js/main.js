$(function(){
  
  
  $(window).on('load', function(){
    $('.preloader').delay(500).fadeOut('slow', function(){
      $(this).attr('style', 'display: none !important')
    });
  });

  // активируем слайдер
  baguetteBox.run('.gallery');

  //Показать , скрыть кнопку вверх
  $(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
      $('.scrollToTop').fadeIn();
    }
    else {
      $('.scrollToTop').fadeOut();
    }
  });

  // Анимация прокрутки кнопкки вверх
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0}, 800);
    return false;
  });

});