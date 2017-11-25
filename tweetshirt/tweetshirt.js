window.onload = function() {
  var previewButton = document.getElementById("previewButton");
  var searchButton = document.getElementById("searchButton");
  searchButton.onclick = getTweets;
  previewButton.onclick = previewHandler;
};

function previewHandler() {
  var canvas = document.getElementById("tshirtCanvas");
  var context = canvas.getContext("2d");
  fillBackgroundColor(canvas, context);
  
  var selectObj = document.getElementById("shape");
  var index = selectObj.selectedIndex;
  var shape = selectObj[index].value;
  
  if(shape == "squares") {
    for(var squares = 0; squares < 20; squares++) {
      drawSquare(canvas, context);
    }
  } else if(shape == "circles") {
    for(var circles = 0; circles < 20; circles++) {
      drawCircle(canvas, context);
    }
  }
  
  drawText(canvas, context);
  drawBird(canvas, context);
}

function drawSquare(canvas, context) {
  var w = 5 + Math.floor(Math.random() * 35);
  var x = Math.floor(Math.random() * (canvas.width - w));
  var y = Math.floor(Math.random() * (canvas.height - w));
  
  context.fillStyle = "#9f7dab";
  context.fillRect(x,y,w,w);
}

function drawCircle(canvas, context) {
  var radius = 5 + Math.floor(Math.random() * 35);
  var x = Math.floor(Math.random() * canvas.width);
  var y = Math.floor(Math.random() * canvas.height);
  
  context.beginPath();
  context.arc(x,y,radius,0,degreesToRadians(360),true);
  
  context.fillStyle = "#a1d490";
  context.fill();
}

function fillBackgroundColor(canvas, context) {
  var selectObj = document.getElementById("backgroundColor");
  var index = selectObj.selectedIndex;
  var bgColor = selectObj.options[index].value;
  context.fillStyle = bgColor;
  context.fillRect(0,0,600,200);
  
}

function degreesToRadians(degrees) {
  return (degrees * Math.PI)/180;
}

function getTweets() {
  // set up a new XHR request
  var xhr = new XMLHttpRequest();
  // we're calling search.php and passing in a query string
  var url = "search.php?query=";
  console.log("url is " + url);
  var query = document.getElementById("query").value;
  console.log("query is " + query);
  if (!query) {
    query = "html5";
  }
  // we encode the query to handle any special characters properly
  url += encodeURIComponent(query);
  console.log("encoded url is " + url);
        
  // this is the function that is called when the XHR request
  // to our search.php script is handled, and a response sent back
  xhr.onload = function() {
    // if everything went okay, then send the response data
    // to the displayTweets() function
    if (xhr.status == 200) {
      updateTweets(xhr.responseText);
    } else {
      var errorDiv = document.getElementById("error");
      errorDiv.innerHTML = "Error getting tweets: " + xhr.status;
    }
  };
  // make the request
  xhr.open("GET", url);
  xhr.send(null);
}

function updateTweets(tweets) {
  var tweetsSelection = document.getElementById("tweets");
  console.log("tweetsSelection is " + JSON.stringify(tweetsSelection));
  var tweets = JSON.parse(tweets);
  console.log("tweets is:\n" + JSON.stringify(tweets));
  for(var i = 0; i < tweets.length; i++) {
    var tweet = tweets[i];
    console.log("index is " + i);
    var option = document.createElement("option");
    option.text = tweet.tweet;
    console.log("option.text is " + option.text);
    option.value = tweet.tweet.replace("\"", "'");
    
    tweetsSelection.options.add(option);
  }
  console.log("final value of tweets is:\n" + JSON.stringify(tweets));
  console.log("final value of tweetsSelection is:\n" + JSON.stringify(tweetsSelection));
  tweetsSelection.selectedIndex = 0;
}

function drawText(canvas, context) {
  var selectObj = document.getElementById("foregroundColor");
  var index = selectObj.selectedIndex;
  var fgColor = selectObj[index].value;
  context.fillStyle = fgColor;
  context.font = "bold 1em sans-serif";
  context.textAlign = "left";
  context.fillText("I saw this tweet", 20, 40);
  
  // selectObj = document.getElementById("tweets");
  // index = selectObj.selectedIndex;
  // var tweetText = selectObj[index].value;
  // context.font = "italic 1.2em serif";
  // context.fillText(tweet, 30, 100);
  
  context.font = "bold 1em sans-serif";
  context.textAlign = "right";
  context.fillText("and all I got was this lousy t-shirt!", canvas.width-20, canvas.height-40);
}

function drawBird(canvas, context) {
  var twitterBird = new Image();
  twitterBird.src = "twitterBird.png";
  
  twitterBird.onload = function() {
    context.drawImage(twitterBird, 20, 120, 70, 70);
  };
}

