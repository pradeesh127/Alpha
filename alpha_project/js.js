
$(document).ready(() => {
      
//       $(".gk-bubble").mouseenter(function(){
//     $('.gk-bubble').addClass("active");
//   });

  $( ".gk-bubble" ).mouseenter(function(e) {
    $(this).addClass("active");
      var tooltipName = $(this).attr("name");
  $(this).append("<span class='bubble-tooltip'>" + tooltipName + "</span>");
   });

  $(".gk-bubble").mouseleave(function(){
    $('.gk-bubble').removeClass("active");
    $('.bubble-tooltip').remove();
  });

});