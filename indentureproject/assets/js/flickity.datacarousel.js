 /* Flickity v2.1.2
https://flickity.metafizzy.co:
 */

 //Inita carousel with these characteristics at first detection of 'items' class//

 var $carousel = $('.items').flickity({
  cellAlign: 'center',
  freeScroll: true,
  prevNextButtons: false,
  pageDots: false,
  contain: true,
  wrapAround: false,
  setGallerySize: false;
});

 //Resize 'items'

$carousel.flickity('resize');//

//Selects cell after cell on click if cells are indexed w numbers//

$carousel.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
  if ( typeof cellIndex == 'number' ) {
    $carousel.flickity( 'selectCell', cellIndex );
  }
});

//Option for creating a div to hold the built-in navigational buttons so that they appear outside of the flickity instance itself//
/*/first make sure the plugin has generated the html
$(document).ready(function(){

    // select the buttons
    buttons = $('.items .flickity-button')

    // add them to a newly created div
    new_div = $('<div class="navdiv"></div>').append(buttons)

    // append the new div (my-div) to .main-carousel
    $('.items').append(new_div)
}) */

//Font Awesome icon buttons traverse content cells on click//
$('.items').on( 'click', '.button-next', function() {
  var index = $(this).index();
  $carousel.flickity( 'next', index );
});

$('.items').on( 'click', '.button-prev', function() {
  var index = $(this).index();
  $carousel.flickity( 'previous', index );
});