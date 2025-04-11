let cars = [
	{
		make: "BMW",
		price: "25,000€",
		year: 2019,
		image:
			"https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/responsibility/the-new-bmw-i5-edrive_720x720.jpeg",
	},
	{
		make: "Audi",
		price: "28,000€",
		year: 2020,
		image:
			"https://images.handelsblatt.com/jCbT6KLftrIa/cover/1400/934/452/1064/598/746/0.5/0.5/audi-a6-avant-e-tron.jpeg",
	},
	{
		make: "Mercedes",
		price: "30,000€",
		year: 2018,
		image:
			"https://www.mercedes-benz.ch/content/dam/hq/passengercars/cars/cle/cle-coupe-c236-pi/overview/stage/06-2023/images/mercedes-benz-cle-coupe-c236-stage-3840x3840-06-2023.jpg/1740018524347.jpg?im=Crop,rect=(1314,795,2415,2415);Resize=(828)",
	},
	{
		make: "Volkswagen",
		price: "20,000€",
		year: 2019,
		image:
			"https://uploads.vw-mms.de/system/production/images/cws/080/885/images/c0ee10b0487d4c022dafbc7ca6345901997defe6/B2024CW00030_web_1600.jpg?1706085847",
	},
	{
		make: "Toyota",
		price: "18,000€",
		year: 2021,
		image:
			"https://scene7.toyota.eu/is/image/toyotaeurope/Toyota_Yaris_GR_Front-3_4-3:Medium-Landscape?ts=1705061708918&resMode=sharp2&op_usm=1.75,0.3,2,0",
	},
	{
		make: "Peugeot",
		price: "16,500€",
		year: 2022,
		image:
			"https://img.chmedia.ch/2020/10/5/9dc27e58-6b73-48e0-ab59-504c329cb7c1.jpeg?width=1360&height=777&fit=bounds&quality=75&auto=webp&crop=1999,1142,x0,y94",
	},
	{
		make: "Kia",
		price: "17,000€",
		year: 2018,
		image:
			"https://www.autosprint.ch/wp-content/uploads/2023/07/Kia-Picanto_autosprint.ch_-scaled.jpg",
	},
	{
		make: "Hyundai",
		price: "19,500€",
		year: 2020,
		image: "https://imgd.aeplcdn.com/664x374/n/dkalcva_1596121.jpg?q=80",
	},
	{
		make: "Opel",
		price: "15,000€",
		year: 2017,
		image:
			"https://visual3d-secure.opel-vauxhall.com/V3DImage.ashx?client=CFGAP3D&mkt=CH&env=PROD&version=1GQOSYKP9KB0A050&ratio=1&format=jpg&quality=90&width=640&view=001&color=0MP00NWP&trim=0PEG0RFR&opt1=JD02&opt2=ZHRS&back=0https://visual3d-secure.opel-vauxhall.com/V3DImage.ashx?client=CFGAP3D&mkt=CH&env=PROD&version=1GQOSYKP9KB0A050&ratio=1&format=jpg&quality=90&width=640&view=001&color=0MP00NWP&trim=0PEG0RFR&opt1=JD02&opt2=ZHRS&back=0",
	},
];

const carListing = document.getElementById("carListing");

for (let car of cars) {
	/* console.log(car.make, car.price, car.year, car.image);  */ // Sljaka

	let carElement = document.createElement("div");
	carElement.classList.add("carCard");

	let carTitle = document.createElement("h2");
	carTitle.textContent = car.make;

	let carPrice = document.createElement("h4");
	carPrice.textContent = car.price;

	let carYear = document.createElement("p");
	carYear.textContent = car.year;

	let carImage = document.createElement("img");
	carImage.src = car.image;
	carImage.alt = car.make;
	carImage.style.width = "290px";

	carElement.append(carImage, carTitle, carPrice, carYear);

	carListing.appendChild(carElement);
}
