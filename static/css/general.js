
// ========= FANCYBOX and SLICK =============
// Main/Product image
$('#detail .main-img-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  arrows: true,
  fade: true,
  autoplay: false,
  autoplaySpeed: 4000,
  speed: 300,
  lazyLoad: 'ondemand',
  asNavFor: '.thumb-nav',
  prevArrow: '<div class="slick-prev"><img src="/static/icon/left.svg"></div>',
  nextArrow: '<div class="slick-next"><img src="/static/icon/circle-right.svg"></div>' //
});

// Thumbnail/alternates
$('.thumb-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  centerPadding: '0px',
  asNavFor: '.main-img-slider',
  dots: false,
  centerMode: false,
  draggable: true,
  speed:200,
  focusOnSelect: true,
  prevArrow: '<div class="slick-prev"><img src="/static/icon/left.svg"></div>',
  nextArrow: '<div class="slick-next"><img src="/static/icon/right.svg"></div>',
// SHEMA ROBOCHA
//  responsive: [
//    {
//      breakpoint: 1024,
//      settings: {
//        slidesToShow: 3,
//        slidesToScroll: 3,
//        infinite: true,
//        dots: false
//      }
//    },
//    {
//      breakpoint: 600,
//      settings: {
//        slidesToShow: 2,
//        slidesToScroll: 2
//      }
//    },
//    {
//      breakpoint: 480,
//      settings: {
//        slidesToShow: 1,
//        slidesToScroll: 1
//      }
//    }
//    // You can unslick at a given breakpoint now by adding:
//    // settings: "unslick"
//    // instead of a settings object
//  ]
});

//keeps thumbnails active when changing main image, via mouse/touch drag/swipe
$('.main-img-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //remove all active class
  $('.thumb-nav .slick-slide').removeClass('slick-current');
  //set active class for current slide
  $('.thumb-nav .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');
});
// END Fancybox and Slick


// ============ SIDE Slider Slick =============
//$('.side_slide').slick({
//  dots: true,
//  infinite: true,
//  speed: 300,
//  slidesToShow: 1,
//  adaptiveHeight: true,
//  draggable: true,
//  autoplay: true,
//  autoplaySpeed: 5000,
//  prevArrow: '<div class="slick-prev"><i class="i-prev"></i></div>',
//  nextArrow: '<div class="slick-next"><i class="i-next"></i></div>',
//});
// END side slider


