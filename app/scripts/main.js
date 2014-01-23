//This main.js is where I'll need to bang
//out 30 examples of jQuery usage

$(document).ready( function () {
  
  console.log('the document is ready and the script ran');
//I don't want this anymore....
  // var windowHeight = $(window).height();
  // $('.hero').css('height', windowHeight-20);

//Here's example number 1
  $('.color-changer').click ( function () {
      $(this).css('background', 'red');
  });

//example number 2


  // var numBoxes = $('.hero .container').children().length;
  // console.log(numBoxes);
//next element sibling could do this?
  // var x = 0;
  // while (x < numBoxes - 1) {
  //     console.log('in the numbering loop of div number', x = x+1)
  //     console.log(x);
  //     $('.hero .container:nth-child(x)').nth-child(1).firstChild.firstChild.text(x+1);
  //     x = x + 1 ;
  // }
//I have to give this up now...hours happen quickly


//I ripped this scrolling magic chunk from stack overflow:
// http://stackoverflow.com/questions/8579643/simple-jquery-scroll-to-anchor-up-or-down-the-page
//ACTUALLY ... i had to debug this so i'm going to claim it now

$(".link-div > a").click(function(event){

    //prevent the default action for the click event
    event.preventDefault();

    //get the full url - like mysitecom/index.htm#home
    var full_url = this.href;

    //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
    var parts = full_url.split("#");
    var trgt = parts[1];

    //get the top offset of the target anchor
    var target_offset = $("#"+trgt).offset();
    var target_top = target_offset.top;

    //goto that anchor by setting the body scroll top to anchor top
    $('html, body').animate({scrollTop: target_top }, 600);
});



});