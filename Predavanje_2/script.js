//  indexi         0        1        2
let products = ["Hleb", "Mleko", "Jogurt"];
console.log(products[3]);

products.push("Novine"); // Dodavanje vrednosti u array
console.log(products[3]);

products.splice(0, 1); // Brisanje specivicnog index-a 0 je index a 1 znaci samo prvi ako stavimo 2 obrisace prva dva
console.log(products);

let prices = [22.5, 13, 99, "hleb"];

let cars = ["BMW", "Mercedes", "Audi"];
console.log(cars);
cars[0] = "FIAT";
console.log(cars.sort()); // Sortiranje array-a

// Objekat
let personalID = {
	//key    //value
	fname: "Miodrag",
	lname: "Petrovic",
	dateOfBirth: "29.10.1995",
	hobbies: ["programming", "teaching"], // Dodavanje array-a u objekat
};

let sentence = personalID.fname + " has gone " + personalID.hobbies[1];
console.log(sentence);

console.log(personalID.hobbies[0]); // Ispisivanje prvog indexa iz array-a u objektu

console.log(personalID.fname, personalID.lname);

personalID.height = 181.5;
console.log(personalID);
