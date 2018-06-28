'use strict'
let name;
do {
    name = prompt('Enter your full name', '').trim();
} while ( !name );

let age;
do {
    age = prompt('How old are you?', '18');
} while ( isNaN(age) || age <= 0 );

let gender = confirm('Are you a man?');

let famStatus; 
do {
    famStatus = prompt('Indicate your family status', '').trim();
} while ( !famStatus );

let footSize;
do {
    footSize  = prompt('Enter your foot size', '42');
} while ( isNaN(footSize) || footSize <= 0);

let address; 
do {
    address = prompt('Enter your address', '').trim();
} while ( !address );

const maturity = (age >= 18) ? 'Of age' : 'Uderage';

const Gender = gender ? 'Male' : 'Female';

alert(
    `Name : ${name}
    Age : ${age}
    Gender : ${Gender}
    Family Status : ${famStatus}
    Foot Size : ${footSize}
    Address : ${address}
    Maturity : ${maturity}`);




