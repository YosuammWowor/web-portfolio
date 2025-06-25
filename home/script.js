$("document").ready(function () {
  // about section
  sectionBlur("#about");

  // about section
  sectionBlur("#skill");
});

function sectionBlur(id) {
  $(id).css({ opacity: 0 });
  $(id).on("mouseenter", function () {
    $(id).animate({ opacity: 1 });
  });
  $(id).on("mouseleave", function () {
    $(id).animate({ opacity: 0 });
  });
}
