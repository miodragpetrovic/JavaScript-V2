let nameColor = document.getElementById("name");

nameColor.style.color = "orange";
nameColor.style.fontSize = "x-large";
nameColor.style.backgroundColor = "black";

// Promena teksta u p tagu
let myCity = "Cuprija";
let showCity = document.getElementById("name");
showCity.textContent = myCity;

// Prompt unos iena i prikaz u marquee
let yourName = prompt("Your name");
document.getElementById("name").textContent = yourName;

let myColor = prompt("Unesite boju pozadine");
document.getElementById("name").style.backgroundColor = myColor;

// Vezba
