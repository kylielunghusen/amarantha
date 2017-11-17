window.onload = function() {
  var button = document.getElementById("previewButton");
  button.onclick = previewHandler;
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
