(function($) {
  "use strict"; // Start of use strict

  
  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  
  // Activate scrollspy to add active class to navbar items on scroll
  //$('body').scrollspy({
  //  target: '#mainNav',
  //  offset: 80
  //});


  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
  } else {
      $("#mainNav").removeClass("navbar-shrink");
      }
  };

  $(window).scroll(navbarCollapse);

  // Collapse now if page is not at top
  // Collapse the navbar when page is scrolled
  
  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict
