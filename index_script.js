// jQuery
var count = 0;
var windows = "";
var leftt = 0;
var topp = 0;
var id = -1;

sessionStorage.setItem("maze_time_seconds", 0);
sessionStorage.setItem("maze_time_minutes", 0);
sessionStorage.setItem("amusement_time_seconds", 0);
sessionStorage.setItem("amusement_time_minutes", 0);

$(document).ready(function () {
  /*******************/
  /**** main page ****/
  /*******************/

  // enter button click events
  $("#enter_button").click(function () {
    // make windows when button is first clicked
    if (count == 0) {
      for (let i = 0; i < 10; i++) {
        leftt = Math.floor(Math.random() * $(window).width() * 0.8);
        topp = Math.floor(Math.random() * $(window).height() * 0.6);
        windows +=
          "<div class='window regular' id='window_" +
          i +
          "' style='top: " +
          topp +
          "px; left: " +
          leftt +
          "px; position: absolute; display: block'><p>Can you escape?</p></div>";
      }
      document.getElementById("windows_space").innerHTML = windows;
    } else {
      window.location.href = "/maze.html";
    }
    count++;
  });

  // windows function
  $("#windows_space").on("click", ".window", function () {
    // original ```$("#.window").click(function () {``` wouldn't work because the element is added dynamically after the code is initially executed
    // so need to attach the click function to a parent element that is for sure loaded when code was initially executed, like document
    id = $(this).attr("id");
    $("#" + id).css("display", "none");
  });
});
