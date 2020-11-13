function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 1000);
    

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
  
  $(function() {  
    $('.btn-6')
      .on('mouseenter', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
      })
      .on('mouseout', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top:relY, left:relX})
      });
    $('[href=#]').click(function(){return false});
  });