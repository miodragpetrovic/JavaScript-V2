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
			"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/2019_BMW_330i_M_Sport_Automatic_2.0.jpg/800px-2019_BMW_330i_M_Sport_Automatic_2.0.jpg",
	},
	{
		make: "Audi",
		price: "28,000€",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Audi_A4_2.0_TDI_S-line_Limousine_%28B9%2C_Facelift%29_%E2%80%93_f_10072021.jpg/800px-Audi_A4_2.0_TDI_S-line_Limousine_%28B9%2C_Facelift%29_%E2%80%93_f_10072021.jpg",
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
			"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8_Front.jpg/800px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8_Front.jpg",
	},
	{
		make: "Peugeot",
		price: "16,500€",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Peugeot_308_GT_Line_PureTech_130_EAT8_Automatic_%E2%80%93_Frontansicht%2C_11._Juli_2021%2C_D%C3%BCsseldorf.jpg/800px-Peugeot_308_GT_Line_PureTech_130_EAT8_Automatic_%E2%80%93_Frontansicht%2C_11._Juli_2021%2C_D%C3%BCsseldorf.jpg",
	},
	{
		make: "Kia",
		price: "17,000€",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/2018_Kia_Ceed_1.4.jpg/800px-2018_Kia_Ceed_1.4.jpg",
	},
];
