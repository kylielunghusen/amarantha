window.onload = function() {
  var genButton = document.getElementById("generateButton");
  genButton.onclick = generateCharacter;
  var raceArray = ["elf","dwarf","tiefling"];
  var classArray = ["barbarian","warlock","monk"];
  var bgArray = ["sailor","urchin","sage"];
}

function generateCharacter() {
  var resultsDiv = document.getElementById("resultsDiv");
  var raceArray = ["Dwarf","Elf","Halfling","Human"];
  var classArray = ["Cleric","Fighter","Rogue","Wizard"];
  var bgArray = ["Acolyte","Criminal","Folk Hero","Noble","Sage","Soldier"];
  var randomRace = Math.floor(Math.random()*raceArray.length);
  var randomClass = Math.floor(Math.random()*classArray.length);
  var randomBg = Math.floor(Math.random()*bgArray.length);
  resultsDiv.innerHTML = "Race: " + raceArray[randomRace]+ "<br>Class: " + classArray[randomClass]+ "<br>Background: " + bgArray[randomBg]+ "</p>"
}