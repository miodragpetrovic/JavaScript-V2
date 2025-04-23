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

// On change

citiesSelector.addEventListener("change", function () {
	console.log("promenjeno");
});

// Event Listener

document.querySelector("#btnSearch").addEventListener("change", function () {
	console.log("MIODRAG");
});
