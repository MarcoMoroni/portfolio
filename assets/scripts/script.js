// Align last row of the posts list to the left by adding fake post divs with no height
/*function addFakePosts()
{
  // Delete fake posts
  var i;
  var fake_posts = document.getElementsByClassName("fake_post");
  for(i = 0; i < fake_posts.length; i++)
  {
    fake_posts[i].parentElement.removeChild(fake_posts[i]);
  }

  var posts = document.getElementsByClassName("blog_list_post");
  //console.log("Posts: " + posts.length);
  var posts_list = document.getElementsByClassName("blog_list")[0];

  // Get posts style
  var post_style = posts[0].currentStyle || window.getComputedStyle(posts[0]);
  //console.log("post left margin: " + post_style.marginLeft);
  //console.log("post width: " + post_style.width);

  // Get number of posts in one line
  var posts_in_one_line = 0;
  var first_line_y = posts[0].getBoundingClientRect().top;
  for (i = 0; i < posts.length; i++)
  {
    var rect = posts[i].getBoundingClientRect();
    //console.log("Top " + i + ": " + rect.top);
    if (rect.top == first_line_y)
    {
      posts_in_one_line++;
    }
  }
  //console.log("posts_in_one_line: " + posts_in_one_line);

  // Get number of lines
  var lines = Math.ceil(posts.length / posts_in_one_line);
  //console.log("lines: " + lines);

  // If more than two lines, add fake posts to last line so that it looks aligned to the left
  if (lines > 2 && posts_in_one_line > 1)
  {
    // Calculate fake posts to add
    var fake_posts_count = posts_in_one_line - (posts.length % posts_in_one_line);
    //console.log("fake_posts_count: " + fake_posts_count);

    for(i = 0; i < fake_posts_count + 50; i++)
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
}*/
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
