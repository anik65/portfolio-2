
//  sticky nav
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 100) {
    $("nav").addClass("fixed-top");
  } else {
    $("nav").removeClass("fixed-top");
  }
});
$('body').scrollspy({ target: ".navbar", offset: 50 });
$('.carousel').carousel({
  interval: 3000
});


$('.slider_area').owlCarousel({
  loop: true,
  items: 1,
  margin: 0,
  nav: false,
  smartSpeed: 900,
  autoplay: true,
});

$('.new_product_slider').owlCarousel({
  loop: true,
  items: 1,
  margin: 0,
  nav: false,
  smartSpeed: 800,
  autoplay: true,
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});


$("#slider-range").slider({
  range: true,
  min: 0,
  max: 1500,
  values: [0, 300],
  slide: function (event, ui) {
    $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
  }
});
$("#amount").val("$" + $("#slider-range").slider("values", 0) +
  " - $" + $("#slider-range").slider("values", 1));

/*===============================*/

 $(window).on("load",function(){
  $(".main_loader").fadeOut(1000);
 });