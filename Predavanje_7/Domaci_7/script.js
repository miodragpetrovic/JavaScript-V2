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

for (let ad in ads) {
	productsElement.innerHTML +=
		"<br /> " +
		ads[ad]["title"] +
		"<br /> " +
		ads[ad]["price"] +
		"<br />" +
		ads[ad]["image"];
}
