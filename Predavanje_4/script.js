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

// Jednostavnije resenje sa manje code-a

if (name == "miodrag" && password == "tajnaSifra") {
	console.log("Korisnicko ime i lozinka su tacni! Dobrodosli!!!");
} else {
	console.log(
		"Uneli ste pogresno korisnicko ime ili loziku. Pokustajte ponovo!"
	);
}
