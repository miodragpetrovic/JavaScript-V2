let name = "Admin";
name = name.toLowerCase(); // kovertuje u mala slova

if (name == "admin") {
	console.log("Pozdrav admine!");
} else {
	console.log("Vi niste administrator");
}

console.log(name[0]);

if (name[0] == "a") {
	console.log("Vase ime pocinje samoglasnikom");
}

// Petlje - Loops

/* let cars = ["AUDI", "MERZEDES", "BMW", "OPEL", "RENAULT"];
cars.push("FIAT", "MASERATI");
let output = "";

for (i = 0; i < cars.length; i++) {
	output += cars[i] + "<br>";
}

document.querySelector(".demo").innerHTML = output; */
