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

let temperatura = "26";

if (temperatura < 15) {
	console.log("Hladno je");
} else if (temperatura > 15 && temperatura < 25) {
	console.log("Umereno je");
} else if (temperatura > 25) {
	console.log("Vruce je");
} else {
	console.log("Nemamo tacne podatke pokusajte kasnije");
}

/* Kreiraj promenljivu dobaDana koja može imati vrednosti "jutro", "popodne", ili "veče", a zatim napiši if-else 
strukturu koja ispisuje odgovarajuću poruku kao što su "Dobro jutro", "Dobar dan", ili "Dobro veče" na osnovu 
vrednosti te promenljive. */

let dobarDan = "jutro";

if (dobarDan == "jutro") {
	console.log("Dobar " + dobarDan);
} else if (dobarDan == "dan") {
	console.log("Dobar " + dobarDan);
} else if (dobarDan == "vece") {
	console.log("Dobro " + dobarDan);
} else {
	console.log("Greska! Pokusajte ponovo");
}

/* Kreiraj promenljivu godineRada koja sadrži broj godina koliko osoba radi u nekoj firmi, a zatim napiši if-else strukturu 
koja ispisuje "Početnik" ako je broj godina manji od 2, "Iskusan radnik" ako je između 2 i 5, i "Veteran" ako je veći od 5. */

let godineRada = 6;

if (godineRada < 2) {
	console.log("Pocetnik");
} else if (godineRada > 2 && godineRada < 5) {
	console.log("Iskusan radnik");
} else if (godineRada > 5) {
	console.log("Veteran");
} else {
	console.log("Nema tacnih podataka!");
}

/* Kreiraj promenljivu age koja sadrži broj godina, a zatim napiši if-else strukturu koja ispisuje "Child" ako je broj godina manji 
od 12, "Teen" ako je između 12 i 18, i "Adult" ako je veći od 18. */

let age = 11;

if (age < 12) {
	console.log("Child");
} else if (age < 18) {
	console.log("Teen");
} else if (age > 18) {
	console.log("Adult");
}

/* Kreiraj promenljivu dayOfWeek koja sadrži naziv dana u nedelji, a zatim napiši switch strukturu koja ispisuje 
"It's a weekend!" za subotu i nedelju, a "It's a weekday." za ostale dane. */

let dayOfWeek = "Monday";

switch (dayOfWeek) {
	case "Saturday":
	case "Sunday":
		console.log(" It's a weekend!");
		break;
	case "Monday":
	case "Tuesday":
	case "Wednesday":
	case "Thursday":
	case "Friday":
		console.log("It'a a weekday.");
		break;
	default:
		console.log("Not set");
}

/* Kreiraj promenljivu score koja sadrži broj poena, a zatim napiši if-else strukturu koja ispisuje "Fail" ako je 
broj poena manji od 50, "Pass" ako je između 50 i 75, i "Excellent" ako je veći od 75. */

let score = 54;

if (score < 51) {
	console.log("Fail");
} else if (score > 50 && score < 75) {
	console.log("Pass");
} else if (score > 75) {
	console.log("Excellent");
}

/* Kreiraj promenljivu setCurrency i dodaj vrednost npr. CHF.
Napisi switch strukturu sa drugim valutama CHF, USD, EUR, CAD.
Ako u promnljivu staviomo USD trba da ispise "USA currancy is USD"*
i tako da ispisise za svaku valutu drugacije*/

let setCurrency = "USD";

switch (setCurrency) {
	case "CHF":
		console.log("The currency in Switzerland is CHF");
		break;
	case "USD":
		console.log("The currency in America is USD");
		break;
	case "EUR":
		console.log("The currency in Germany is EUR");
		break;
	case "CAD":
		console.log("The currency in Canada is CAD");
		break;
	default:
		console.log("Not set");
}
