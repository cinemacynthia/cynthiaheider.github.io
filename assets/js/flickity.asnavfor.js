   $('.carousel-main').flickity({
      prevNextButtons: false,
      wrapAround: false,
      pageDots: false,
      autoPlay: 10000
    });

    $('.carousel-nav').flickity({
      asNavFor: '.carousel-main',
      cellAlign: 'right',
      prevNextButtons: false,
      contain: true,
      pageDots: false,
      
    });



   // Your main div is carousel-main
   var flkty = new Flickity('.carousel-main');

       // Next and previous events of the carousel-nav
       $('.carousel-nav .next').on("click", function() {
              // Changing items of the main div
              flkty.next();
          });



       $('.carousel-nav .previous').on("click", function() {
              // Changing items of the main div
              flkty.previous();
          });