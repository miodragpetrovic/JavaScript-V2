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

let roomNumber = [
	"Garsonjera",
	"Jednosoban stan",
	"Jednoiposoban stan",
	"Dvosoban stan",
	"Dvoiposoban stan",
	"Trosoban stan",
	"Troiposoban stan",
	"Cetvorosoban stan",
	"4.5 i vise soba",
];

let myCity = document.querySelector("#city");
let objectTypeOption = document.querySelector("#object");
let roomQuantity = document.querySelector("#roomQuantity");

for (let city in cities) {
	let cityOption = document.createElement("option");
	cityOption.textContent = cities[city];

	myCity.appendChild(cityOption);
}

for (let type in objectType) {
	let typeOption = document.createElement("option");
	typeOption.textContent = objectType[type];

	objectTypeOption.appendChild(typeOption);
}

for (let room in roomNumber) {
	let roomOption = document.createElement("option");
	roomOption.textContent = roomNumber[room];

	roomQuantity.appendChild(roomOption);
}

document
	.querySelector("#searcProperties")
	.addEventListener("click", function () {
		console.log("TEST");
	});
