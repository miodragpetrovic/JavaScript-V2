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
		make: "",
		price: "",
		iamge: "",
	},
];
