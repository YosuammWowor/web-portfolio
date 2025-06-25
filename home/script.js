$("document").ready(function () {
  // about section
  $("#about").css({ opacity: 0 });
  $("#about").on("mouseenter", function () {
    $("#about").animate({ opacity: 1 });
  });
  $("#about").on("mouseleave", function () {
    $("#about").animate({ opacity: 0 });
  });
});
