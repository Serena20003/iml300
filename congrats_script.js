window.addEventListener("load", function () {
  document.getElementById("maze_time_spent").innerHTML = sessionStorage.getItem("maze_time_minutes") + " minutes " + sessionStorage.getItem("maze_time_seconds") + " seconds";
  document.getElementById("amusement_time_spent").innerHTML = sessionStorage.getItem("amusement_time_minutes") + " minutes " + sessionStorage.getItem("amusement_time_seconds") + " seconds";;
});