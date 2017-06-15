// *******************
// Mobile nav dropdown
// *******************

(function($) {
  $(function() {
    $('#nav-toggle').click(function() {
      $('.nav-mobile-list').slideToggle();
    });
    $('#nav-toggle').click(function() {
      this.classList.toggle('active');
    });
  });
})(jQuery);


// ************************
// Shrink nav and change
// content/colors on scroll
// ************************

$(function(){
    $('.nav-desktop').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('.nav-desktop').data('size') == 'big')
        {
            $('.nav-desktop').data('size','small');
            $('.nav-desktop').stop().animate({
                height: '55px',
                lineHeight: '35px'
            },100);
            $('.nav-list').css({
              lineHeight: '55px'
            });
            $('.logo a').css({
              color: '#262626'
            });
            $('.logo a').stop().animate({
              fontSize: '30px'
            });
            $('.nav-desktop').css('background-color', 'rgba(255, 255, 255, 1)');
            $('.nav-desktop ul li a').css('color', '#262626');
        }
    }
    else
    {
        if($('.nav-desktop').data('size') == 'small')
        {
            $('.nav-desktop').data('size','big');
            $('.nav-desktop').stop().animate({
                height: '85px',
                lineHeight: '85px'
            }, 100);
            $('.nav-desktop ul').css({
              lineHeight: '85px'
            }, 100);
            $('.logo a').css({
              color: '#fff',
            }, 100);
            $('.logo a').stop().animate({
              fontSize: '50px'
            });
            $('.nav-desktop').css({backgroundColor: 'rgba(0, 0, 0, 0.2)'}, 100);
            $('.nav-desktop ul li a').css({color: '#fff'}, 100);
        }
    }
});
