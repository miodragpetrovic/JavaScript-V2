let cities = ["Beograd", "Novi Sad", "Jagodina", "Subotica", "Paracin"];

let citiesSelector = document.querySelector("#citiesSelector");

for (let city of cities) {
	let cityOption = document.createElement("option");
	cityOption.innerHTML = city;
	citiesSelector.appendChild(cityOption);
}
