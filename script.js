var id;
$(document).ready(function () {
  $(".flex_box").hover(function () {
    id = $(this).attr("id");
    $("#" + id + "_a").toggle();
    $("#" + id + "_if").toggle();
  });
})