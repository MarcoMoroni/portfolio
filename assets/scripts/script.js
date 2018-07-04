// Align last row of the posts list to the left by adding fake post divs with no height

function addFakePosts()
{
  var posts = document.getElementsByClassName("blog_list_post");
  var posts_list = document.getElementsByClassName("blog_list")[0];
  var post_style = posts[0].currentStyle || window.getComputedStyle(posts[0]);
  for(i = 0; i < 10; i++)
  {
    var fake_div = document.createElement("div");
    fake_div.className = "fake_post";
    fake_div.style.marginLeft = post_style.marginLeft;
    fake_div.style.width = post_style.width;
    fake_div.style.marginRight = post_style.marginRight;
    fake_div.style.height = "0px";
    fake_div.style.backgroundColor = "green";
    posts_list.appendChild(fake_div);
  }
}

addFakePosts();







// Typewriter

var i = 0;
var mySpan = document.getElementById("marco");
var txt = ", I'm Marco.";
var speed = 110;

var time_before_comma = 1000;
var time_after_comma = 1000;
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
