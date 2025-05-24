var id;
$(document).ready(function () {
  if (window.matchMedia("(hover: hover)").matches)
  {
    $(".flex_box").hover(function () {
      id = $(this).attr("id");
      $("#" + id + "_a").toggle();
      $("#" + id + "_if").toggle();
    });
  }
  else
  {
    $(".flex_box").click(function () {
      id = $(this).attr("id");
      $("#" + id + "_a").toggle();
      $("#" + id + "_if").toggle();
    });
  }
})