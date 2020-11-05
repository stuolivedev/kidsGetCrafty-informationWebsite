$( document ).ready(function() {
  $('#homeBar').show();
  $('#pricesBar').hide();
  $('#contactBar').hide();
  $('#galleryBar').hide();


});

$('#home').click(function(){
  $('#homeBar').show();
  $('#pricesBar').hide();
  $('#contactBar').hide();
  $('#galleryBar').hide();

})

$('#prices').click(function(){
  $('#homeBar').hide();
  $('#pricesBar').show();
  $('#contactBar').hide();
  $('#galleryBar').hide();

})

$('#contact').click(function(){
  $('#homeBar').hide();
  $('#pricesBar').hide();
  $('#contactBar').show();
  $('#galleryBar').hide();

})

$('#gallery').click(function(){
  $('#homeBar').hide();
  $('#pricesBar').hide();
  $('#contactBar').hide();
  $('#galleryBar').show();
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
