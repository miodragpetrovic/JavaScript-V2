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

/* Vezbe

Kreiraj niz numbers sa nekoliko brojeva, a zatim napiši petlju koja prolazi kroz sve brojeve i koristi 
if-else strukturu da ispise "Even" za parne i "Odd" za neparne brojeve. */

let numbers = [2, 12, 15, 21, 34, 43, 44, 52, 81, 84, 99];

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 === 0) {
		console.log("Even.numbers[i]");
	} else {
		console.log("Odd");
	}
}

/* Kreiraj objekat car sa svojstvima make, model, year, i color, a zatim napiši for-in petlju koja prolazi 
kroz sva svojstva objekta i koristi switch strukturu da ispisuje poruke specifične za svako svojstvo (npr. "Make: Toyota", "Model: Corolla"). */

let topCars = {
	make: "Audi",
	model: "M3",
	year: "2022",
	color: "crvena",
};

for (let spec in topCars) {
	switch (spec) {
		case "make":
			console.log("Marka: " + topCars[spec]);
			break;
		case "model":
			console.log("Model: " + topCars[spec]);
			break;
		case "year":
			console.log("Godiste: " + topCars[spec]);
			break;
		case "color":
			console.log("Boja: " + topCars[spec]);
			break;
		default:
			console.log("Boja nije definifsana!");
	}
}

/* Kreiraj niz students koji sadrži objekte sa svojstvima name i grade, a zatim napiši for petlju koja prolazi 
kroz niz i koristi if-else strukturu da ispise "Pass" za ocene 50 i više, i "Fail" za ocene ispod 50. */

let students = [
	{
		name: "Miodrag",
		city: "Cuprija",
	},
	{
		name: "Dusan",
		city: "Beograd",
	},
	{
		name: "Dragan",
		city: "Novi sad",
	},
];

for (let i = 0; i < students.length; i++) {
	console.log(students[i].name);
}

/* Kreiraj niz grades koji sadrži ocene učenika, a zatim napiši petlju koja prolazi kroz niz i koristi if-else 
strukturu da ispise "Excellent" za ocene iznad 90, "Good" za ocene između 75 i 90, "Average" za ocene između 50 i 75, i "Fail" za ocene ispod 50. */

/* Kreiraj niz fruits sa nekoliko različitih voća, a zatim napiši petlju koja prolazi kroz niz i koristi switch 
strukturu da ispise boju svakog voća (npr. "Apple is red", "Banana is yellow").
 */
/* Kreiraj objekat book sa svojstvima title, author, year, i genre, a zatim napiši for-in petlju koja prolazi kroz 
sva svojstva objekta i koristi if-else strukturu da ispise poruku "Old book" ako je godina izdanja pre 2000, inače "New book". */

/* Kreiraj niz employees koji sadrži objekte sa svojstvima name i salary, a zatim napiši for petlju koja prolazi 
kroz niz i koristi if-else strukturu da ispise "High salary" za plate iznad 50000, "Medium salary" za plate između 
30000 i 50000, i "Low salary" za plate ispod 30000.
 */
/* Kreiraj niz cities sa nekoliko imena gradova, a zatim napiši petlju koja prolazi kroz niz i koristi switch strukturu 
da ispise poruku specifičnu za svaki grad (npr. "Welcome to New York", "Welcome to Los Angeles").
 */
