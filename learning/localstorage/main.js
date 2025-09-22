// Jednostavan primer koriscenja localStorage objekta
localStorage.setItem('name', 'Miodrag Petrovic');
localStorage.setItem('age', '30');

console.log(localStorage.getItem('name'));

let fullName = document.getElementById('displayFullName');
fullName.innerHTML = "My full name is " + localStorage.getItem('name') + " and I'm " + localStorage.getItem('age') + " years old.";


// Ubaci preko forme ime u localStorage
let btn  = document.getElementById('btn');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    let firstName = document.getElementById('firstName');
    localStorage.setItem('name', firstName.value);
    fullName.innerHTML = "My full name is " + localStorage.getItem('name') + " and I'm " + localStorage.getItem('age') + " years old.";

    let displayFullName = document.getElementById('fullName');
    displayFullName.innerHTML = localStorage.getItem('name');
});