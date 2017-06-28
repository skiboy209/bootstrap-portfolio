
$(document).ready(function(){
   bgHeight = $(window).height();
  if(bgHeight <= 605){
    bgHeight = 605;
  }
  
  $("#page01").css({"height" : bgHeight});
  $("#page02").css({"height" : bgHeight});
  $("#page03").css({"height" : bgHeight}); 
});

$(window).resize(function(){
  bgHeight = $(window).height();
  if(bgHeight <= 605){
    bgHeight = 605;
  }
  
  $("#page01").css({"height" : bgHeight});
  $("#page02").css({"height" : bgHeight});
  $("#page03").css({"height" : bgHeight});
});

$('#frame', window.parent.document).width('500px');
$('#frame', window.parent.document).height('600px');