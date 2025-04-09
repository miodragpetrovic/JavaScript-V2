let ads = [
	{
		title: "Skoda octavia 2014",
		price: 9950,
		image:
			"https://www.autocar.co.uk/sites/autocar.co.uk/files/skoda-octavia.jpg",
	},
	{
		title: "Audi A4",
		price: 8000,
		image:
			"https://s1.cdn.autoevolution.com/images/gallery/AUDI-A4-5237_23.jpg",
	},
	{
		title: "Merzedes E200",
		price: 6000,
		image:
			"https://img-ik.cars.co.za/news-site-za/images/2021/02/Mercedes-Benz-E200-Kompressor.jpg?tr=h-347,w-617,q-80",
	},
];

let productsElement = document.getElementById("products");

// Prvi nacin sa for In petljom
/* for (let ad in ads) {
	productsElement.innerHTML +=
		"<br /> " +
		ads[ad]["title"] +
		"<br /> " +
		ads[ad]["price"] +
		"<br />" +
		ads[ad]["image"];
} */

// Drugi nacin sa for petljom
for (let i = 0; i < ads.length; i++) {
	productsElement.innerHTML +=
		"<br />" +
		ads[i]["title"] +
		"<br />" +
		ads[i]["price"] +
		"<br />" +
		ads[i]["image"];
}

// Treci nacin sa for of petljom
/* for (ad of ads) {
	productsElement.innerHTML +=
		ad["title"] + "<br />" + ad["price"] + "<br />" + ad["image"];
}
 */
