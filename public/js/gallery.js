
//show first img
function startOff() {
$('.boxframe1').removeClass('openFrame');
$('.slidebox').css('width','100px');
$('img').removeClass('fullshine');
var thewidth = $('#firstRowImages').contents('.size1:nth-child(2)').contents().width();
$('.size1:nth-child(2)').width(thewidth);
$('.size1:nth-child(2)').contents().addClass('fullshine');
$('#firstRowImages').addClass('openFrame');
};

// click an image to display
$('.gallimg').click(function switchimg(){
  var thewidth = (this).width;
$('.slidebox').css('width','100px');
$('img').removeClass('fullshine');
$('.boxframe1').removeClass('openFrame');
$(this).addClass('fullshine').parent('div').width(thewidth).parent().addClass('openFrame');

});


//next button
$('.nextFrame').click(function(){
  var thewidth = $('img.fullshine').parent('div').next('div').contents().width();
  $('img.fullshine').removeClass('fullshine').parent('div').css('width','100px').next('div').width(thewidth).contents().addClass('fullshine');
  
  if ($('.lastimg').hasClass('fullshine'))
  nextRow();
});



//previous button
$('.prevFrame').click(function(){
  var thewidth = $('img.fullshine').parent('div').prev('div').contents().width();

  $('img.fullshine').removeClass('fullshine').parent('div').css('width','100px').prev('div').width(thewidth).contents().addClass('fullshine');

  if ($('.firstimg').hasClass('fullshine'))
  prevRow();
});



function nextRow() {
$('.openFrame').removeClass('openFrame').next().addClass('openFrame');
$('.slidebox').css('width','100px');
$('.gallimg').removeClass('fullshine');
var thewidth = $('.openFrame').contents('div:nth-child(2)').contents().width();
$('.openFrame').contents('div:nth-child(2)').width(thewidth).contents().addClass('fullshine');
};

function prevRow() {
$('.openFrame').removeClass('openFrame').prev().addClass('openFrame');
$('.slidebox').css('width','100px');
$('.gallimg').removeClass('fullshine');
var thewidth = $('.openFrame').contents('div:nth-child(6)').contents().width();
$('.openFrame').contents('div:nth-child(6)').width(thewidth).contents().addClass('fullshine');
};

$('.jumpnextRow').click( function() { 
  nextRow() 
});

$('.jumpprevRow').click( function() { 
  prevRow() 
});

$(document).ready( function() { 
  startOff() 
});

$('.start').click( function() { 
  startOff() 
});
