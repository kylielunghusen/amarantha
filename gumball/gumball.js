window.onload = function() {
  var url = "https://amarantha.id.au/gumball/sales.json";
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function() {
    if(request.status == 200) {
      updateSales(request.responseText);
    }
  };
}

function updateSales(responseText) {
  var salesDiv = document.getElementById("sales");
  salesDiv.innerHTML = responseText;
}
