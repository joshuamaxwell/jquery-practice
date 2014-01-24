//This main.js is where I'll need to bang
//out 30 examples of jQuery usage

$(document).ready( function () {
  
  console.log('the document is ready and the script ran');
//I don't want this anymore....
  // var windowHeight = $(window).height();
  // $('.hero').css('height', windowHeight-20);

  //Here's example number 1
  $('#example1 .color-changer').click ( function () {
    $(this).css('background', 'red');
  });


  //Here's example number 2
  $('#example2 div.button').click ( function () {
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
    $('#example5 input').val('');
  });

  //Here's example number 6
  $('#example6 .anjelica .button').click( function() {
    var userColor = $('#example6 .anjelica .userColor').val();
    $('#example6 .color-changer').css("background", userColor);
    $('#example6 .anjelica .userColor').val('');
  });

  //Here's example number 7
  $(window).scroll(function () {
    if (($(window).scrollTop() + $(window).height()*0.25 < $('#example7').offset().top)
          || ($(window).scrollTop() + $(window).height()*0.25 > $('#example7').offset().top + 300)){
      $('#example7 .ball').removeClass('fixed');
    } else {
      $('#example7 .ball').addClass('fixed');
      $('#example7 .ball').html($(window).scrollTop());
    }
  });

  //Here's example number 8
  $('#example8 .color-changer').mouseleave(function () {
    console.log('the mouse left');
    $('#example8 .tool-tip').addClass('hidden');
  });
  $('#example8 .color-changer').mouseenter(function () {
    $('#example8 .tool-tip').removeClass('hidden');
  });

  //Here's example number 9
  $('#example9 .color-changer').mouseenter(function() {
    $(this).addClass('color');
  });
  $('#example9 .color-changer').mouseleave(function() {
    $(this).removeClass('color');
  });

  //Here's example number 10
  $('#example10 .anjelica .button').click( function() {
    var favWord = $('#example10 .anjelica input').val();
    var words = favWord + " ";
    var i = 0;
    while (i < 900) {
      words = words + favWord + " ";
      i++;
    }
    // $('#example10').prepend('<div class="text-overlay"></div>')
// Why couldn't I have this click event prepend the div and then add the class without
// the transition failing to execute? I comment this prepend out and just added it to the index.html manually
    $('#example10 .text-overlay').text(words);
    $('#example10 .explanation').animate({opacity: 0}, 500);
    $('#example10 .anjelica').animate({opacity: 0.5}, 500);
    $('#example10 .text-overlay').addClass('translate');
  });











//I thought i could get jquery to number the boxes for me but i'm not
//good enough at it yet
//well today I COULD do this..but i gotta move on for now
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

$("a").click(function(event){

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