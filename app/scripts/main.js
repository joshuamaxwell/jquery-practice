//This main.js is where I'll need to bang
//out 30 examples of jQuery usage

$(document).ready( function () {
  
  console.log('the document is ready and the script ran');
//I don't want this anymore....
  // var windowHeight = $(window).height();
  // $('.hero').css('height', windowHeight-20);

  var numBoxes = $('.hero .container').children().length;
  console.log(numBoxes);



//next element sibling could do this?
  // var x = 0;
  // while (x < numBoxes - 1) {
  //     console.log('in the numbering loop of div number', x = x+1)
  //     console.log(x);
  //     $('.hero .container:nth-child(x)').nth-child(1).firstChild.firstChild.text(x+1);
  //     x = x + 1 ;
  // }
//I have to give this up now...hours happen quickly


});