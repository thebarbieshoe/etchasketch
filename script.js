$(document).ready(function(){
// fill page with a butt ton of squares
	for (i=0; i<255; i++) {
$(".grid").append('<div class="square">');
};
});

//adds appropriate hover function
$(document).ready(function(){
$(".square").hover(function(){
     $(this).addClass("squared");
     }, function(){
 }); 
});

//clears board
$(document).ready(function(){
$("button:first").on("click",function() {
  $('div').removeClass('squared');
  $('div').removeClass('squared64');
  //need to remove the multi colored!
  // make an if statement to keep 
});
  });

//smaller buttons
$(document).ready(function(){
$("button:eq(1)").on("click",function() {
   $('.square').remove();
   $('.square64').remove();
for (i=0; i<4096; i++) {
$(".grid").append('<div class="square64">');
};
    $(".square64").hover(function(){
     $(this).addClass("squared64");
 }); 
  });
});

//creates "larger" original buttons
$(document).ready(function(){
$("button:eq(2)").on("click",function() {
      $('.square64').remove();
    $('.square').remove();
for (i=0; i<256; i++) {
$(".grid").append('<div class="square">');
};
    $(".square").hover(function(){
     $(this).addClass("squared");
 }); 
  });
});

// important random stuff
var safeColors = ['00','33','66','99','cc','ff'];
var rand = function() {
    return Math.floor(Math.random()*6);
};
var randomColor = function() {
    var r = safeColors[rand()];
    var g = safeColors[rand()];
    var b = safeColors[rand()];
    return "#"+r+g+b;
};

//Randomizes

//changes large buttons
$(document).ready(function(){
$("button:last").on("click",function() {
   $('.square').hover(function(){
      $(this).css('background',randomColor());
    });
    });
});

//changes smaller buttons to random on hover
$(document).ready(function(){
$("button:last").on("click",function() {
   $('.square').hover(function(){
      $(this).css('background',randomColor());
    });
   $('.square64').hover(function(){
      $(this).css('background',randomColor());
    });
});
});