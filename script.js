$( document ).ready(function() {
  $('#homeBar').show();
  $('#pricesBar').hide();
  $('#contactBar').hide();
  $('#galleryBar').hide();

  $('#about').css('font-size','5vh');
  $('#prices').css('font-size','4vh');
  $('#contact').css('font-size','4vh');
  $('#gallery').css('font-size','4vh');
});

$('#about').click(function(){
  $('#aboutBar').show();
  $('#pricesBar').hide();
  $('#contactBar').hide();
  $('#galleryBar').hide();

  $('#about').css('font-size','5vh');
  $('#prices').css('font-size','4vh');
  $('#contact').css('font-size','4vh');
  $('#gallery').css('font-size','4vh');
})

$('#prices').click(function(){
  $('#aboutBar').hide();
  $('#pricesBar').show();
  $('#contactBar').hide();
  $('#galleryBar').hide();

  $('#about').css('font-size','4vh');
  $('#prices').css('font-size','5vh');
  $('#contact').css('font-size','4vh');
  $('#gallery').css('font-size','4vh');
})

$('#contact').click(function(){
  $('#aboutBar').hide();
  $('#pricesBar').hide();
  $('#contactBar').show();
  $('#galleryBar').hide();

  $('#about').css('font-size','4vh');
  $('#prices').css('font-size','4vh');
  $('#contact').css('font-size','5vh');
  $('#gallery').css('font-size','4vh');
})

$('#gallery').click(function(){
  $('#aboutBar').hide();
  $('#pricesBar').hide();
  $('#contactBar').hide();
  $('#galleryBar').show();

  $('#about').css('font-size','4vh');
  $('#prices').css('font-size','4vh');
  $('#contact').css('font-size','4vh');
  $('#gallery').css('font-size','5vh');
})


//Price offer modal

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})


//Slideshow automatic scroll

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#slideshow');
}, 3000);



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}