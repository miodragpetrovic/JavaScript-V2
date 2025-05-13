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

let propertySizes = [
	30,
	50,
	70,
	100,
	150,
	200,
	300,
	400,
];

let realEstates = [
	{
		city: "Beograd",
		typ: "Stan",
		price: 48200,
		size: 50,
	},
	{
		city: "Novi Sad",
		typ: null,
		price: 89000,
		size: 70,
	},
	{
		city: "Subotica",
		typ: "Plac",
		price: 22000,
		size: 300,
	},
	{
		city: "Jagodina",
		typ: "Stan",
		price: 37000,
		size: 100,
	},
	{
		city: "Niš",
		typ: "Kuća",
		price: 99000,
		size: 150,
	},
	{
		city: "Kragujevac",
		typ: "Lokal",
		price: 61000,
		size: 50,
	},
	{
		city: "Pančevo",
		typ: "Stan",
		price: 41000,
		size: 100,
	},
	{
		city: "Zrenjanin",
		typ: null,
		price: 18000,
		size: 400,
	},
	{
		city: "Paracin",
		typ: "Lokal",
		price: 18000,
		size: 400,
	},
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


