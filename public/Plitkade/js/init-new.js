// Слайдер на главной
$(document).ready(function(){
  var slider = $('.catalog-top-slider-in').bxSlider({
    //mode: "fade"
    });
});
// Конец Слайдер на главной

// Карусель отзывов
$('.carus-tov-feed').bxSlider({
  minSlides: 1,
  maxSlides: 6,
  slideWidth: 270,
  slideMargin: 30,
  moveSlides: 1,
  infiniteLoop: false
});
// КОнец Карусель отзывов

// Карусель советов
$('.carus-useful').bxSlider({
  minSlides: 1,
  maxSlides: 4,
  slideWidth: 370,
  slideMargin: 30,
  moveSlides: 1,
  infiniteLoop: false
});
// КОнец Карусель советов















 