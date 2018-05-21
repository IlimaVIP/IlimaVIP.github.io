(function($) { // Begin jQuery
    $(function() { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
          $('#skills').hover(function(event){
          event.preventDefault();
          $(".bar").each(function() {
      
      var $bar = $(this),
          $pct = $bar.find(".pct"),
          data = $bar.data("bar");
      
      setTimeout(function() {
        
        $bar
          .css("background-color", data.color)
          .animate({
            "width": $pct.html()
        }, data.speed || 2000, function() {
          
          $pct.css({
            "color": data.color,
            "opacity": 1
          });
          
        });
        
      }, data.delay || 0);
      
    });
      });
    }); // end DOM ready
      
  })(jQuery); // end jQuery
    
  
  