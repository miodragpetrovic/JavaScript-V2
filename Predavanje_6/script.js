let products = ["Hleb", "Mleko", "Jogurt"];

// FOR IN Petlja -> Kod for in petlje uvek promenljivu deklarisati kao let ili const
for (let product in products) {
	console.log(products[product]);
}

// FOR PETLJA
for (let i = 0; i < products.length; i++) {
	console.log(products[i]);
}

let korpa = [
	{
		name: "hleb",
		price: 99,
		amount: 1,
	},
	{
		name: "luk",
		price: 10,
		amount: 1,
	},
	{
		name: "Mleko",
		price: 10,
		amount: 1,
	},
];
/* console.log(korpa[0]["price"]); */ // Ispisivanje samo cene iz objekta

/* for (let korpe in korpa) {
	console.log(korpa[korpe].price);
} */

// Vezba
// Ako je cena proizvoda veza od 200 dinara zaustaviti petlju
for (let korpe in korpa) {
	if (korpa[korpe]["price"] > 200) {
	}
	console.log("Proizvod kosta vise od 200");
}
