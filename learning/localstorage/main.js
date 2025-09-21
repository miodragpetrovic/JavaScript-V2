// Jednostavan primer koriscenja localStorage objekta
localStorage.setItem('name', 'Miodrag Petrovic');
localStorage.setItem('age', '30');

console.log(localStorage.getItem('name'));

let fullName = document.getElementById('displayFullName');
fullName.innerHTML = "My full name is " + localStorage.getItem('name') + " and I'm " + localStorage.getItem('age') + " years old.";

let firstName = document.getElementById('firstName');
