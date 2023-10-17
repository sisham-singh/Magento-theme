// require(['jquery', 'jquery/ui'], function ($) {
//   $('.multiple-items').slick({
//     infinite: true,
//     dots: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   });
// });





require([
    "jquery"
    ], function($){
  $(document).ready(function(){
    var num = $(".header").offset().top; 
    $(window).bind('scroll', function() { 
      if ($(window).scrollTop() > num) {  
        $('.header').addClass('fixed');  
      } 
      else {  
       $('.header').removeClass('fixed');    
      } 
    });
  });
    });