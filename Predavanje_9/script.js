let cities = [
	"Subotica",
	"Beograd",
	"Novi Sad",
	"Smederevo",
	"Pozarevac",
	"Jagodina",
	"Paracin",
	"Cuprija",
];

let objectType = ["Stanovi", "Kuce", "Poslovni prostori", "Placevi", "Garaze"];

let myCity = document.querySelector("#city");
let objectTypeOption = document.querySelector("#object");

for (let city in cities) {
	console.log(cities[city]);

	let cityOption = document.createElement("option");
	cityOption.textContent = cities[city];

	myCity.appendChild(cityOption);
}

for (let type in objectType) {
	console.log(objectType[type]);

	let typeOption = document.createElement("option");
	typeOption.textContent = objectType[type];

	objectTypeOption.appendChild(typeOption);
}
