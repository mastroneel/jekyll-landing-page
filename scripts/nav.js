// // **********************
// // Highlight current link
// // **********************
// //
// function clickSingleA(a) {
//     items = document.querySelectorAll('.single.active');
//
//     if(items.length) {
//         items[0].className = 'single';
//     }
//
//     a.className = 'single active';
// }

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
            $('.nav-desktop ul li a').hover(function(){
                $(this).css('color', '#37ad9f');
                }, function(){
                $(this).css('color', '#262626');
            });
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
            $('.nav-desktop ul li a').hover(function(){
                $(this).css('color', '#37ad9f');
                }, function(){
                $(this).css('color', '#fff');
            });
        }
    }
});


$(document).ready(function() {
$(".nav-desktop ul li a.single").click(function ( e ) {
e.preventDefault();
$("#nav li a.active").removeClass("active"); //Remove any "active" class
$(this).addClass("active"); //Add "active" class to selected tab

// $(activeTab).show(); //Fade in the active content
});
});
