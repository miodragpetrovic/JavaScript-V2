// Napraviti tri paketa (Promenljive) Standrad, Premium, Business ca razlicitim cenama
// Napraviti isto possebnu promenljivu za valutu
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
