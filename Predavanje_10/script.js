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
	"do 30 m²",
	"31–50 m²",
	"51–70 m²",
	"71–100 m²",
	"101–150 m²",
	"151–200 m²",
	"201–300 m²",
	"više od 300 m²",
];

let realEstates = [
	{
		city: "Beograd",
		option: "Stan",
		price: 48200,
		size: 25,
	},
	{
		city: "Novi Sad",
		option: null,
		price: 89000,
		size: 75,
	},
	{
		city: "Subotica",
		option: "Plac",
		price: 22000,
		size: 300,
	},
	{
		city: "Jagodina",
		option: "Stan",
		price: 37000,
		size: 45,
	},
	{
		city: "Niš",
		option: "Kuća",
		price: 99000,
		size: 120,
	},
	{
		city: "Kragujevac",
		option: "Lokal",
		price: 61000,
		size: 60,
	},
	{
		city: "Pančevo",
		option: "Stan",
		price: 41000,
		size: 32,
	},
	{
		city: "Zrenjanin",
		option: null,
		price: 18000,
		size: 400,
	},
	{
		city: "Paracin",
		option: "Lokal",
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

citiesSelector.addEventListener("change", (e) => {
	// Unutar viticastih zagrada je local scope tako da mora prvo promenljiva izvan da se deklarise
	selectedCity = e.currentTarget.value;

	for (let realEstate of realEstates) {
		if (realEstate.city === selectedCity) {
			console.log(realEstate.city);
		}
	}
});

typSelector.addEventListener("change", function (e) {
	// Unutar viticastih zagrada je local scope tako da mora prvo promenljiva izvan da se deklarise
	selectedTyp = e.currentTarget.value;
});

sizeSelector.addEventListener("change", function (e) {
	// Unutar viticastih zagrada je local scope tako da mora prvo promenljiva izvan da se deklarise
	selectedSize = e.currentTarget.value;
});

// Pretraga

// Prikazi sve nekretnine - Domaci 9

let estates = document.querySelector("#estates"); // Glavni DIV estates

for (let estate of realEstates) {
	/* console.log(estate); //Check */
	let div = document.createElement("div");

	let pTagPrice = document.createElement("p");
	pTagPrice.innerHTML = estate.price;

	let pTagSize = document.createElement("p");
	pTagSize.innerHTML = estate.size + " m2";

	let typeAndCity = document.createElement("h1");
	typeAndCity.innerHTML = estate.option + " " + estate.city;
	if (estate.option === null) {
		typeAndCity.innerHTML = "--" + " " + estate.city;
	}

	div.appendChild(typeAndCity);
	div.appendChild(pTagPrice);
	div.appendChild(pTagSize);
	estates.appendChild(div);
}

// Pretraga

/* document.querySelector("#btnSearch").addEventListener("click", function () {
	if (selectedCity !== null) {
		console.log(selectedCity);
	}
}); */
