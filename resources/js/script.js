$(document).ready(function() {

/* for NAV BAR */

    $('.js--section-features').waypoint(function(direction) {
        if  (direction=="down"){
            $('nav').addClass('sticky-nav');
        }else{
            $('nav').removeClass('sticky-nav');
        }
    },
    {offset:'20%'});

    /* scroll bar*/

    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000)
    })


    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},500)
    })



    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  /*------------------Animation on scroll */
  $('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animate__animated  animate__fadeInUpBig');
     }, {
      offset:'50%'
     });

  $('.js-wp-2').waypoint(function(direction) {
    $('.js-wp-2').addClass('animate__animated  animate__rotateIn');
    }, {
    offset:'30%'
    });




    /*---Mobile Nav Bar-------*/

    $('.js--mobile-icon').click(function() {
      var nav= $('.js--main-nav');
      nav.slideToggle(200);
      var name=$('.main-nav ion-icon').attr('name')
        if (name=='menu-outline'){
        $('.main-nav ion-icon').attr('name','close-outline')
      }else{
        $('.main-nav ion-icon').attr('name','menu-outline')
      }

    })


}); 