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
		option: "Kuća",
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
		option: "Plac",
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

// On change na promenu prikaze selektovan grad

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

// Event Listener

document.querySelector("#btnSearch").addEventListener("click", function () {
	console.log(
		"Izabrali ste " +
			selectedCity +
			" i tip " +
			selectedTyp +
			" i velicina " +
			selectedSize
	);
});

// Ispisivanje

/* for (estate of realEstates) {
	console.log(estate.price);
} */

// Ispisati sve nekretnine

let estates = document.querySelector("#estates");

for (let estate of realEstates) {
	console.log(estate);
	let div = document.createElement("div");

	let typeAndCity = document.createElement("h1");
	typeAndCity.innerHTML = estate.option + estate.city;

	div.appendChild(typeAndCity);
	estates.appendChild(div);
}
