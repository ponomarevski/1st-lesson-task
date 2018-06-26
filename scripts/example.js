'use strict'
let name = prompt('Enter your full name', '');
let age;

while ( !( !isNaN(age) && age > 0) ) {
    age = prompt('How old are you?', '18');
}

let sex = confirm('Are you a man?');
let famStatus = prompt('Indicate your family status', '');

let footSize = prompt('Enter your foot size', '42');
let address = prompt('Enter your address?', '');

console.log(age);

let maturity;
if (age >= 18) {
    maturity = 'Of age';
} else {
    maturity = 'Underage';
}


if (sex === true) {
    sex = 'Male';
} else {
    sex = 'Female';
}

alert(`Name : ${name}\nAge : ${age}\nSex : ${sex}\nFamily Status : ${famStatus}\nFoot Size : ${footSize}\nAddress : ${address}\nMaturity : ${maturity}`);




