let cities = [
	"Beograd",
	"Novi Sad",
	"Jagodina",
	"Subotica",
	"Paracin",
	"Niš",
	"Kragujevac",
	"Zrenjanin",
	"Pančevo",
	"Smederevo",
	"Čačak",
	"Kraljevo",
	"Užice",
	"Valjevo",
	"Leskovac",
	"Vranje",
	"Sombor",
	"Pirot",
	"Loznica",
	"Kruševac",
];

let propertyTypes = [
	"Stan",
	"Kuća",
	"Poslovni prostor",
	"Lokal",
	"Magacin",
	"Vikendica",
	"Plac",
	"Poljoprivredno zemljište",
	"Garaža",
	"Soba",
	"Penthaus",
	"Apartman",
	"Zgrada",
	"Hotel",
	"Industrijski objekat",
];

let propertySizes = 
[ 30, 50, 70, 100, 150, 200, 300, 400, ];

let realEstates = [
  { city: "Beograd", typ: "Stan", price: 95000, size: 30 },
  { city: "Novi Sad", typ: "Kuća", price: 120000, size: 50 },
  { city: "Jagodina", typ: "Plac", price: 25000, size: 70 },
  { city: "Subotica", typ: "Lokal", price: 40000, size: 100 },
  { city: "Paracin", typ: "Magacin", price: 60000, size: 150 },
  { city: "Niš", typ: "Stan", price: 67000, size: 200 },
  { city: "Kragujevac", typ: "Vikendica", price: 48000, size: 300 },
  { city: "Zrenjanin", typ: null, price: 15000, size: 400 }, // null
  { city: "Pančevo", typ: "Garaža", price: 12000, size: 30 },
  { city: "Smederevo", typ: "Kuća", price: 82000, size: 50 },
  { city: "Čačak", typ: "Lokal", price: 38000, size: 70 },
  { city: "Kraljevo", typ: "Zgrada", price: 210000, size: 100 },
  { city: "Jagodina", typ: "Stan", price: 56000, size: 150 },
  { city: "Valjevo", typ: "Hotel", price: 500000, size: 200 },
  { city: "Leskovac", typ: "Soba", price: 10000, size: 300 },
  { city: "Vranje", typ: "Plac", price: 22000, size: 400 },
  { city: "Sombor", typ: null, price: 130000, size: 30 }, // null
  { city: "Pirot", typ: "Apartman", price: 75000, size: 50 },
  { city: "Čačak", typ: "Kuća", price: 70000, size: 70 },
  { city: "Kruševac", typ: "Stan", price: 60000, size: 100 },
];


// Cities Selector

let citiesSelector = document.querySelector("#citiesSelector");

for (let city of cities) {
	let cityOption = document.createElement("option");
	cityOption.innerHTML = city;
	citiesSelector.appendChild(cityOption);
}

// Typ Selector

let typSelector = document.querySelector("#typSelector");

for (let typ of propertyTypes) {
	let typOption = document.createElement("option");
	typOption.innerHTML = typ;
	typSelector.appendChild(typOption);
}

// Property sizes Selector

let sizeSelector = document.querySelector("#sizeSelector");

for (let size of propertySizes) {
	let sizeOption = document.createElement("option");
	sizeOption.innerHTML = size;
	sizeSelector.appendChild(sizeOption);
}

let selectedCity = null;
let selectedTyp = null;
let selectedSize = null;

citiesSelector.addEventListener("change", function (e) {
	// Unutar viticastih zagrada je local scope tako da mora prvo promenljiva izvan da se deklarise
	selectedCity = e.currentTarget.value;
});

typSelector.addEventListener("change", function (e) {
	// Unutar viticastih zagrada je local scope tako da mora prvo promenljiva izvan da se deklarise
	selectedTyp = e.currentTarget.value;
});

sizeSelector.addEventListener("change", function (e) {
	// Unutar viticastih zagrada je local scope tako da mora prvo promenljiva izvan da se deklarise
	selectedSize = e.currentTarget.value;
});

// Event Listener / Prikazi sve nekretnine - Domaci 9

document.querySelector("#btnSearch").addEventListener("click", function () {

let estates = document.querySelector("#estates"); 
estates.innerHTML = "";

for (let estate of realEstates) {

	let matchCity = selectedCity === "" || estate.city === selectedCity;
	let matchTyp = selectedTyp === "" || estate.typ === selectedTyp;
	let matchSize = selectedSize === "" || estate.size === selectedSize;
	
	if(matchCity){

	// Prikaz izabranih nekretnina

	let div = document.createElement("div");

	let pTagPrice = document.createElement("p");
	pTagPrice.innerHTML = estate.price;

	let pTagSize = document.createElement("p");
	pTagSize.innerHTML = estate.size + " m2";

	let typeAndCity = document.createElement("h1");
	typeAndCity.innerHTML = estate.typ + " " + estate.city;
	if (estate.typ === null) {
		typeAndCity.innerHTML = "--" + " " + estate.city;
	}

	div.appendChild(typeAndCity);
	div.appendChild(pTagPrice);
	div.appendChild(pTagSize);

	estates.appendChild(div);

	}else{
		console.log("Nema rezultata")
	}
  }
});


