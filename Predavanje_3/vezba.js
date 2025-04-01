let content = "video";

if (content == "video") {
	console.log("https://www.youtube.com/watch?v=qPd9qPUR2_U");
} else if (content == "site") {
	console.log("itmentorstva.com");
} else {
	console.log(
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s"
	);
}

let price = 500;

if (price <= 500) {
	console.log("Jeftino je!");
} else {
	console.log("Skupo je!");
}

let component = "Tastatura";
let priceNew = 50;

// && znaci i oba uslova moraju biti tacna
if (component == "Tastatura" && priceNew == 50) {
	console.log("Uspesno testiranje!");
} else {
	console.log("Nesupesno testiranje");
}
