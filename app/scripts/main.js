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

  //11

  $('#example11 div.button').click( function(){
     $('#example11 .color-changer').css({background: 'green'});
  });

  $('#example12 div.button').click( function() {
    console.log('im going crazy')
    $('#example12 .color-changer').css('border-color', 'white');
  });

  $('#example13 div.button').click( function() {
    $('#example13 div.color-changer').css({borderRadius: '20px'});
  });

  $('#example14 div.button').click( function() {
    $('#example14 div.color-changer').css({width: '230px', height: '215px'});
  });

  $('#example15 div.button').click( function() {
    $('#example15 div.ball').css({visibility: 'hidden'});
  });

  $('#example16 div.button').click( function() {
    $('#example16 div.ball').css({height: '0px', width: '0px'});
  });

  $('#example17 div.button').click( function() {
  $('#example17 div.ball').toggleClass('float');
  });

  $('#example18 div.button').click( function () {
    $('#example18 div.color-changer').css('transform', 'rotateZ(360deg)');
  });

  $('#example19 div.button').click( function(){
    $('#example19 div.color-changer').text('OMG! omw....LOL....SHM NEWAYz. L8R');
  });

  $('#example20 div.button').click( function(){
    $('#example20 div.ball').css('background','red');
  });

  $('#example21 div.button').click( function (){
    $('#example21 div.color-changer').text('hi again')
  });

  $('#example22 div.button').click ( function(){
    $('#example22 div.color-changer').text(" oh i'm just doing katas now");
  });

  $('#example23 div.button').click ( function (){
    $('#example23 div.color-changer').text("I really just need to commit these shortcuts to muscle memory");
  });

  $('#example24 div.button').click ( function () {
    $('#example24 div.color-changer').text("everyone else is going to get pizza");
  }); 

  $('#example25 div.button').click (function () {
    $('#example25 div.color-changer').text("I really want to go too");
  });

  $('#example26 div.button').click (function (){
    $('#example26 div.color-changer').text("I just realized this assignment is 9 minutes past due");
  });

  $('#example27 div.button').click (function (){
    $('#example27 div.color-changer').text("This is starting to get easier");
  });

  $('#example28 div.button').click( function (){
    $('#example28 div.color-changer').text("It's still not really fun though");
  });

  $('#example29 div.button').click( function(){
    $('#example29 div.color-changer').text("making number 10 was waaaay cooler");
  });

  $('#example30 div.button').click( function() {
    $('#example30 div.color-changer').text("build add commit push!");
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