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
		grade: 83,
	},
	{
		name: "Dusan",
		city: "Beograd",
		grade: 49,
	},
	{
		name: "Dragan",
		city: "Novi sad",
		grade: 45,
	},
];

for (let i = 0; i < students.length; i++) {
	if (students[i].grade > 50) {
		console.log(
			" Ime: " +
				students[i].name +
				" Grad: " +
				students[i].city +
				" Ispit: Polozio " +
				students[i].grade
		);
	} else {
		console.log(
			" Ime: " +
				students[i].name +
				" Grad: " +
				students[i].city +
				" Ispit: Nije polozio " +
				students[i].grade
		);
	}
}

/* Kreiraj niz grades koji sadrži ocene učenika, a zatim napiši petlju koja prolazi kroz niz i koristi if-else 
strukturu da ispise "Excellent" za ocene iznad 90, "Good" za ocene između 75 i 90, "Average" za ocene između 50 i 75, i "Fail" za ocene ispod 50. */

let grades = [
	98, 91, 92, 85, 82, 77, 79, 80, 52, 56, 57, 59, 66, 69, 71, 74, 49, 33, 39,
	41,
];

for (let i = 0; i < grades.length; i++) {
	/* console.log(grades[i]); */
	if (grades[i] > 90) {
		console.log(grades[i] + " Excellent!!!");
	} else if (grades[i] > 75 && grades[i] < 90) {
		console.log(grades[i] + " Good!");
	} else if (grades[i] > 50 && grades[i] < 75) {
		console.log(grades[i] + " Average");
	} else if (grades[i] < 50) {
		console.log(grades[i] + " Fail!");
	} else {
		console.log("Nothing found");
	}
}

/* Kreiraj niz fruits sa nekoliko različitih voća, a zatim napiši petlju koja prolazi kroz niz i koristi switch 
strukturu da ispise boju svakog voća (npr. "Apple is red", "Banana is yellow").
 */
let fruits = ["Apple", "Banana", "Orange", "Cherry", "Avocado"];

for (let i = 0; i < fruits.length; i++) {
	switch (fruits[i]) {
		case "Apple":
			console.log("Apple is red");
			break;
		case "Banana":
			console.log("Banana is yellow");
			break;
		case "Orange":
			console.log("Orange is orange");
			break;
		case "Cherry":
			console.log("Cherry is red");
		case "Avocado":
			console.log("Avocado is green");
			break;
		default:
			console.log("Not defined!");
	}
}

/* Kreiraj objekat book sa svojstvima title, author, year, i genre, a zatim napiši for-in petlju koja prolazi kroz 
sva svojstva objekta i koristi if-else strukturu da ispise poruku "Old book" ako je godina izdanja pre 2000, inače "New book". */

let book = [
	{
		title: "To Kill a Mockingbird",
		author: "Harper Lee",
		year: "1960",
		genre: "Fiction",
	},
	{
		title: "Pride and Prejudice",
		author: "Jane Austen",
		year: "1813",
		genre: "Romance",
	},
	{
		title: "The Hobbit",
		author: "J.R.R. Tolkien",
		year: "2007",
		genre: "Fantasy",
	},
];

for (let books in book) {
	/* console.log(book[books].title);  Check*/
	if (book[books].year > 2000) {
		console.log(book[books].title + " New book");
	} else if (book[books].year < 2000) {
		console.log(book[books].title + " Old book");
	} else {
		console.log("Year not defined!");
	}
}

/* Kreiraj niz employees koji sadrži objekte sa svojstvima name i salary, a zatim napiši for petlju koja prolazi 
kroz niz i koristi if-else strukturu da ispise "High salary" za plate iznad 50000, "Medium salary" za plate između 
30000 i 50000, i "Low salary" za plate ispod 30000.
 */

let employees = [
	{
		name: "Petrovic",
		salery: 4800,
	},
	{
		name: "Obradovic",
		salery: 5900,
	},
	{
		name: "Jovanovic",
		salery: 3900,
	},
	{
		name: "Sekulic",
		salery: 7200,
	},
	{
		name: "Zivkovic",
		salery: 1900,
	},
];

for (let i = 0; i < employees.length; i++) {
	/* console.log(employees[i].name);  Check */
	if (employees[i].salery > 5000) {
		console.log(employees[i].name + " High salery!");
	} else if (employees[i].salery < 5000 && employees[i].salery > 3000) {
		console.log(employees[i].name + " Medim salery!");
	} else {
		console.log(employees[i].name + " Low salery :(");
	}
}
/* Kreiraj niz cities sa nekoliko imena gradova, a zatim napiši petlju koja prolazi kroz niz i koristi switch strukturu 
da ispise poruku specifičnu za svaki grad (npr. "Welcome to New York", "Welcome to Los Angeles").
 */

let cities = ["Cuprija", "Beograd", "Jagodina", "Paracin"];

for (let i = 0; i < cities.length; i++) {
	/* console.log(cities[i]);  Check*/
	switch (cities[i]) {
		case "Cuprija":
			console.log("Welcome to " + cities[i]);
			break;
		case "Beograd":
			console.log("Welcome to " + cities[i]);
			break;
		case "Jagodina":
			console.log("Welcome to " + cities[i]);
			break;
		case "Paracin":
			console.log("Welcome to " + cities[i]);
			break;
		default:
			console.log("City not defined");
	}
}
