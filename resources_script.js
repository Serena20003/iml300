var leftt;
var topp;
var count = 0;
var id;
var windows = "";
var hrefs = [
  "https://www.apa.org/news/podcasts/speaking-of-psychology/attention-spans",
  "https://www.cnn.com/2023/01/11/health/short-attention-span-wellness/index.html",
  "https://time.com/3858309/attention-spans-goldfish/",
  "https://www.yumyumvideos.com/blog/human-attention-span/",
  "https://youtu.be/d8upEfyp3Po?si=DOiuwCE2rC7RhzQU",
  "https://youtu.be/vYaNiC4kchg?si=2blB4OUublVZAPL7",
  "https://youtu.be/fuFlMtZmvY0?si=yXImLj_VHV60wbSJ",
];
var titles = [
  "Why our attention spans are shrinking",
  "Here’s how to stay focused",
  "You Now Have a Shorter Attention Span Than a Goldfish",
  "10 Stats You Didn’t Know About the Human Attention Span!",
  "Pay attention!",
  "how i fixed my attention span",
  "The Internet is Worse Than Ever – Now What?",
];
var habits = [
  "Create a strategic schedule",
  "Train your brain to check email etc. less often",
  "Move distractors out of reach",
  "Remap your cues",
  "Get enough sleep",
  "Meditate",
  "Exercise",
  "Stay hydrated",
  "Sit 'at the front of the classroom'",
  "Ask questions",
  "Listen to music",
  "Drink tea",
  "Take notes by hand",
  "Take breaks",
  "Practice—and give yourself grace",
];

$(document).ready(function () {
  $("body").click(function () {
    if (count < 6) {
      // make windows when button is first clicked
      $("#cnn").css("display", "none");
      for (let i = 0; i < 5; i++) {
        leftt = Math.floor(Math.random() * $(window).width() * 0.8);
        topp = Math.floor(Math.random() * $(window).height() * 0.6);
        windows +=
          "<div class='window inter_regular' id='window_" +
          count +
          "' style='top: " +
          topp +
          "px; left: " +
          leftt +
          "px; position: absolute; display: block'><a href='" +
          hrefs[count] +
          "' target='_blank'>" +
          titles[count] +
          "</a></div>";
      }
      document.getElementById("windows_resources").innerHTML = windows;
    } else if (count == 6) {
      document.getElementById("quote_to_about").innerHTML =
        "What are some ways to improve your attention span? See <a class='white' target='_blank' href='https://www.fastcompany.com/3052830/8-quick-ways-to-improve-your-attention-span'>this article</a>";
      document.getElementById("windows_resources").innerHTML = "";
      windows = "";
    } else if (count < 22) {
      leftt = Math.floor(Math.random() * $(window).width() * 0.8);
      topp = Math.floor(Math.random() * $(window).height() * 0.6);
      windows +=
        "<div class='window inter_regular' id='window_" +
        count +
        "' style='top: " +
        topp +
        "px; left: " +
        leftt +
        "px; position: absolute; display: block; font-size: '><a target='_blank' href='https://www.fastcompany.com/3052830/8-quick-ways-to-improve-your-attention-span'>" +
        habits[count - 7] +
        "</a></div>";
      document.getElementById("windows_resources").innerHTML = windows;
    } else {
      document.getElementById("quote_to_about").innerHTML =
        "This is a project made by Serena Li to comment on the decline in attention span in younger generations, fostered by social media and its short form media. By over-stimulating the users to make them more reliant and spend more time on the application, the companies make more money. They capitalize on our lost of control for our own minds. Hope this website shows you the time you have given up for those exploiters.";
      document.getElementById("windows_resources").innerHTML = "";
    }
    count++;
  });
});
