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

  function scrollBanner() {
    $(document).on('scroll', function(){
    var scrollPos = $(this).scrollTop();
      $('.parallax-fade-top').css({
        'top' : (scrollPos/2)+'px',
        'opacity' : 1-(scrollPos/700)
      });
      $('.parallax-00').css({
        'top' : (scrollPos/-3.5)+'px'
      });
      $('.parallax-01').css({
        'top' : (scrollPos/-2.8)+'px'
      });
      $('.parallax-top-shadow').css({
        'top' : (scrollPos/-2)+'px'
      });
    });    
    }
  scrollBanner();	  