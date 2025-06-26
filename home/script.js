$("document").ready(function () {
  $(window).on("scroll resize", function () {
    $("body > section .row").each(function () {
      let viewportTop = $(window).scrollTop();
      let viewportBottom = viewportTop + $(window).height();

      let elementTop = $(this).offset().top;
      let elementBottom = elementTop + $(this).outerHeight();

      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        $(this).addClass("visible");
      } else {
        $(this).removeClass("visible");
      }
    });
  });

  $(window).trigger("scroll");
});
