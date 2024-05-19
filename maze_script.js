var videos;
var videos_frames = "";
var leftt;
var topp;
var vid_count;
var idd;
var short_ids = "#maze_vid_-1";

window.addEventListener("resize", function () {});

window.addEventListener("load", function () {
  vid_count = 0;
  videos = [
    "_8iMCZIFY-Q?si=-J6ShFQbmrGf81EU",
    "3GJk-1zr-G8?si=UMCzheGPGUpH_lzO",
    "ylBoX0APtmA?si=lpNJ5fB11v9cKwQ6",
    "OVd759tAYOw?si=fmicxZrqA8A0RT-V",
    "4Z4tem4r9rk?si=j4KB0b1suJcVWTZO",
    "1gt4E7IVIrk?si=cbxASBdWrUdhr_Cj",
    "ay99J4tUUu0?si=a07PGVSKFM42ZnNV",
    "9vYywHKZ0Tc?si=3dLEYz8pV9XhVG1Z",
    "Y6plUiKfGvs?si=iViPkiIMsR4nf0hD",
    "k7LSFYyBZUs?si=r_j4DN3MG9SxTTSh",
    "fgWV-EOzLGs?si=sgqoc5mQMucQGLH4",
    "wVbaqlK8DKA?si=OagJRZ-fyyy1WU8k",
  ];

  for (var i = 0; i < videos.length; i++) {
    leftt = Math.floor(Math.random() * ($(window).width() - 315));
    topp = Math.floor(Math.random() * ($(window).height() - 550));
    idd = "maze_vid_" + i;
    videos_frames +=
      "<div style='position: absolute; left: " +
      leftt +
      "px; top: " +
      topp +
      "px;'><div id='" +
      idd +
      "' class='maze_short_container background_white'><iframe class='maze_short' src='https://youtube.com/embed/" +
      videos[i] +
      "?autoplay=1'></iframe></div></div>";
    short_ids += ", #" + idd;
  }
  document.getElementById("windows_maze").innerHTML = videos_frames;
  $(function () {
    console.log("ahhhhhh");
    console.log(short_ids);
    $(short_ids).draggable();
    $("#maze_timer").css("top", $(window).height() - 10 + "px");
  });
});

$(document).ready(function () {
  $(document).on("mousedown", ".maze_short_container", function () {
    // Apply draggable functionality to the container of the iframe
    vid_count++;
    $(this).css("z-index", vid_count);
  });
  // chatGPT "why does hover not work?"
  $(document).on("mouseenter", ".maze_short_container", function () {
    $(this).css("cursor", "grab");
  });

  $(document).on("mouseleave", ".maze_short_container", function () {
    $(this).css("cursor", "auto"); // Reset cursor to default
  });
});

var timer_seconds = sessionStorage.getItem("maze_time_seconds");
var timer_minutes = sessionStorage.getItem("maze_time_minutes");
var time_string;

function timer() {
  if (time_string != "XX:XX") {
    timer_seconds++;
    if (timer_seconds > 60) {
      timer_seconds = 0;
      timer_minutes++;
    }
    if (timer_minutes > 99) {
      time_string = "XX:XX";
    } else {
      time_string = "";
      if (timer_minutes < 10) {
        time_string += "0";
      }
      time_string += timer_minutes + ":";

      if (timer_seconds < 10) {
        time_string += "0";
      }
      time_string += timer_seconds;
      setTimeout(timer, 1000);
    }
    document.getElementById("maze_timer").textContent = time_string;
    sessionStorage.setItem("maze_time_seconds", timer_seconds);
    sessionStorage.setItem("maze_time_minutes", timer_minutes);
  }
}
