let cities = [
	"Subotica",
	"Beograd",
	"Novi Sad",
	"Smederevo",
	"Pozarevac",
	"Jagodina",
	"Paracin",
	"Cuprija",
];

let objectType = ["Stanovi", "Kuce", "Poslovni prostori", "Placevi", "Garaze"];

let roomNumber = [
	"Garsonjera",
	"Jednosoban stan",
	"Jednoiposoban stan",
	"Dvosoban stan",
	"Dvoiposoban stan",
	"Trosoban stan",
	"Troiposoban stan",
	"Cetvorosoban stan",
	"4.5 i vise soba",
];

const realEstatesListing = [
	{
		id: 1,
		city: "Beograd",
		objectType: "Stanovi",
		roomNumber: "Dvosoban stan",
		area: 62,
		price: 98000,
		description: "Lep dvosoban stan u centru Beograda, blizu svih sadržaja.",
		images: ["/images/estate1.jpg", "/images/estate2.jpg"],
	},
	{
		id: 2,
		city: "Novi Sad",
		objectType: "Kuce",
		roomNumber: "Cetvorosoban stan",
		area: 120,
		price: 145000,
		description: "Prostrana kuća u mirnom delu grada sa velikim dvorištem.",
		images: ["/images/estate3.jpg"],
	},
	{
		id: 3,
		city: "Jagodina",
		objectType: "Placevi",
		roomNumber: null,
		area: 350,
		price: 32000,
		description: "Plac u blizini Akva parka, pogodan za gradnju kuće.",
		images: ["/images/estate4.jpg"],
	},
	{
		id: 4,
		city: "Subotica",
		objectType: "Garaze",
		roomNumber: null,
		area: 18,
		price: 9500,
		description: "Garaža u centru Subotice, nova kapija i rasveta.",
		images: ["/images/estate5.jpg"],
	},
	{
		id: 5,
		city: "Cuprija",
		objectType: "Stanovi",
		roomNumber: "Jednoiposoban stan",
		area: 47,
		price: 45000,
		description: "Funkcionalan stan idealan za par ili malu porodicu.",
		images: ["/images/estate6.jpg"],
	},
];

// Search Box
let myCity = document.querySelector('#city');

for (let city of cities){
	let option = document.createElement('option'); // Napravili smo option element
	option.textContent = city;
	myCity.appendChild(option); // Ubacili smo u select elementu option element putem JavaScript
}

let typeObject = document.querySelector('#type');

for ( let objectTyp of objectType){
	let optionType = document.createElement('option');
	optionType.textContent = objectTyp;
	typeObject.appendChild(optionType);
}

let sizeOf = document.querySelector('#sizeOf');

for( let rooms of roomNumber){
	let roomOption = createElement('option');
	
}







// City
/* let searchBtn = document.querySelector("#searchBtn");



for (let cityOf of realEstatesListing) {
	console.log(cityOf['objectType']);
} */


// Typ

// Room numbers

// Real Estate Listing
