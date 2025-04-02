let name = "miodrag";

if (name == "miodrag") {
	console.log("Pozdrav Miodraze!");
} else {
	console.log("Niste administrator");
}

let password = "tajnaSifra";
if (password == "tajnaSifra") {
	console.log("Uneli ste tacnu sifru!");
} else {
	console.log("Uneli ste pogresnu sifru!");
}

// Less code solution

if (name == "miodrag" && password == "tajnaSifra") {
	console.log("Korisnicko ime i lozinka su tacni! Dobrodosli!!!");
} else {
	console.log(
		"Uneli ste pogresno korisnicko ime ili loziku. Pokustajte ponovo!"
	);
}

// New exercise
// Create new variable userType and value admin

let userType = "admin";

if (userType == "admin" || userType == "moderator") {
	console.log("Vi ste administrator.");
} else {
	console.log("Vi ste obican clan");
}

// Kako sa nizom vrsiti uporedjivanje

//Nacin 1

let allowedTypes = ["admin", "moderator"]; // allowedTypes je array

if (allowedTypes.includes(userType)) {
	console.log("1. Vi ste administrator!");
} else {
	console.log("1. Vi ste obican clanxx!");
}

// Nacin 2

let ifCheck = allowedTypes.includes(userType);
if (ifCheck == true) {
	// Moze i bez true samo ifCheck roverice dali je true ili false sam
	console.log("2. Vi ste administrator!");
} else {
	console.log("2. Vi ste obican clan!");
}
