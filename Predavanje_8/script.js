document.querySelector("#title").style.color = "red";
document.querySelector(".subtitle").style.color = "green";
document.getElementsByClassName("subtitle2")[0].style.color = "blue"; // [0] oznacava prvi element

let products = document.querySelectorAll(".product");
/* for (let p in products) {
	products[p].style.color = "red";
} */

for (let product of products) {
	product.style.color = "red";
}

let cars = [
	{
		make: "BMW",
		price: "25,000€",
		image:
			"https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/responsibility/the-new-bmw-i5-edrive_720x720.jpeg",
	},
	{
		make: "Audi",
		price: "28,000€",
		image:
			"https://nar.media.audi.com/is/image/audinar/nemo/ca/Models/rs7/MY25/1920x1920-P1-MY25-RS-7-performance-Front-Profile-Driving-4359.jpg?width=768",
	},
	{
		make: "Mercedes",
		price: "30,000€",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/2018_Mercedes-Benz_C200_Avantgarde_%28W_205%29_sedan_%282018-10-27%29_01.jpg/800px-2018_Mercedes-Benz_C200_Avantgarde_%28W_205%29_sedan_%282018-10-27%29_01.jpg",
	},
	{
		make: "Volkswagen",
		price: "20,000€",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/2018_Volkswagen_Golf_SE_TSI_1.5_Front.jpg/800px-2018_Volkswagen_Golf_SE_TSI_1.5_Front.jpg",
	},
	{
		make: "Toyota",
		price: "18,000€",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8_Front.jpg/800px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8_Front.jpghttps://img-optimize.toyota-europe.com/resize/ccis/680x680/zip/ch/configurationtype/visual-for-grade-selector/product-token/7c52a0ef-44d4-4194-ba82-656b05cc1cda/grade/2c18cf9c-3fa8-4447-b848-3fdd922c78f9/body/7b77d85b-8f26-4645-82ac-221https://scene7.toyota.eu/is/image/toyotaeurope/taxo-assurances-06-2024-corolla?wid=1280&fit=fit,1&ts=0&resMode=sharp2&op_usm=1.75,0.3,2,054a7d6293/fallback/true/padding/50,50,50,50/image-quality/70/day-exterior-4.pnghttps://scene7.toyota.eu/is/image/toyouope/taxo-assurances-06-2024-corolla?wid=1280&fit=fit,1&ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0",
	},
	{
		make: "Peugeot",
		price: "16,500€",
		image:
			"https://vehicle.imgix.net/3820567/23aa30a4-fba0-46ec-803e-6d2fa1c84681.JPG",
	},
	{
		make: "Kia",
		price: "17,000€",
		image:
			"https://www.autosprint.ch/wp-content/uploads/2023/07/Kia-Picanto_autosprint.ch_-scaled.jpg",
	},
];

for (let car of cars) {
	console.log(car.make);

	let myDiv = document.createElement("div");

	myDiv.innerHTML = `<h3>${car.make}</h3>
	<p>Price: ${car.price}</p>
	<img src="${car.image}" alt="${car.make}" width="200">`;

	document.body.appendChild(myDiv);
}

// Samo testiranje
/* for (let car of cars) {
	console.log(car.make);

	let myDiv = document.createElement("div");

	myDiv.setAttribute(`<h2>${car.make}</h2>`);

	document.body.appendChild(myDiv);
} */
