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
	productsElement.innerHTML += ads[i]["title"] + "<br />";
	productsElement.innerHTML += ads[i]["price"] + "<br />";
	productsElement.innerHTML += ads[i]["image"] + "<br />";
}

// Treci nacin sa for of petljom
/* for (ad of ads) {
	productsElement.innerHTML +=
		ad["title"] + "<br />" + ad["price"] + "<br />" + ad["image"];
}
 */
