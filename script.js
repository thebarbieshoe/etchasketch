$(document).ready(function(){
	for (i=0; i<255; i++) {
$(".grid").append('<div class="square">');
};
});

$(document).ready(function(){
$(".square").hover(function(){
     $(this).addClass("squared");
     }, function(){
 }); 
});


$(document).ready(function(){
$("button").on("click",function() {
  $('div').removeClass("squared");
  var gridRow = prompt("Select how many squares for each side of your new creation");
  if (gridRow==64) {
  		$(".square").remove();
  		for (i=0; i<4096; i++) {
  		$(".grid").append('<div class="squaredsix">');
  	};
  };
});
  });


$(document).ready(function(){
$(".squaresix").mouseenter(function(){
     $(this).addClass("squaredsix");
     }, function(){
 }); 
});
