// div element
let divElement = document.createElement("h1"); // Novi element div
divElement.textContent = "My new car!"; // Ubacivanje teksta unutar div-a

document.body.appendChild(divElement); // Ipsisivanje u html

// img element

let imgElement = document.createElement("img");

imgElement.setAttribute(
	"src", // Dodavanje atributa src i adrese do slike
	"https://storage.googleapis.com/pod_public/1300/173321.jpg"
);
imgElement.setAttribute("width", "340"); // Dodavanje atributa width
imgElement.setAttribute("alt", "Car image"); // Dodavanje atributa alt

document.body.appendChild(imgElement);
