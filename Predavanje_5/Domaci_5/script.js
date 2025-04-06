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

// carMake[i] -> prolazi kroz petlju [0] -> uzim prvo slovo

for (let i = 0; i < carMake.length; i++) {
	if (carMake[i][0].toLowerCase() === "a") {
		continue;
	}
	console.log(carMake[i]);
}
