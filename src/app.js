/* src/app.js */

// Styles
import './scss/main.scss';
// import './assets/scripts/demo';

$(document).ready(() => {

  "use strict";

  $(".menu").click(function(){
    $("#nav").toggleClass("open");
  });

  const $navbar = $(".nav"),
    y_pos = $navbar.offset().top,
    height = $navbar.height();

  //scroll top 0 sticky
  $(document).scroll(function() {
    let scrollTop = $(this).scrollTop();
    if (scrollTop > 0) {
      $navbar.addClass("sticky");
    } else {
      $navbar.removeClass("sticky");
    }
  });

  console.log('Ready!');

  require('./assets/scripts/demo');
});
