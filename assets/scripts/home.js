// Typewriter

var i = 0;
var mySpan = document.getElementById("marco");
var txt = ", I'm Marco.";
var speed = 110;

var time_before_comma = 1000;
var time_after_comma = 120;
var time_before_dot = 1800;

function functionTypewriteMarco()
{
  if (i < txt.length)
  {
    mySpan.innerHTML += txt.charAt(i);
    i++;
    if (i - 1 == 0) {
      setTimeout(functionTypewriteMarco, time_after_comma);
    }
    else if (i - 1 == 10) {
      setTimeout(functionTypewriteMarco, time_before_dot);
    }
    else {
      setTimeout(functionTypewriteMarco, speed);
    }
  }
}

setTimeout(functionTypewriteMarco, time_before_comma);
