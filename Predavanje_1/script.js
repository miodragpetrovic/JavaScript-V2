// Comments
let name = "Miodrag Petrovic"; // Text -> String
let age = 42; // Number -> Integer
let boolean = true; // Logicka vrednost -> Boolean -> true moze i da ispise 1 kao tacno ili 0 kao false
let float = 24.4; // Float
let bigNumber = 123456789; // Veliki brojevi -> bigint
let num = undefined; // Vrednost koja nije inicijalizovana -> Undefined
let nul = null; // Prazna vrednost -> Null
let symbol = Symbol("Miodrag"); // Jedinstveni identikator -> Symbol

// Kolekcija podataka -> Object
let obJect = {
	fname: "Miodrag",
	lname: "Petrovic",
	year: 1995,
};

console.log(obJect.fname); // Log

let firstName = "Miodrag";
let lastName = "Petrovic";
let fullName = firstName + " " + lastName;

console.log(fullName);

let prviBroj = 33;
let drugiBroj = 89;
let zbir = prviBroj + drugiBroj;
console.log(zbir);

let cena = 20;
let kursEvra = 117.2;
let dinari = cena * kursEvra;
console.log(dinari);
