// Darken hero on scroll
$(function () {
    $(window).scroll(function () {
        var currentScrollTop = $(window).scrollTop();
        $('.blackOverlay').css('opacity',currentScrollTop/$('.blackOverlay').height());
    });
});

// Change z-index of overlay when scrolled so hero buttons still work
$(document).ready(function () {
$(window).scroll(function () {
    if ($(document).scrollTop() > 200) {
        $(".blackOverlay").addClass("scrolled");
    } else {
        $(".blackOverlay").removeClass("scrolled");
    }
  });
});
