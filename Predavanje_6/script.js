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
		price: 100,
		amount: 1,
	},
	{
		name: "Mleko",
		price: 250,
		amount: 1,
	},
];

for (let korpe in korpa) {
	console.log(korpa[korpe].price);
}
