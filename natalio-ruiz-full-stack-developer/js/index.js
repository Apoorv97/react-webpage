(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        console.log($anchor);

        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        $anchor.trigger('mouseleave');
    });

    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $(window).scroll(function() {
      if ($(document).scrollTop() > 80) {
        $('nav').addClass('shrink');
      } else {
        $('nav').removeClass('shrink');
      }
    });

    $("#hover").hover(function(){
        $('.see-more').css('opacity', 1.0);
    },function(){
        $('.see-more').css('opacity', 0.0);
    });


    $("body").scrollspy({
        target: "#mainNav",
        offset: 70
    });
})(jQuery); // End of use strict