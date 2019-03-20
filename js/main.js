$(document).ready(function(){

  $('.preloader').delay(2500).fadeOut('slow');

  /*------Show/hide burger menu list-------*/
  $('.navigation-toggle').on('click',function() {

    if($('.navigation-target').hasClass('clicked')){
      $('.navigation-target').removeClass('clicked');
      $('.dropdown-menu').slideUp();
        
    }
    else{
      $('.navigation-target').addClass('clicked');
      $('.dropdown-menu').slideDown();
    }
  });

  /*------  -------*/
  $('.navigation-toggle').on('click',function() {
    if($('.clear').hasClass('clear-plus')){
      $('.clear').removeClass('clear-plus');
    }
    else{
      $('.clear').addClass('clear-plus');
    }
  });

  /*------ Flex Text -------*/
  flexFont = function () {
    
      var divs = document.getElementsByClassName("carousel-inner-div");
      for(var i = 0; i < divs.length; i++) {
          var relFontsize = divs[i].offsetWidth*0.03;
          divs[i].style.fontSize = relFontsize+'px';
          e.preventDefault();
          divs = divs[i+1];    
      }
    };
  
    window.onload = function(event) {
        flexFont();
        
    };
    window.onresize = function(event) {
        flexFont();
    };

  
});