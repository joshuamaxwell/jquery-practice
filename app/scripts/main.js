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


  //Here's example number 2
  $('#example2 .button').click ( function () {
    var username = $('#example2 .username').val();
    $('#example2 .result').text("Are you excited yet, " + username + "? Because I am! Click 'submit' again to make this text disappear");
    $('#example2 .result').toggleClass('reveal');
  });

    //there must be a better way than copy pasting like this
  $('#example2 .username').blur ( function () {
    var username = $('#example2 .username').val();
    $('#example2 .result').text("Are you excited yet, " + username + "? Because I am!");
    $('#example2 .result').toggleClass('reveal');
  });

  //Here's example number 3
  $('#example3 .ball').click( function () {
    $(this).toggleClass('dropped');
  });

  //Here's example number 4
  $('#example4 .gun').click( function (){
    console.log('fire zee weapon!')
    $('#example4 .bullet').addClass('fired');
    $('#example4 .example').prepend('<div class="bullet">div</div>');
    $('#example4 .gun').toggleClass('fired');
  });

  //Here's example number 5
  $('#example5 .button').click( function (){
    $('#example5 .example').append('<div class="ball"></div>');
    var circleSize = $('#example5 input').val();
    console.log(circleSize);
    $('#example5 .ball').last().css('margin', 5);
    $('#example5 .ball').last().animate({width: circleSize+'px', height: circleSize+'px'}, 100 );
  });



//I thought i could get jquery to number the boxes for me but i'm not
//good enough at it yet
  // var numBoxes = $('.hero .container').children().length;
  // console.log(numBoxes);
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
    var target_top = target_offset.top - 50;

    //goto that anchor by setting the body scroll top to anchor top
    $('html, body').animate({scrollTop: target_top }, 600);
});



});