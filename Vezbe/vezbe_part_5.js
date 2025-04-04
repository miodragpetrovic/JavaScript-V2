// Loopa - petlje

let cars = [
	"Audi",
	"BMW",
	"Mercedes",
	"Volkswagen",
	"Opel",
	"Renault",
	"Peugeot",
	"Ford",
	"Toyota",
	"Honda",
	"Hyundai",
	"Kia",
	"Nissan",
	"Mazda",
	"Subaru",
	"Mitsubishi",
	"Volvo",
	"Jaguar",
	"Land Rover",
	"Fiat",
	"Alfa Romeo",
	"Citroën",
	"Chevrolet",
	"Jeep",
	"Dodge",
	"Chrysler",
	"Tesla",
	"Lexus",
	"Porsche",
	"Ferrari",
];
let output = "";

for (let i = 0; i < cars.length; i++) {
	output += cars[i] + "<br>";
}

document.querySelector(".carModels").innerHTML = output;
