var h3Header = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var setBackGradient = function(){
  body.style.background = "linear-gradient(to right, "+color1.value + ", " + color2.value+ ")";
  h3Header.textContent = body.style.background+";";
};
color1.addEventListener("input",setBackGradient);

color2.addEventListener("input",setBackGradient);
