$(document).ready(function() {



   $(".image-1").on("click", function() {
      $(".overlay-1").show();
      $(".gallery").hide();
   });

   $(".image-2").on("click", function() {
      $(".overlay-2").show();
      $(".gallery").hide();
   });

   $(".image-3").on("click", function() {
      $(".overlay-3").show();
      $(".gallery").hide();
   });

   $(".image-4").on("click", function() {
      $(".overlay-4").show();
      $(".gallery").hide();
   });

   $(".image-5").on("click", function() {
      $(".overlay-5").show();
      $(".gallery").hide();
   });

   $(".image-6").on("click", function() {
      $(".overlay-6").show();
      $(".gallery").hide();
   });


   // CLOSE THE OVERLAY

   $(".large-overlay").on("click", function() {
      $(this).hide();
      $(".close").hide();
      $(".gallery").show();
   });

});

// OTHER CODE SUGGESTED BY SOMEONE ELSE - CAN'T QUITE GET MY HEAD AROUND IT

// $(document).ready(function() {
//   function openOverlay() {
//     const imageNumber = $(this).children('p').attr('class').slice(-1);
//     const overlayClass = '.overlay-' + imageNumber;
//     $(overlayClass).show();
//     $('.close').show();
//   }

//   $(".img-overlay").on("click", openOverlay);