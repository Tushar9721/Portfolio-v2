var count = 1;
function changeBackground() {
  if (count == 1) {
    document.body.style.background = "rgba(255, 255, 255, 0.800)";
    document.getElementById("designation").style.color = "#111212";
    document.getElementById("work").style.color = "#111212";
    document.getElementById("name").style.color = "#111212";
    document.getElementById("greetings").style.color = "#D9D9D9";
    document.getElementById("btn-down").style.color = "rgba(58, 56, 56, 0.884)";
    document.getElementById("mail").src = "images/mail.svg";
    document.getElementById("insta").src = "images/logo.svg";
    document.getElementById("link").src = "images/linkedin.svg";
    document.getElementById("git").src = "images/github.svg";
    count = 0;
  } else {
    document.body.style.background = "#111212";
    document.getElementById("designation").style.color = "#ffff";
    document.getElementById("work").style.color = "#ffff";
    document.getElementById("name").style.color = "#ffff";
    document.getElementById("btn-down").style.color =
      "rgba(255, 255, 255, 0.500)";
    document.getElementById("greetings").style.color = "#202121";
    document.getElementById("mail").src = "images/mail_white.svg";
    document.getElementById("insta").src = "images/instagram_white.svg";
    document.getElementById("link").src = "images/linkedin_white.svg";
    document.getElementById("git").src = "images/github_white.svg";
    count = 1;
  }
}

var total = 1;
function showHide() {
  var text = document.getElementById("show");
  if (total == 1) {
    text.style.visibility = "visible";
    total = 0;
  } else {
    text.style.visibility = "hidden";
    total = 1;
  }
}
