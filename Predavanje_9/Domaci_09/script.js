let cities = ["Beograd", "Novi Sad", "Jagodina", "Subotica", "Paracin"];

let options = document.querySelector("#optionSel");

for (let selectOption of cities) {
	let opt = document.createElement("option");
	opt.innerHTML = selectOption;
	options.appendChild(opt);
}
