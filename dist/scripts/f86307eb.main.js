$(document).ready(function(){console.log("the document is ready and the script ran"),$("#example1 .color-changer").click(function(){$(this).css("background","red")}),$("#example2 div.button").click(function(){var a=$("#example2 .username").val();$("#example2 .result").text("Are you excited yet, "+a+"? Because I am! Click 'submit' again to make this text disappear"),$("#example2 .result").toggleClass("reveal")}),$("#example2 .username").blur(function(){var a=$("#example2 .username").val();$("#example2 .result").text("Are you excited yet, "+a+"? Because I am!"),$("#example2 .result").toggleClass("reveal")}),$("#example3 .ball").click(function(){$(this).toggleClass("dropped")}),$("#example4 .gun").click(function(){console.log("fire zee weapon!"),$("#example4 .bullet").addClass("fired"),$("#example4 .example").prepend('<div class="bullet">div</div>'),$("#example4 .gun").toggleClass("fired")}),$("#example5 .button").click(function(){$("#example5 .example").append('<div class="ball"></div>');var a=$("#example5 input").val();console.log(a),$("#example5 .ball").last().css("margin",5),$("#example5 .ball").last().animate({width:a+"px",height:a+"px"},100),$("#example5 input").val("")}),$("#example6 .anjelica .button").click(function(){var a=$("#example6 .anjelica .userColor").val();$("#example6 .color-changer").css("background",a),$("#example6 .anjelica .userColor").val("")}),$(window).scroll(function(){$(window).scrollTop()+.25*$(window).height()<$("#example7").offset().top||$(window).scrollTop()+.25*$(window).height()>$("#example7").offset().top+300?$("#example7 .ball").removeClass("fixed"):($("#example7 .ball").addClass("fixed"),$("#example7 .ball").html($(window).scrollTop()))}),$("#example8 .color-changer").mouseleave(function(){console.log("the mouse left"),$("#example8 .tool-tip").addClass("hidden")}),$("#example8 .color-changer").mouseenter(function(){$("#example8 .tool-tip").removeClass("hidden")}),$("#example9 .color-changer").mouseenter(function(){$(this).addClass("color")}),$("#example9 .color-changer").mouseleave(function(){$(this).removeClass("color")}),$("#example10 .anjelica .button").click(function(){for(var a=$("#example10 .anjelica input").val(),b=a+" ",c=0;900>c;)b=b+a+" ",c++;$("#example10 .text-overlay").text(b),$("#example10 .explanation").animate({opacity:0},500),$("#example10 .anjelica").animate({opacity:.5},500),$("#example10 .text-overlay").addClass("translate")}),$("a").click(function(a){a.preventDefault();var b=this.href,c=b.split("#"),d=c[1],e=$("#"+d).offset(),f=e.top-50;$("html, body").animate({scrollTop:f},600)})});var altima={name:"altima",locked:!1,trunkContents:["umbrella","jumperCables","flashlight"],hitAtree:function(a,b){a.haveKeys=!1,b.hitByCar=!0,b.height=b.height-50,this.trunkContents.pop(),a.treesIveHit.push(b.type),console.log("oh noes! "+a.name+" just hit a "+b.type+" tree."),b.speak()},speak:function(){console.log("Hi, my name is",this.name,"and I am"),console.log(this.locked?"locked":"not locked")}},joshua={name:"joshua",haveKeys:!0,treesIveHit:[],hitAtree:function(a,b){this.haveKeys=!1,b.hitByCar=!0,b.height=b.height-50,this.treesIveHit.push(b.type),console.log("oh noes! "+this.name+" just hit a "+b.type+" tree."),b.speak()},lock:function(a){this.haveKeys?(a.locked=!0,console.log(a.name+" was locked")):console.log("you don't have your keys!")},unlock:function(a){this.haveKeys?(a.locked=!1,console.log(a.name+" was unlocked")):console.log("you don't have your keys!")},goFindKeys:function(){this.haveKeys=!0,console.log("oh, here they are!")},speak:function(){console.log("Hi, my name is",this.name),console.log(this.haveKeys?"and I have my keys!":"and I need to go find my keys!")}},pineTree={type:"pine",hitByCar:!1,height:100,speak:function(){this.hitByCar&&console.log("I've been hit!")}},oakTree={type:"oak",hitByCar:!1,height:80,speak:function(){this.hitByCar&&console.log("I've been hit!")}};