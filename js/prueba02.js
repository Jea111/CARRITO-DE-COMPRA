$(".brush_about").hover(function vid() {
  $(this).children("vid_")[0].play();
  $(".text-container-about").fadeOut(1000);
});
function vid() {
  var el = $(this).children("vid_")[0];
  el.pause();
  $(".text-container-about").fadeIn(1000);
}

vid();
