var timer_seconds = sessionStorage.getItem("amusement_time_seconds");
var timer_minutes = sessionStorage.getItem("amusement_time_minutes");
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
    document.getElementById("amusement_timer").textContent = time_string;
    sessionStorage.setItem("amusement_time_seconds", timer_seconds);
    sessionStorage.setItem("amusement_time_minutes", timer_minutes);
  }
}
