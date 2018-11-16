$(document).ready(function() {
    
    /* --- Sticky navigation appearance -----------------*/
    $('.section-skills').waypoint(function(direction) {
        if(direction === 'down') {
           $('nav').addClass('sticky'); 
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '55px;'
    });
    
    
    /* ----- Scroll Buttons -------*/
    $('.js--btn-full').click( function() {
       $('html, body').animate({scrollTop: $('.section-form').offset().top}, 1000); 
    });
   
    $('.js--btn-ghost').click( function() {
        $('html, body').animate({scrollTop: $('.section-skills').offset().top}, 600);
    });
    
    
    /* ------------- Scrolling to links from navbar -------*/
        // Select all links with hashes
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
    
    /* ---- Animation on scroll ------ */
    $('.js--fadein').waypoint(function(direction) {
        $('.js--fadein').addClass('animated fadeInUp');
    }, {
        offset: '50%;'
    });
    
    
    
    /* Changing menu icon in mobile navigation and toggle the navigation by slideDown*/
    $('.js--nav-icon').click( function() {
        var nav = $('.main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if(icon.hasClass('ion-md-menu')){
            icon.addClass('ion-md-close');
            icon.removeClass('ion-md-menu');
        } else {
            icon.addClass('ion-md-menu');
            icon.removeClass('ion-md-close');
        }
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});