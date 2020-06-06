$(document).ready(function() {
  $('.nav-button').click(function() {
    $('.nav-button').toggleClass('change');
  });

  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if(position >= 800) {
      $('.nav-menu').addClass('custom-navbar');
      $('.nav-link').addClass('text-dark');
      $(".logoimg").attr("src","images/logo-black.png");
      $('.line1').addClass('bg-dark');
      $('.line2').addClass('bg-dark');
      $('.line3').addClass('bg-dark');




    } else {
      $('.nav-menu').removeClass('custom-navbar');
      $('.nav-link').removeClass('text-dark');
      $(".logoimg").attr("src","images/logo-white.png");
      $('.line1').removeClass('bg-dark');
      $('.line2').removeClass('bg-dark');
      $('.line3').removeClass('bg-dark');
      $('.line1').addClass('bg-light');
      $('.line2').addClass('bg-light');
      $('.line3').addClass('bg-light');


    }
  });

  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if(position >= 650) {
      $('.camera-img').addClass('fromLeft');
      $('.mission-text').addClass('fromRight');
    } else {
      $('.camera-img').removeClass('fromLeft');
      $('.mission-text').removeClass('fromRight');
    }
  });

  $('.gallery-list-item').click(function() {
    let value = $(this).attr('data-filter');
    if(value === 'all') {
      $('.filter').show(300);
    } else {
      $('.filter').not('.' + value).hide(300);
      $('.filter').filter('.' + value).show(300);
    }
  });

  $('.gallery-list-item').click(function() {
    $(this).addClass('active-item').siblings().removeClass('active-item');
  });

  // $(window).scroll(function() {
  //   let position = $(this).scrollTop();
  //   this.console.log(position)
  //   if(position >= 300) {
  //     //Animation for the About-us Title
  //     $('.anim1').addClass('fadeIn');
      
  //   } else {
  //     $('.anim1').removeClass('fadeIn');
  //   }
  //     //Animation for the About-us pictures
  //   if(position >= 640) {
  //     $('.anim2').addClass('bounceIn');
  //   } else {
  //     $('.anim2').removeClass('bounceIn');
  //   }

    
  // });
});
$.fn.visible = function(partial) {
    
  var $t            = $(this),
      $w            = $(window),
      viewTop       = $w.scrollTop(),
      viewBottom    = viewTop + $w.height(),
      _top          = $t.offset().top,
      _bottom       = _top + $t.height(),
      compareTop    = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

};

(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).scroll(function(event) {
  
  $("p").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("animated"); 
      el.addClass("fadeIn"); 
    } else {
      el.removeClass("animated");
      el.removeClass("fadeIn");
      console.log("SRY")
    }
  });

  $(".popup").each(function(i, el) {
    console.log("LOLIDIOT4")
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("animated bounceIn"); 
      console.log("LOLIDIOT2")
    } else {
      el.removeClass("animated");
      el.removeClass("bounceIn");
      console.log("SRY2")
  
    }
  });

  $(".zoomanim").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("animated zoomIn"); 
    } else {
      el.removeClass("animated zoomIn");
      console.log("SRY2")
  
    }
  });
  
});
$(document).ready(function(){
  $('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});

$('.owl-carousel').owlCarousel({
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  items:1,
  margin:30,
  stagePadding:30,
  smartSpeed:450
});
$('.parallax-window').parallax({imageSrc: 'images/hi.png'});
























