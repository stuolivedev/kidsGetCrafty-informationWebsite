$( document ).ready(function() {
  $('#aboutBar').hide();
  $('#pricesBar').hide();
  $('#contactBar').show();
  $('#galleryBar').hide();
});

$('#about').click(function(){
  $('#aboutBar').show();
  $('#pricesBar').hide();
  $('#contactBar').hide();
  $('#galleryBar').hide();
})

$('#prices').click(function(){
  $('#aboutBar').hide();
  $('#pricesBar').show();
  $('#contactBar').hide();
  $('#galleryBar').hide();
})

$('#contact').click(function(){
  $('#aboutBar').hide();
  $('#pricesBar').hide();
  $('#contactBar').show();
  $('#galleryBar').hide();
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