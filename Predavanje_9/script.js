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

let myCity = document.querySelector("#city");

for (let city in cities) {
	/* console.log(cities[city]); */

	let cityOption = document.createElement("option");
	cityOption.textContent = cities[city];

	myCity.appendChild(cityOption);
}
