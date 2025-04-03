// Napraviti tri paketa (Promenljive) Standrad, Premium, Business sa razlicitim cenama
// Napraviti promenljivu za valutu
// Izvrsiti proveru
// Ako izaberemo neki od paketa treba da prikaze njegovu cenu i valutu.

let currency = "RS";
let standard = 800;
let premium = 1200;
let business = 2300;

if (standard === 700 && currency === "RS") {
	console.log(
		"Izabrali ste paket Standard. Cena je " + standard + " " + currency
	);
} else if (premium === 1200 && currency === "RS") {
	console.log(
		"Izabrali ste paket Premium. Cena je " + premium + " " + currency
	);
} else if (business === 2300 && currency === "RS") {
	console.log(
		"Izabrali ste paket Business. Cena je " + business + " " + currency
	);
}

/* Kreiraj promenljivu temperatura koja sadrži trenutnu temperaturu u stepenima Celzijusa, a zatim napiši 
if-else strukturu koja ispisuje "Hladno je" ako je temperatura manja od 15, 
"Umereno je" ako je između 15 i 25, i 
"Vruće je" ako je veća od 25. */

let temperatura = "40";

if (temperatura < 15) {
	console.log("Hladno je");
} else if (temperatura > 15 && temperatura < 25) {
	console.log("Umereno je");
} else if (temperatura > 25) {
	console.log("Vruce je");
} else {
	console.log("Nemamo tacne podatke pokusajte kasnije");
}
