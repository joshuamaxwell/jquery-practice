//This main.js is where I'll need to bang
//out 30 examples of jQuery usage

$(document).ready( function () {
  
  console.log('the document is ready and the script ran');
  var windowHeight = $(window).height();
  $('.hero').css('height', windowHeight);


});