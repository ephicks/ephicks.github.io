function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);
    

function scrollNav() {
    $('#navigation a').click(function(){
      $(".active").removeClass("active");     
      $(this).addClass("active");
      
      $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 160
      }, 300);
      return false;
    });
  }
  scrollNav();

  
  var amountScrolled = 200;
  var amountScrolledNav = 25;
  
  $(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
      $('button.back-to-top').addClass('show');
    } else {
      $('button.back-to-top').removeClass('show');
    }
  });
  
  $('button.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  