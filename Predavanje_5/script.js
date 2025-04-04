// Vezba

let name = "ADMIN";
name = name.toLowerCase();

if (name == "admin") {
	console.log("Pozdrav admine!");
} else {
	console.log("Vi niste administrator.");
}

// Vezba
// Ako korisnikovo ime pocinje slovom "a" isposati ime

let fName = "Aleksandar";
fName.startsWith("A");

if (fName == "Aleksandar") {
	console.log("Tacno, vasi ime pocinje samoglanikom A");
} else {
	console.log("Netacno, vase ime ne pocinje samoglasnikom A");
}

// Vezba

let vowels = ["A", "E", "I", "O", "U"];
let myName = "Uros";

if (myName.includes(vowels[4])) {
	console.log("Tacno vasi ime pocinje samoglasnikom I");
} else {
	console.log("Netacno, vase ime ne pocinje samoglasnikom!");
}

// ===
let number = 2; // Bio je string
if (number === 2) {
	console.log("Broj je 2"); // === Proverava tip podatka i dali je vrednost ista
} else {
	console.log("Broj nije 2");
}

// Loops - Petlje

let cars = ["BMW", "AUDI", " MERZEDES"];

for (let i = 0; i < cars.length; i++) {
	cars[i];
}

// For, forEach, while, do while, for in, for of

//For petlja

for (let i = 1; i < 101; i++) {
	// i++ inkrementacija
	console.log(i);
}
