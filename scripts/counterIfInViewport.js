// inViewport jQuery plugin
// http://stackoverflow.com/a/26831113/383904
$(function($, win) {
  $.fn.inViewport = function(cb) {
    return this.each(function(i,el){
      function visPx(){
        var H = $(this).height(),
            r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
        return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
      } visPx();
      $(win).on("resize scroll", visPx);
    });
  };
}(jQuery, window));


jQuery(function($) { // DOM ready and $ in scope

  $(".fig-number").inViewport(function(px) { // Make use of the `px` argument!!!
    // if element entered V.port ( px>0 ) and
    // if prop initNumAnim flag is not yet set
    //  = Animate numbers
    if(px>0 && !this.initNumAnim) {
      this.initNumAnim = true; // Set flag to true to prevent re-running the same animation
      $(this).prop('Counter',0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    }
  });
});
