let carMake = [
	"Toyota",
	"Volkswagen",
	"BMW",
	"Mercedes-Benz",
	"Audi",
	"Acura",
	"Aston Martin",
	"Alfa Romeo",
	"Ford",
	"Honda",
	"Chevrolet",
	"Hyundai",
	"Kia",
	"Nissan",
	"Peugeot",
	"Renault",
	"Mazda",
	"Lexus",
	"Skoda",
	"Fiat",
	"Volvo",
	"Subaru",
	"Jeep",
];

for (let i = 0; i < carMake.length; i++) {
	if (carMake.startsWith("A")) {
		console.log(carMake[i]);
	}
}
