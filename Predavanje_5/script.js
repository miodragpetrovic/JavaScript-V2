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
